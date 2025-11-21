// Application constants

export const COLORS = {
  light: {
    primary: '#1E3A8A', // Royal Blue
    secondary: '#D4AF37', // Discrete Gold
    background: '#FFFFFF',
    surface: '#F8FAFC',
    text: '#1E293B',
    textSecondary: '#64748B',
    border: '#E2E8F0',
    error: '#DC2626',
    success: '#16A34A',
  },
  dark: {
    primary: '#3B82F6', // Lighter Blue for dark mode
    secondary: '#FBBF24', // Brighter Gold for dark mode
    background: '#0F172A',
    surface: '#1E293B',
    text: '#F1F5F9',
    textSecondary: '#94A3B8',
    border: '#334155',
    error: '#EF4444',
    success: '#22C55E',
  },
};

export const THEMES = [
  'Louange',
  'Adoration',
  'Prière',
  'Consécration',
  'Communion',
  'Évangélisation',
  'Action de grâce',
  'Repentance',
  'Espérance',
  'Foi',
  'Noël',
  'Pâques',
  'Pentecôte',
  'Divers',
];

export const FONT_SIZES = {
  compact: {
    title: 18,
    lyrics: 14,
    refrain: 15,
  },
  presentation: {
    title: 24,
    lyrics: 20,
    refrain: 22,
  },
};

export const AUTO_SCROLL_SPEEDS = {
  slow: 20,
  medium: 40,
  fast: 60,
};

export const DEFAULT_SETTINGS = {
  themeMode: 'auto' as const,
  displayMode: 'compact' as const,
  autoScrollSpeed: AUTO_SCROLL_SPEEDS.medium,
  fontSize: 16,
};

export const AUTHOR_INFO = {
  name: 'Néhémie ACHI',
  title: 'Stagiaire Étudiant',
  email: 'nehemiahvmc@gmail.com',
  telegram: 'https://t.me/NehemiahAchi',
  institution: 'Institut Théologique et Pastoral des Assemblées de Dieu de Côte d\'Ivoire',
  campus: 'Campus de KATADJI',
};

export const APP_INFO = {
  title: 'À Dieu Soit La Gloire',
  subtitle: 'Recueil de cantiques ITPK',
  description: 'Une application dédiée au recueil de cantiques de l\'ITPK "À DIEU SOIT LA GLOIRE". Cette application a été développée avec passion pour faciliter l\'accès aux cantiques du recueil "À DIEU SOIT LA GLOIRE" au sein du Campus de KATADJI de l\'Institut Théologique et Pastoral des Assemblées de Dieu de Côte d\'Ivoire. Elle vise à enrichir les cultes personnelles ou communautaires de louange et d\'actions de grâce.',
};
