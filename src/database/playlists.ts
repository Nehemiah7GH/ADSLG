import { Playlist, Hymn } from '../types';
import { getDatabase } from './init';

export const getAllPlaylists = async (): Promise<Playlist[]> => {
  const db = await getDatabase();
  const result = await db.getAllAsync<any>(
    'SELECT * FROM playlists ORDER BY created_at DESC'
  );

  const playlists: Playlist[] = [];

  for (const row of result) {
    const hymnIds = await getPlaylistHymnIds(row.id);
    playlists.push({
      id: row.id,
      name: row.name,
      description: row.description,
      createdAt: row.created_at,
      hymnIds,
    });
  }

  return playlists;
};

export const getPlaylistById = async (id: number): Promise<Playlist | null> => {
  const db = await getDatabase();
  const result = await db.getFirstAsync<any>(
    'SELECT * FROM playlists WHERE id = ?',
    [id]
  );

  if (!result) return null;

  const hymnIds = await getPlaylistHymnIds(id);

  return {
    id: result.id,
    name: result.name,
    description: result.description,
    createdAt: result.created_at,
    hymnIds,
  };
};

export const getPlaylistHymnIds = async (playlistId: number): Promise<number[]> => {
  const db = await getDatabase();
  const result = await db.getAllAsync<any>(
    'SELECT hymn_id FROM playlist_hymns WHERE playlist_id = ? ORDER BY position ASC',
    [playlistId]
  );
  return result.map(row => row.hymn_id);
};

export const getPlaylistHymns = async (playlistId: number): Promise<Hymn[]> => {
  const db = await getDatabase();
  const result = await db.getAllAsync<any>(
    `SELECT h.*,
            CASE WHEN f.id IS NOT NULL THEN 1 ELSE 0 END as isFavorite
     FROM playlist_hymns ph
     JOIN hymns h ON ph.hymn_id = h.id
     LEFT JOIN favorites f ON h.id = f.hymn_id
     WHERE ph.playlist_id = ?
     ORDER BY ph.position ASC`,
    [playlistId]
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

export const createPlaylist = async (
  name: string,
  description?: string
): Promise<number> => {
  const db = await getDatabase();
  const result = await db.runAsync(
    'INSERT INTO playlists (name, description, created_at) VALUES (?, ?, datetime("now"))',
    [name, description || null]
  );
  return result.lastInsertRowId;
};

export const updatePlaylist = async (
  id: number,
  name: string,
  description?: string
): Promise<void> => {
  const db = await getDatabase();
  await db.runAsync(
    'UPDATE playlists SET name = ?, description = ? WHERE id = ?',
    [name, description || null, id]
  );
};

export const deletePlaylist = async (id: number): Promise<void> => {
  const db = await getDatabase();
  await db.runAsync('DELETE FROM playlists WHERE id = ?', [id]);
};

export const addHymnToPlaylist = async (
  playlistId: number,
  hymnId: number
): Promise<void> => {
  const db = await getDatabase();

  // Get the next position
  const result = await db.getFirstAsync<any>(
    'SELECT COALESCE(MAX(position), 0) + 1 as next_position FROM playlist_hymns WHERE playlist_id = ?',
    [playlistId]
  );

  const position = result?.next_position || 1;

  await db.runAsync(
    'INSERT INTO playlist_hymns (playlist_id, hymn_id, position) VALUES (?, ?, ?)',
    [playlistId, hymnId, position]
  );
};

export const removeHymnFromPlaylist = async (
  playlistId: number,
  hymnId: number
): Promise<void> => {
  const db = await getDatabase();
  await db.runAsync(
    'DELETE FROM playlist_hymns WHERE playlist_id = ? AND hymn_id = ?',
    [playlistId, hymnId]
  );

  // Reorder positions
  const hymns = await db.getAllAsync<any>(
    'SELECT id FROM playlist_hymns WHERE playlist_id = ? ORDER BY position ASC',
    [playlistId]
  );

  for (let i = 0; i < hymns.length; i++) {
    await db.runAsync(
      'UPDATE playlist_hymns SET position = ? WHERE id = ?',
      [i + 1, hymns[i].id]
    );
  }
};

export const reorderPlaylistHymns = async (
  playlistId: number,
  hymnIds: number[]
): Promise<void> => {
  const db = await getDatabase();

  for (let i = 0; i < hymnIds.length; i++) {
    await db.runAsync(
      'UPDATE playlist_hymns SET position = ? WHERE playlist_id = ? AND hymn_id = ?',
      [i + 1, playlistId, hymnIds[i]]
    );
  }
};
