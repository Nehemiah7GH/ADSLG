import React, { useState } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  Modal,
  TextInput,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Playlist } from '../types';
import { getAllPlaylists, createPlaylist, deletePlaylist } from '../database/playlists';
import { EmptyState } from '../components/EmptyState';
import { useTheme } from '../contexts/ThemeContext';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const PlaylistsScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { colors } = useTheme();
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [newPlaylistDesc, setNewPlaylistDesc] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      loadPlaylists();
    }, [])
  );

  const loadPlaylists = async () => {
    try {
      const data = await getAllPlaylists();
      setPlaylists(data);
    } catch (error) {
      console.error('Error loading playlists:', error);
    }
  };

  const handleCreatePlaylist = async () => {
    if (!newPlaylistName.trim()) return;
    try {
      await createPlaylist(newPlaylistName.trim(), newPlaylistDesc.trim() || undefined);
      setNewPlaylistName('');
      setNewPlaylistDesc('');
      setShowCreateModal(false);
      loadPlaylists();
    } catch (error) {
      console.error('Error creating playlist:', error);
      Alert.alert('Erreur', 'Impossible de créer la liste de lecture');
    }
  };

  const handleDeletePlaylist = (playlistId: number, name: string) => {
    Alert.alert(
      'Supprimer la liste',
      `Êtes-vous sûr de vouloir supprimer "${name}" ?`,
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Supprimer',
          style: 'destructive',
          onPress: async () => {
            try {
              await deletePlaylist(playlistId);
              loadPlaylists();
            } catch (error) {
              console.error('Error deleting playlist:', error);
            }
          },
        },
      ]
    );
  };

  const handlePlaylistPress = (playlistId: number) => {
    navigation.navigate('PlaylistDetail', { playlistId });
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.playlistCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
            onPress={() => handlePlaylistPress(item.id)}
            activeOpacity={0.7}
          >
            <View style={styles.playlistInfo}>
              <View style={[styles.iconContainer, { backgroundColor: `${colors.primary}15` }]}>
                <Ionicons name="musical-notes" size={24} color={colors.primary} />
              </View>
              <View style={styles.textContainer}>
                <Text style={[styles.playlistName, { color: colors.text }]}>
                  {item.name}
                </Text>
                {item.description && (
                  <Text style={[styles.playlistDesc, { color: colors.textSecondary }]} numberOfLines={1}>
                    {item.description}
                  </Text>
                )}
                <Text style={[styles.hymnCount, { color: colors.textSecondary }]}>
                  {item.hymnIds.length} cantique{item.hymnIds.length !== 1 ? 's' : ''}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => handleDeletePlaylist(item.id, item.name)}
              style={styles.deleteButton}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons name="trash-outline" size={20} color={colors.error} />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <EmptyState
            icon="musical-notes-outline"
            title="Aucune liste de lecture"
            message="Créez des listes personnalisées pour organiser vos cantiques favoris"
          />
        }
        contentContainerStyle={playlists.length === 0 ? styles.emptyList : undefined}
      />

      <TouchableOpacity
        style={[styles.fab, { backgroundColor: colors.primary }]}
        onPress={() => setShowCreateModal(true)}
      >
        <Ionicons name="add" size={28} color="#FFF" />
      </TouchableOpacity>

      {/* Create Playlist Modal */}
      <Modal
        visible={showCreateModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowCreateModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.surface }]}>
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, { color: colors.text }]}>
                Nouvelle liste de lecture
              </Text>
              <TouchableOpacity onPress={() => setShowCreateModal(false)}>
                <Ionicons name="close" size={28} color={colors.text} />
              </TouchableOpacity>
            </View>

            <TextInput
              style={[styles.input, { backgroundColor: colors.background, color: colors.text, borderColor: colors.border }]}
              value={newPlaylistName}
              onChangeText={setNewPlaylistName}
              placeholder="Nom de la liste"
              placeholderTextColor={colors.textSecondary}
            />

            <TextInput
              style={[styles.input, styles.textArea, { backgroundColor: colors.background, color: colors.text, borderColor: colors.border }]}
              value={newPlaylistDesc}
              onChangeText={setNewPlaylistDesc}
              placeholder="Description (optionnel)"
              placeholderTextColor={colors.textSecondary}
              multiline
              numberOfLines={3}
              textAlignVertical="top"
            />

            <TouchableOpacity
              style={[styles.createButton, { backgroundColor: colors.primary }]}
              onPress={handleCreatePlaylist}
              disabled={!newPlaylistName.trim()}
            >
              <Text style={styles.createButtonText}>Créer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyList: {
    flex: 1,
  },
  playlistCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  playlistInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  playlistName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  playlistDesc: {
    fontSize: 13,
    marginBottom: 2,
  },
  hymnCount: {
    fontSize: 12,
  },
  deleteButton: {
    padding: 4,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  textArea: {
    minHeight: 80,
  },
  createButton: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  createButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PlaylistsScreen;
