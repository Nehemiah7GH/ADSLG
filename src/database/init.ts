import * as SQLite from 'expo-sqlite';
import { Hymn } from '../types';

const DB_NAME = 'adslg.db';

export const initDatabase = async (): Promise<SQLite.SQLiteDatabase> => {
  const db = await SQLite.openDatabaseAsync(DB_NAME);

  // Create hymns table
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS hymns (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      number INTEGER UNIQUE NOT NULL,
      title TEXT NOT NULL,
      lyrics TEXT NOT NULL,
      refrain TEXT,
      theme TEXT NOT NULL
    );
  `);

  // Create favorites table
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS favorites (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      hymn_id INTEGER NOT NULL,
      added_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (hymn_id) REFERENCES hymns (id) ON DELETE CASCADE
    );
  `);

  // Create playlists table
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS playlists (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Create playlist_hymns junction table
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS playlist_hymns (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      playlist_id INTEGER NOT NULL,
      hymn_id INTEGER NOT NULL,
      position INTEGER NOT NULL,
      FOREIGN KEY (playlist_id) REFERENCES playlists (id) ON DELETE CASCADE,
      FOREIGN KEY (hymn_id) REFERENCES hymns (id) ON DELETE CASCADE
    );
  `);

  // Create notes table
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      hymn_id INTEGER NOT NULL,
      content TEXT NOT NULL,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (hymn_id) REFERENCES hymns (id) ON DELETE CASCADE
    );
  `);

  // Create service programs table
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS service_programs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      date TEXT NOT NULL,
      notes TEXT,
      created_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Create service_program_hymns junction table
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS service_program_hymns (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      program_id INTEGER NOT NULL,
      hymn_id INTEGER NOT NULL,
      position INTEGER NOT NULL,
      FOREIGN KEY (program_id) REFERENCES service_programs (id) ON DELETE CASCADE,
      FOREIGN KEY (hymn_id) REFERENCES hymns (id) ON DELETE CASCADE
    );
  `);

  // Create recent history table
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS recent_history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      hymn_id INTEGER NOT NULL,
      accessed_at TEXT DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (hymn_id) REFERENCES hymns (id) ON DELETE CASCADE
    );
  `);

  return db;
};

export const getDatabase = async (): Promise<SQLite.SQLiteDatabase> => {
  return await SQLite.openDatabaseAsync(DB_NAME);
};
