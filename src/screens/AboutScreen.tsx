import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { APP_INFO, AUTHOR_INFO } from '../utils/constants';

const AboutScreen = () => {
  const { colors } = useTheme();

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${AUTHOR_INFO.email}`);
  };

  const handleTelegramPress = () => {
    Linking.openURL(AUTHOR_INFO.telegram);
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
    >
      {/* App Icon/Logo */}
      <View style={[styles.logoContainer, { backgroundColor: `${colors.primary}15` }]}>
        <Ionicons name="musical-notes" size={64} color={colors.primary} />
      </View>

      {/* App Title */}
      <Text style={[styles.title, { color: colors.text }]}>
        {APP_INFO.title}
      </Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
        {APP_INFO.subtitle}
      </Text>

      {/* Version */}
      <Text style={[styles.version, { color: colors.textSecondary }]}>
        Version 1.0.0
      </Text>

      {/* Description */}
      <View style={[styles.section, { backgroundColor: colors.surface }]}>
        <Text style={[styles.description, { color: colors.text }]}>
          {APP_INFO.description}
        </Text>
      </View>

      {/* Author Information */}
      <View style={styles.authorSection}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Informations sur l'auteur
        </Text>

        <View style={[styles.infoCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
          <View style={styles.infoRow}>
            <Ionicons name="person" size={20} color={colors.primary} />
            <View style={styles.infoText}>
              <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>
                Nom
              </Text>
              <Text style={[styles.infoValue, { color: colors.text }]}>
                {AUTHOR_INFO.name}
              </Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="briefcase" size={20} color={colors.primary} />
            <View style={styles.infoText}>
              <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>
                Titre
              </Text>
              <Text style={[styles.infoValue, { color: colors.text }]}>
                {AUTHOR_INFO.title}
              </Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="school" size={20} color={colors.primary} />
            <View style={styles.infoText}>
              <Text style={[styles.infoLabel, { color: colors.textSecondary }]}>
                Institution
              </Text>
              <Text style={[styles.infoValue, { color: colors.text }]}>
                {AUTHOR_INFO.institution}
              </Text>
              <Text style={[styles.infoValue, { color: colors.text }]}>
                {AUTHOR_INFO.campus}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.contactButton}
            onPress={handleEmailPress}
          >
            <Ionicons name="mail" size={20} color={colors.primary} />
            <Text style={[styles.contactText, { color: colors.primary }]}>
              {AUTHOR_INFO.email}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contactButton}
            onPress={handleTelegramPress}
          >
            <Ionicons name="send" size={20} color={colors.primary} />
            <Text style={[styles.contactText, { color: colors.primary }]}>
              Telegram
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <Text style={[styles.footer, { color: colors.textSecondary }]}>
        Développé avec passion pour enrichir les cultes de louange et d'actions de grâce
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
  },
  version: {
    fontSize: 14,
    marginBottom: 24,
  },
  section: {
    width: '100%',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  authorSection: {
    width: '100%',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  infoCard: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  infoText: {
    flex: 1,
    marginLeft: 12,
  },
  infoLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 15,
    lineHeight: 20,
  },
  contactButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(30, 58, 138, 0.1)',
    marginTop: 8,
  },
  contactText: {
    fontSize: 15,
    marginLeft: 12,
    fontWeight: '500',
  },
  footer: {
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 20,
    fontStyle: 'italic',
    marginTop: 12,
    marginBottom: 32,
  },
});

export default AboutScreen;
