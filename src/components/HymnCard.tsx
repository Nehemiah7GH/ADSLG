import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Hymn } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface HymnCardProps {
  hymn: Hymn;
  onPress: () => void;
  onFavoriteToggle?: () => void;
}

export const HymnCard: React.FC<HymnCardProps> = ({
  hymn,
  onPress,
  onFavoriteToggle,
}) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors.surface, borderColor: colors.border }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <View style={styles.numberContainer}>
          <Text style={[styles.number, { color: colors.primary }]}>
            {hymn.number}
          </Text>
        </View>
        <View style={styles.info}>
          <Text style={[styles.title, { color: colors.text }]} numberOfLines={2}>
            {hymn.title}
          </Text>
          <Text style={[styles.theme, { color: colors.textSecondary }]} numberOfLines={1}>
            {hymn.theme}
          </Text>
        </View>
        {onFavoriteToggle && (
          <TouchableOpacity
            onPress={onFavoriteToggle}
            style={styles.favoriteButton}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons
              name={hymn.isFavorite ? 'heart' : 'heart-outline'}
              size={24}
              color={hymn.isFavorite ? colors.error : colors.textSecondary}
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 6,
    borderWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  numberContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(30, 58, 138, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  number: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  theme: {
    fontSize: 13,
  },
  favoriteButton: {
    padding: 4,
  },
});
