// Types and interfaces for the application

export interface Hymn {
  id: number;
  number: number;
  title: string;
  lyrics: string;
  refrain?: string;
  theme: string;
  isFavorite?: boolean;
}

export interface Playlist {
  id: number;
  name: string;
  description?: string;
  createdAt: string;
  hymnIds: number[];
}

export interface Note {
  id: number;
  hymnId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface ServiceProgram {
  id: number;
  name: string;
  date: string;
  hymnIds: number[];
  notes?: string;
}

export interface RecentHymn {
  hymnId: number;
  accessedAt: string;
}

export type ThemeMode = 'light' | 'dark' | 'auto';

export type DisplayMode = 'presentation' | 'compact';

export interface AppSettings {
  themeMode: ThemeMode;
  displayMode: DisplayMode;
  autoScrollSpeed: number; // pixels per second
  fontSize: number;
}
