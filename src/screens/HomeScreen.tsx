import React, { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Hymn } from '../types';
import { getAllHymns, searchHymns, getRecentHymns } from '../database/hymns';
import { toggleFavorite } from '../database/favorites';
import { HymnCard } from '../components/HymnCard';
import { SearchBar } from '../components/SearchBar';
import { EmptyState } from '../components/EmptyState';
import { useTheme } from '../contexts/ThemeContext';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { colors } = useTheme();
  const [hymns, setHymns] = useState<Hymn[]>([]);
  const [recentHymns, setRecentHymns] = useState<Hymn[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [showRecent, setShowRecent] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [allHymns, recent] = await Promise.all([
        getAllHymns(),
        getRecentHymns(),
      ]);
      setHymns(allHymns);
      setRecentHymns(recent);
    } catch (error) {
      console.error('Error loading hymns:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchQuery]);

  const handleSearch = async () => {
    if (searchQuery.trim() === '') {
      loadData();
      return;
    }
    try {
      const results = await searchHymns(searchQuery);
      setHymns(results);
      setShowRecent(false);
    } catch (error) {
      console.error('Error searching hymns:', error);
    }
  };

  const handleHymnPress = (hymnId: number) => {
    navigation.navigate('HymnDetail', { hymnId });
  };

  const handleFavoriteToggle = async (hymnId: number) => {
    try {
      await toggleFavorite(hymnId);
      loadData();
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
      <SearchBar
        value={searchQuery}
        onChangeText={(text) => {
          setSearchQuery(text);
          setShowRecent(text.trim() === '');
        }}
      />

      {showRecent && recentHymns.length > 0 && (
        <View style={styles.recentSection}>
          <View style={styles.sectionHeader}>
            <Ionicons name="time-outline" size={20} color={colors.textSecondary} />
            <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>
              Récemment consultés
            </Text>
          </View>
          <FlatList
            horizontal
            data={recentHymns.slice(0, 5)}
            keyExtractor={(item) => `recent-${item.id}`}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[styles.recentCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
                onPress={() => handleHymnPress(item.id)}
              >
                <Text style={[styles.recentNumber, { color: colors.primary }]}>
                  {item.number}
                </Text>
                <Text style={[styles.recentTitle, { color: colors.text }]} numberOfLines={2}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recentList}
          />
        </View>
      )}

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
            icon="search-outline"
            title="Aucun cantique trouvé"
            message={
              searchQuery
                ? 'Essayez une autre recherche'
                : 'Aucun cantique disponible'
            }
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
  recentSection: {
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
  recentList: {
    paddingHorizontal: 12,
  },
  recentCard: {
    width: 120,
    height: 100,
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 4,
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  recentNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  recentTitle: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export default HomeScreen;
