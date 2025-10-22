import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider, useTheme } from './src/contexts/ThemeContext';
import { SettingsProvider } from './src/contexts/SettingsContext';
import { AppNavigator } from './src/navigation/AppNavigator';
import { initDatabase } from './src/database/init';
import { getAllHymns, insertHymn } from './src/database/hymns';
import { sampleHymns } from './src/database/sampleData';

const AppContent = () => {
  const [isReady, setIsReady] = useState(false);
  const { colors, isDark } = useTheme();

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      // Initialize database
      await initDatabase();

      // Check if hymns already exist
      const existingHymns = await getAllHymns();

      // If no hymns exist, insert sample data
      if (existingHymns.length === 0) {
        console.log('Inserting sample hymns...');
        for (const hymn of sampleHymns) {
          await insertHymn(hymn);
        }
        console.log('Sample hymns inserted successfully');
      }

      setIsReady(true);
    } catch (error) {
      console.error('Error initializing app:', error);
      setIsReady(true); // Still set ready to avoid infinite loading
    }
  };

  if (!isReady) {
    return (
      <View style={[styles.loading, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <AppNavigator />
    </>
  );
};

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ThemeProvider>
        <SettingsProvider>
          <AppContent />
        </SettingsProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
