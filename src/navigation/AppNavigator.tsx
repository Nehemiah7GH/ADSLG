import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import HymnDetailScreen from '../screens/HymnDetailScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryHymnsScreen from '../screens/CategoryHymnsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import PlaylistsScreen from '../screens/PlaylistsScreen';
import PlaylistDetailScreen from '../screens/PlaylistDetailScreen';
import ProgramsScreen from '../screens/ProgramsScreen';
import ProgramDetailScreen from '../screens/ProgramDetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';

export type RootStackParamList = {
  MainTabs: undefined;
  HymnDetail: { hymnId: number };
  CategoryHymns: { theme: string };
  PlaylistDetail: { playlistId: number };
  ProgramDetail: { programId: number };
  About: undefined;
};

export type TabParamList = {
  Home: undefined;
  Categories: undefined;
  Favorites: undefined;
  Playlists: undefined;
  Programs: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Categories':
              iconName = focused ? 'grid' : 'grid-outline';
              break;
            case 'Favorites':
              iconName = focused ? 'heart' : 'heart-outline';
              break;
            case 'Playlists':
              iconName = focused ? 'musical-notes' : 'musical-notes-outline';
              break;
            case 'Programs':
              iconName = focused ? 'calendar' : 'calendar-outline';
              break;
            case 'Settings':
              iconName = focused ? 'settings' : 'settings-outline';
              break;
            default:
              iconName = 'home-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
        },
        headerStyle: {
          backgroundColor: colors.surface,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Cantiques' }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ title: 'Thèmes' }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ title: 'Favoris' }}
      />
      <Tab.Screen
        name="Playlists"
        component={PlaylistsScreen}
        options={{ title: 'Listes' }}
      />
      <Tab.Screen
        name="Programs"
        component={ProgramsScreen}
        options={{ title: 'Programmes' }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Paramètres' }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  const { colors, isDark } = useTheme();

  return (
    <NavigationContainer
      theme={{
        dark: isDark,
        colors: {
          primary: colors.primary,
          background: colors.background,
          card: colors.surface,
          text: colors.text,
          border: colors.border,
          notification: colors.primary,
        },
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.surface,
          },
          headerTintColor: colors.text,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="MainTabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HymnDetail"
          component={HymnDetailScreen}
          options={{ title: 'Cantique' }}
        />
        <Stack.Screen
          name="CategoryHymns"
          component={CategoryHymnsScreen}
          options={{ title: 'Cantiques' }}
        />
        <Stack.Screen
          name="PlaylistDetail"
          component={PlaylistDetailScreen}
          options={{ title: 'Liste de lecture' }}
        />
        <Stack.Screen
          name="ProgramDetail"
          component={ProgramDetailScreen}
          options={{ title: 'Programme' }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: 'À propos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
