import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Playlist, Hymn } from '../types';
import { getPlaylistById, getPlaylistHymns } from '../database/playlists';
import { toggleFavorite } from '../database/favorites';
import { HymnCard } from '../components/HymnCard';
import { EmptyState } from '../components/EmptyState';
import { useTheme } from '../contexts/ThemeContext';

type Props = StackScreenProps<RootStackParamList, 'PlaylistDetail'>;

const PlaylistDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { playlistId } = route.params;
  const { colors } = useTheme();
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const [hymns, setHymns] = useState<Hymn[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPlaylist();
  }, [playlistId]);

  const loadPlaylist = async () => {
    try {
      setLoading(true);
      const [playlistData, hymnsData] = await Promise.all([
        getPlaylistById(playlistId),
        getPlaylistHymns(playlistId),
      ]);

      if (playlistData) {
        setPlaylist(playlistData);
        setHymns(hymnsData);
        navigation.setOptions({ title: playlistData.name });
      }
    } catch (error) {
      console.error('Error loading playlist:', error);
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
      loadPlaylist();
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
            title="Liste vide"
            message="Aucun cantique dans cette liste de lecture"
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

export default PlaylistDetailScreen;
