import { Note } from '../types';
import { getDatabase } from './init';

export const getNotesByHymnId = async (hymnId: number): Promise<Note[]> => {
  const db = await getDatabase();
  const result = await db.getAllAsync<any>(
    'SELECT * FROM notes WHERE hymn_id = ? ORDER BY created_at DESC',
    [hymnId]
  );

  return result.map(row => ({
    id: row.id,
    hymnId: row.hymn_id,
    content: row.content,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }));
};

export const getNoteById = async (id: number): Promise<Note | null> => {
  const db = await getDatabase();
  const result = await db.getFirstAsync<any>(
    'SELECT * FROM notes WHERE id = ?',
    [id]
  );

  if (!result) return null;

  return {
    id: result.id,
    hymnId: result.hymn_id,
    content: result.content,
    createdAt: result.created_at,
    updatedAt: result.updated_at,
  };
};

export const createNote = async (
  hymnId: number,
  content: string
): Promise<number> => {
  const db = await getDatabase();
  const result = await db.runAsync(
    'INSERT INTO notes (hymn_id, content, created_at, updated_at) VALUES (?, ?, datetime("now"), datetime("now"))',
    [hymnId, content]
  );
  return result.lastInsertRowId;
};

export const updateNote = async (id: number, content: string): Promise<void> => {
  const db = await getDatabase();
  await db.runAsync(
    'UPDATE notes SET content = ?, updated_at = datetime("now") WHERE id = ?',
    [content, id]
  );
};

export const deleteNote = async (id: number): Promise<void> => {
  const db = await getDatabase();
  await db.runAsync('DELETE FROM notes WHERE id = ?', [id]);
};
