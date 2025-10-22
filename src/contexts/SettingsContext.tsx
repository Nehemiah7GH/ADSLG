import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppSettings, DisplayMode } from '../types';
import { DEFAULT_SETTINGS } from '../utils/constants';

interface SettingsContextType {
  settings: AppSettings;
  setDisplayMode: (mode: DisplayMode) => void;
  setAutoScrollSpeed: (speed: number) => void;
  setFontSize: (size: number) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const stored = await AsyncStorage.getItem('appSettings');
      if (stored) {
        setSettings(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };

  const saveSettings = async (newSettings: AppSettings) => {
    try {
      await AsyncStorage.setItem('appSettings', JSON.stringify(newSettings));
      setSettings(newSettings);
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  };

  const setDisplayMode = (mode: DisplayMode) => {
    saveSettings({ ...settings, displayMode: mode });
  };

  const setAutoScrollSpeed = (speed: number) => {
    saveSettings({ ...settings, autoScrollSpeed: speed });
  };

  const setFontSize = (size: number) => {
    saveSettings({ ...settings, fontSize: size });
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setDisplayMode,
        setAutoScrollSpeed,
        setFontSize,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider');
  }
  return context;
};
