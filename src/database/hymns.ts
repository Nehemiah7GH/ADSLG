import { SQLiteDatabase } from 'expo-sqlite';
import { Hymn } from '../types';
import { getDatabase } from './init';

export const getAllHymns = async (): Promise<Hymn[]> => {
  const db = await getDatabase();
  const result = await db.getAllAsync<any>(
    `SELECT h.*,
            CASE WHEN f.id IS NOT NULL THEN 1 ELSE 0 END as isFavorite
     FROM hymns h
     LEFT JOIN favorites f ON h.id = f.hymn_id
     ORDER BY h.number ASC`
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

export const getHymnById = async (id: number): Promise<Hymn | null> => {
  const db = await getDatabase();
  const result = await db.getFirstAsync<any>(
    `SELECT h.*,
            CASE WHEN f.id IS NOT NULL THEN 1 ELSE 0 END as isFavorite
     FROM hymns h
     LEFT JOIN favorites f ON h.id = f.hymn_id
     WHERE h.id = ?`,
    [id]
  );

  if (!result) return null;

  return {
    id: result.id,
    number: result.number,
    title: result.title,
    lyrics: result.lyrics,
    refrain: result.refrain,
    theme: result.theme,
    isFavorite: result.isFavorite === 1,
  };
};

export const getHymnByNumber = async (number: number): Promise<Hymn | null> => {
  const db = await getDatabase();
  const result = await db.getFirstAsync<any>(
    `SELECT h.*,
            CASE WHEN f.id IS NOT NULL THEN 1 ELSE 0 END as isFavorite
     FROM hymns h
     LEFT JOIN favorites f ON h.id = f.hymn_id
     WHERE h.number = ?`,
    [number]
  );

  if (!result) return null;

  return {
    id: result.id,
    number: result.number,
    title: result.title,
    lyrics: result.lyrics,
    refrain: result.refrain,
    theme: result.theme,
    isFavorite: result.isFavorite === 1,
  };
};

export const searchHymns = async (query: string): Promise<Hymn[]> => {
  const db = await getDatabase();
  const searchPattern = `%${query}%`;
  const result = await db.getAllAsync<any>(
    `SELECT h.*,
            CASE WHEN f.id IS NOT NULL THEN 1 ELSE 0 END as isFavorite
     FROM hymns h
     LEFT JOIN favorites f ON h.id = f.hymn_id
     WHERE h.title LIKE ? OR h.lyrics LIKE ? OR CAST(h.number AS TEXT) LIKE ?
     ORDER BY h.number ASC`,
    [searchPattern, searchPattern, searchPattern]
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

export const getHymnsByTheme = async (theme: string): Promise<Hymn[]> => {
  const db = await getDatabase();
  const result = await db.getAllAsync<any>(
    `SELECT h.*,
            CASE WHEN f.id IS NOT NULL THEN 1 ELSE 0 END as isFavorite
     FROM hymns h
     LEFT JOIN favorites f ON h.id = f.hymn_id
     WHERE h.theme = ?
     ORDER BY h.number ASC`,
    [theme]
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

export const insertHymn = async (hymn: Omit<Hymn, 'id' | 'isFavorite'>): Promise<number> => {
  const db = await getDatabase();
  const result = await db.runAsync(
    'INSERT INTO hymns (number, title, lyrics, refrain, theme) VALUES (?, ?, ?, ?, ?)',
    [hymn.number, hymn.title, hymn.lyrics, hymn.refrain || null, hymn.theme]
  );
  return result.lastInsertRowId;
};

export const addToRecentHistory = async (hymnId: number): Promise<void> => {
  const db = await getDatabase();
  await db.runAsync(
    'INSERT INTO recent_history (hymn_id, accessed_at) VALUES (?, datetime("now"))',
    [hymnId]
  );

  // Keep only the last 50 entries
  await db.runAsync(
    `DELETE FROM recent_history
     WHERE id NOT IN (
       SELECT id FROM recent_history
       ORDER BY accessed_at DESC
       LIMIT 50
     )`
  );
};

export const getRecentHymns = async (limit: number = 20): Promise<Hymn[]> => {
  const db = await getDatabase();
  const result = await db.getAllAsync<any>(
    `SELECT DISTINCT h.*,
            CASE WHEN f.id IS NOT NULL THEN 1 ELSE 0 END as isFavorite,
            MAX(rh.accessed_at) as last_access
     FROM recent_history rh
     JOIN hymns h ON rh.hymn_id = h.id
     LEFT JOIN favorites f ON h.id = f.hymn_id
     GROUP BY h.id
     ORDER BY last_access DESC
     LIMIT ?`,
    [limit]
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
