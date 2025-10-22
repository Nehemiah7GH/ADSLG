import { ServiceProgram, Hymn } from '../types';
import { getDatabase } from './init';

export const getAllServicePrograms = async (): Promise<ServiceProgram[]> => {
  const db = await getDatabase();
  const result = await db.getAllAsync<any>(
    'SELECT * FROM service_programs ORDER BY date DESC, created_at DESC'
  );

  const programs: ServiceProgram[] = [];

  for (const row of result) {
    const hymnIds = await getProgramHymnIds(row.id);
    programs.push({
      id: row.id,
      name: row.name,
      date: row.date,
      hymnIds,
      notes: row.notes,
    });
  }

  return programs;
};

export const getServiceProgramById = async (id: number): Promise<ServiceProgram | null> => {
  const db = await getDatabase();
  const result = await db.getFirstAsync<any>(
    'SELECT * FROM service_programs WHERE id = ?',
    [id]
  );

  if (!result) return null;

  const hymnIds = await getProgramHymnIds(id);

  return {
    id: result.id,
    name: result.name,
    date: result.date,
    hymnIds,
    notes: result.notes,
  };
};

export const getProgramHymnIds = async (programId: number): Promise<number[]> => {
  const db = await getDatabase();
  const result = await db.getAllAsync<any>(
    'SELECT hymn_id FROM service_program_hymns WHERE program_id = ? ORDER BY position ASC',
    [programId]
  );
  return result.map(row => row.hymn_id);
};

export const getProgramHymns = async (programId: number): Promise<Hymn[]> => {
  const db = await getDatabase();
  const result = await db.getAllAsync<any>(
    `SELECT h.*,
            CASE WHEN f.id IS NOT NULL THEN 1 ELSE 0 END as isFavorite
     FROM service_program_hymns sph
     JOIN hymns h ON sph.hymn_id = h.id
     LEFT JOIN favorites f ON h.id = f.hymn_id
     WHERE sph.program_id = ?
     ORDER BY sph.position ASC`,
    [programId]
  );

  return result.map(row => ({
    id: row.id,
    number: row.number,
    title: row.title,
    lyrics: row.lyrics,
    refrain: row.refrain,
    theme: row.theme,
    isFavorite: row.isFavorite === 1,
  }));
};

export const createServiceProgram = async (
  name: string,
  date: string,
  notes?: string
): Promise<number> => {
  const db = await getDatabase();
  const result = await db.runAsync(
    'INSERT INTO service_programs (name, date, notes, created_at) VALUES (?, ?, ?, datetime("now"))',
    [name, date, notes || null]
  );
  return result.lastInsertRowId;
};

export const updateServiceProgram = async (
  id: number,
  name: string,
  date: string,
  notes?: string
): Promise<void> => {
  const db = await getDatabase();
  await db.runAsync(
    'UPDATE service_programs SET name = ?, date = ?, notes = ? WHERE id = ?',
    [name, date, notes || null, id]
  );
};

export const deleteServiceProgram = async (id: number): Promise<void> => {
  const db = await getDatabase();
  await db.runAsync('DELETE FROM service_programs WHERE id = ?', [id]);
};

export const addHymnToProgram = async (
  programId: number,
  hymnId: number
): Promise<void> => {
  const db = await getDatabase();

  // Get the next position
  const result = await db.getFirstAsync<any>(
    'SELECT COALESCE(MAX(position), 0) + 1 as next_position FROM service_program_hymns WHERE program_id = ?',
    [programId]
  );

  const position = result?.next_position || 1;

  await db.runAsync(
    'INSERT INTO service_program_hymns (program_id, hymn_id, position) VALUES (?, ?, ?)',
    [programId, hymnId, position]
  );
};

export const removeHymnFromProgram = async (
  programId: number,
  hymnId: number
): Promise<void> => {
  const db = await getDatabase();
  await db.runAsync(
    'DELETE FROM service_program_hymns WHERE program_id = ? AND hymn_id = ?',
    [programId, hymnId]
  );

  // Reorder positions
  const hymns = await db.getAllAsync<any>(
    'SELECT id FROM service_program_hymns WHERE program_id = ? ORDER BY position ASC',
    [programId]
  );

  for (let i = 0; i < hymns.length; i++) {
    await db.runAsync(
      'UPDATE service_program_hymns SET position = ? WHERE id = ?',
      [i + 1, hymns[i].id]
    );
  }
};

export const reorderProgramHymns = async (
  programId: number,
  hymnIds: number[]
): Promise<void> => {
  const db = await getDatabase();

  for (let i = 0; i < hymnIds.length; i++) {
    await db.runAsync(
      'UPDATE service_program_hymns SET position = ? WHERE program_id = ? AND hymn_id = ?',
      [i + 1, programId, hymnIds[i]]
    );
  }
};
