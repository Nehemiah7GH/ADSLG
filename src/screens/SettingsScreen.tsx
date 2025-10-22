import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useTheme } from '../contexts/ThemeContext';
import { useSettings } from '../contexts/SettingsContext';
import { AUTO_SCROLL_SPEEDS } from '../utils/constants';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const SettingsScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { colors, themeMode, setThemeMode } = useTheme();
  const { settings, setAutoScrollSpeed } = useSettings();

  const themeModes = [
    { value: 'light' as const, label: 'Clair', icon: 'sunny' },
    { value: 'dark' as const, label: 'Sombre', icon: 'moon' },
    { value: 'auto' as const, label: 'Automatique', icon: 'phone-portrait' },
  ];

  const scrollSpeeds = [
    { value: AUTO_SCROLL_SPEEDS.slow, label: 'Lent' },
    { value: AUTO_SCROLL_SPEEDS.medium, label: 'Moyen' },
    { value: AUTO_SCROLL_SPEEDS.fast, label: 'Rapide' },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Theme Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Thème
        </Text>
        {themeModes.map((mode) => (
          <TouchableOpacity
            key={mode.value}
            style={[
              styles.option,
              { backgroundColor: colors.surface, borderColor: colors.border },
              themeMode === mode.value && { borderColor: colors.primary, borderWidth: 2 },
            ]}
            onPress={() => setThemeMode(mode.value)}
          >
            <View style={styles.optionLeft}>
              <Ionicons
                name={mode.icon as any}
                size={24}
                color={themeMode === mode.value ? colors.primary : colors.text}
              />
              <Text
                style={[
                  styles.optionText,
                  { color: themeMode === mode.value ? colors.primary : colors.text },
                ]}
              >
                {mode.label}
              </Text>
            </View>
            {themeMode === mode.value && (
              <Ionicons name="checkmark-circle" size={24} color={colors.primary} />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Auto-scroll Speed Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Vitesse de défilement automatique
        </Text>
        {scrollSpeeds.map((speed) => (
          <TouchableOpacity
            key={speed.value}
            style={[
              styles.option,
              { backgroundColor: colors.surface, borderColor: colors.border },
              settings.autoScrollSpeed === speed.value && {
                borderColor: colors.primary,
                borderWidth: 2,
              },
            ]}
            onPress={() => setAutoScrollSpeed(speed.value)}
          >
            <Text
              style={[
                styles.optionText,
                {
                  color:
                    settings.autoScrollSpeed === speed.value
                      ? colors.primary
                      : colors.text,
                },
              ]}
            >
              {speed.label}
            </Text>
            {settings.autoScrollSpeed === speed.value && (
              <Ionicons name="checkmark-circle" size={24} color={colors.primary} />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          À propos
        </Text>
        <TouchableOpacity
          style={[styles.option, { backgroundColor: colors.surface, borderColor: colors.border }]}
          onPress={() => navigation.navigate('About')}
        >
          <View style={styles.optionLeft}>
            <Ionicons name="information-circle-outline" size={24} color={colors.text} />
            <Text style={[styles.optionText, { color: colors.text }]}>
              À propos de l'application
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color={colors.textSecondary} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginTop: 24,
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    marginLeft: 4,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 12,
  },
});

export default SettingsScreen;
