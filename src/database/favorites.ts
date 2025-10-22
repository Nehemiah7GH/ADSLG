import { Hymn } from '../types';
import { getDatabase } from './init';

export const getFavoriteHymns = async (): Promise<Hymn[]> => {
  const db = await getDatabase();
  const result = await db.getAllAsync<any>(
    `SELECT h.*, 1 as isFavorite
     FROM hymns h
     JOIN favorites f ON h.id = f.hymn_id
     ORDER BY f.added_at DESC`
  );

  return result.map(row => ({
    id: row.id,
    number: row.number,
    title: row.title,
    lyrics: row.lyrics,
    refrain: row.refrain,
    theme: row.theme,
    isFavorite: true,
  }));
};

export const toggleFavorite = async (hymnId: number): Promise<boolean> => {
  const db = await getDatabase();

  // Check if already favorited
  const existing = await db.getFirstAsync<any>(
    'SELECT id FROM favorites WHERE hymn_id = ?',
    [hymnId]
  );

  if (existing) {
    // Remove from favorites
    await db.runAsync('DELETE FROM favorites WHERE hymn_id = ?', [hymnId]);
    return false;
  } else {
    // Add to favorites
    await db.runAsync(
      'INSERT INTO favorites (hymn_id, added_at) VALUES (?, datetime("now"))',
      [hymnId]
    );
    return true;
  }
};

export const isFavorite = async (hymnId: number): Promise<boolean> => {
  const db = await getDatabase();
  const result = await db.getFirstAsync<any>(
    'SELECT id FROM favorites WHERE hymn_id = ?',
    [hymnId]
  );
  return result !== null;
};
