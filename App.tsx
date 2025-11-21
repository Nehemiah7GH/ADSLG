import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider, useTheme } from './src/contexts/ThemeContext';
import { SettingsProvider } from './src/contexts/SettingsContext';
import { AppNavigator } from './src/navigation/AppNavigator';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { initDatabase } from './src/database/init';
import { getAllHymns, insertHymn } from './src/database/hymns';
import { sampleHymns } from './src/database/sampleData';

const AppContent = () => {
  const [isReady, setIsReady] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const { colors, isDark } = useTheme();

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      // Initialize database
      const db = await initDatabase();

      // Check if hymns already exist
      const existingHymns = await getAllHymns();

      // If we don't have all 169 hymns, reset and insert them all
      if (existingHymns.length !== sampleHymns.length) {
        console.log(`Found ${existingHymns.length} hymns, but we need ${sampleHymns.length}. Reinserting all hymns...`);

        // Delete all existing hymns
        await db.execAsync('DELETE FROM hymns');

        // Insert all 169 hymns
        console.log('Inserting all hymns...');
        for (const hymn of sampleHymns) {
          await insertHymn(hymn);
        }
        console.log(`Successfully inserted all ${sampleHymns.length} hymns!`);
      } else {
        console.log(`All ${sampleHymns.length} hymns already loaded.`);
      }

      setIsReady(true);
    } catch (error) {
      console.error('Error initializing app:', error);
      console.error('Full error details:', JSON.stringify(error, null, 2));
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

  if (showWelcome) {
    return (
      <>
        <StatusBar style="light" />
        <WelcomeScreen onEnter={() => setShowWelcome(false)} />
      </>
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
