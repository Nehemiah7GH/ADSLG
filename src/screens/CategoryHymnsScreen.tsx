import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Hymn } from '../types';
import { getHymnsByTheme } from '../database/hymns';
import { toggleFavorite } from '../database/favorites';
import { HymnCard } from '../components/HymnCard';
import { EmptyState } from '../components/EmptyState';
import { useTheme } from '../contexts/ThemeContext';

type Props = StackScreenProps<RootStackParamList, 'CategoryHymns'>;

const CategoryHymnsScreen: React.FC<Props> = ({ route, navigation }) => {
  const { theme } = route.params;
  const { colors } = useTheme();
  const [hymns, setHymns] = useState<Hymn[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({ title: theme });
    loadHymns();
  }, [theme]);

  const loadHymns = async () => {
    try {
      setLoading(true);
      const data = await getHymnsByTheme(theme);
      setHymns(data);
    } catch (error) {
      console.error('Error loading hymns:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleHymnPress = (hymnId: number) => {
    navigation.navigate('HymnDetail', { hymnId });
  };

  const handleFavoriteToggle = async (hymnId: number) => {
    try {
      await toggleFavorite(hymnId);
      loadHymns();
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  if (loading) {
    return (
      <View style={[styles.centered, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={hymns}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <HymnCard
            hymn={item}
            onPress={() => handleHymnPress(item.id)}
            onFavoriteToggle={() => handleFavoriteToggle(item.id)}
          />
        )}
        ListEmptyComponent={
          <EmptyState
            icon="musical-notes-outline"
            title="Aucun cantique"
            message={`Aucun cantique trouvé pour le thème "${theme}"`}
          />
        }
        contentContainerStyle={hymns.length === 0 ? styles.emptyList : undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyList: {
    flex: 1,
  },
});

export default CategoryHymnsScreen;
