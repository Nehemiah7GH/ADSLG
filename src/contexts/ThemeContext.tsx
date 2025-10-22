import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS, DEFAULT_SETTINGS } from '../utils/constants';
import { ThemeMode } from '../types';

interface ThemeContextType {
  isDark: boolean;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  colors: typeof COLORS.light;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [themeMode, setThemeModeState] = useState<ThemeMode>(DEFAULT_SETTINGS.themeMode);

  useEffect(() => {
    loadThemeMode();
  }, []);

  const loadThemeMode = async () => {
    try {
      const stored = await AsyncStorage.getItem('themeMode');
      if (stored) {
        setThemeModeState(stored as ThemeMode);
      }
    } catch (error) {
      console.error('Error loading theme mode:', error);
    }
  };

  const setThemeMode = async (mode: ThemeMode) => {
    try {
      setThemeModeState(mode);
      await AsyncStorage.setItem('themeMode', mode);
    } catch (error) {
      console.error('Error saving theme mode:', error);
    }
  };

  const isDark =
    themeMode === 'auto'
      ? systemColorScheme === 'dark'
      : themeMode === 'dark';

  const colors = isDark ? COLORS.dark : COLORS.light;

  return (
    <ThemeContext.Provider value={{ isDark, themeMode, setThemeMode, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
