import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Hymn } from '../types';
import { getFavoriteHymns } from '../database/favorites';
import { toggleFavorite } from '../database/favorites';
import { HymnCard } from '../components/HymnCard';
import { EmptyState } from '../components/EmptyState';
import { useTheme } from '../contexts/ThemeContext';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const FavoritesScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { colors } = useTheme();
  const [favorites, setFavorites] = useState<Hymn[]>([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  const loadFavorites = async () => {
    try {
      setLoading(true);
      const data = await getFavoriteHymns();
      setFavorites(data);
    } catch (error) {
      console.error('Error loading favorites:', error);
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
      loadFavorites();
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
        data={favorites}
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
            icon="heart-outline"
            title="Aucun favori"
            message="Ajoutez des cantiques à vos favoris pour les retrouver facilement ici"
          />
        }
        contentContainerStyle={favorites.length === 0 ? styles.emptyList : undefined}
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

export default FavoritesScreen;
