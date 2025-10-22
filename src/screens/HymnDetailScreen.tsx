import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/AppNavigator';
import { Hymn, Note } from '../types';
import { getHymnById, addToRecentHistory } from '../database/hymns';
import { toggleFavorite } from '../database/favorites';
import { getNotesByHymnId, createNote, deleteNote } from '../database/notes';
import { useTheme } from '../contexts/ThemeContext';
import { useSettings } from '../contexts/SettingsContext';
import { FONT_SIZES } from '../utils/constants';

type Props = StackScreenProps<RootStackParamList, 'HymnDetail'>;

const HymnDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { hymnId } = route.params;
  const { colors } = useTheme();
  const { settings, setDisplayMode } = useSettings();
  const [hymn, setHymn] = useState<Hymn | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [autoScrolling, setAutoScrolling] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [newNote, setNewNote] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    loadHymn();
    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [hymnId]);

  const loadHymn = async () => {
    try {
      setLoading(true);
      const [hymnData, notesData] = await Promise.all([
        getHymnById(hymnId),
        getNotesByHymnId(hymnId),
      ]);

      if (hymnData) {
        setHymn(hymnData);
        setNotes(notesData);
        await addToRecentHistory(hymnId);
        navigation.setOptions({ title: `Cantique ${hymnData.number}` });
      }
    } catch (error) {
      console.error('Error loading hymn:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFavoriteToggle = async () => {
    if (!hymn) return;
    try {
      const isFav = await toggleFavorite(hymn.id);
      setHymn({ ...hymn, isFavorite: isFav });
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  const toggleAutoScroll = () => {
    if (autoScrolling) {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
      setAutoScrolling(false);
    } else {
      let scrollPosition = 0;
      scrollIntervalRef.current = setInterval(() => {
        scrollPosition += settings.autoScrollSpeed / 10;
        scrollViewRef.current?.scrollTo({ y: scrollPosition, animated: true });
      }, 100);
      setAutoScrolling(true);
    }
  };

  const handleAddNote = async () => {
    if (!hymn || !newNote.trim()) return;
    try {
      await createNote(hymn.id, newNote.trim());
      setNewNote('');
      setShowNoteModal(false);
      const updatedNotes = await getNotesByHymnId(hymn.id);
      setNotes(updatedNotes);
    } catch (error) {
      console.error('Error adding note:', error);
      Alert.alert('Erreur', 'Impossible d\'ajouter la note');
    }
  };

  const handleDeleteNote = async (noteId: number) => {
    Alert.alert(
      'Supprimer la note',
      'Êtes-vous sûr de vouloir supprimer cette note ?',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Supprimer',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteNote(noteId);
              if (hymn) {
                const updatedNotes = await getNotesByHymnId(hymn.id);
                setNotes(updatedNotes);
              }
            } catch (error) {
              console.error('Error deleting note:', error);
            }
          },
        },
      ]
    );
  };

  if (loading) {
    return (
      <View style={[styles.centered, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (!hymn) {
    return (
      <View style={[styles.centered, { backgroundColor: colors.background }]}>
        <Text style={[styles.errorText, { color: colors.text }]}>
          Cantique non trouvé
        </Text>
      </View>
    );
  }

  const isPresentationMode = settings.displayMode === 'presentation';
  const fontSize = isPresentationMode ? FONT_SIZES.presentation : FONT_SIZES.compact;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Action Bar */}
      <View style={[styles.actionBar, { backgroundColor: colors.surface, borderBottomColor: colors.border }]}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleFavoriteToggle}
        >
          <Ionicons
            name={hymn.isFavorite ? 'heart' : 'heart-outline'}
            size={24}
            color={hymn.isFavorite ? colors.error : colors.text}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => setDisplayMode(isPresentationMode ? 'compact' : 'presentation')}
        >
          <Ionicons
            name={isPresentationMode ? 'contract-outline' : 'expand-outline'}
            size={24}
            color={colors.text}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={toggleAutoScroll}
        >
          <Ionicons
            name={autoScrolling ? 'pause' : 'play'}
            size={24}
            color={autoScrolling ? colors.primary : colors.text}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => setShowNoteModal(true)}
        >
          <Ionicons name="create-outline" size={24} color={colors.text} />
          {notes.length > 0 && (
            <View style={[styles.badge, { backgroundColor: colors.primary }]}>
              <Text style={styles.badgeText}>{notes.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Hymn Content */}
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Text style={[styles.number, { color: colors.primary, fontSize: fontSize.title + 6 }]}>
            Cantique {hymn.number}
          </Text>
          <Text style={[styles.title, { color: colors.text, fontSize: fontSize.title }]}>
            {hymn.title}
          </Text>
          <Text style={[styles.theme, { color: colors.textSecondary }]}>
            {hymn.theme}
          </Text>
        </View>

        <View style={styles.lyricsContainer}>
          {hymn.lyrics.split('\n\n').map((verse, index) => (
            <View key={index} style={styles.verse}>
              <Text style={[styles.lyrics, { color: colors.text, fontSize: fontSize.lyrics }]}>
                {verse}
              </Text>
            </View>
          ))}

          {hymn.refrain && (
            <View style={[styles.refrainContainer, { backgroundColor: colors.surface }]}>
              <Text style={[styles.refrainLabel, { color: colors.primary }]}>
                Refrain
              </Text>
              <Text style={[styles.refrain, { color: colors.text, fontSize: fontSize.refrain }]}>
                {hymn.refrain}
              </Text>
            </View>
          )}
        </View>

        {/* Notes Section */}
        {notes.length > 0 && (
          <View style={styles.notesSection}>
            <Text style={[styles.notesTitle, { color: colors.text }]}>
              Mes notes
            </Text>
            {notes.map((note) => (
              <View
                key={note.id}
                style={[styles.noteCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
              >
                <Text style={[styles.noteContent, { color: colors.text }]}>
                  {note.content}
                </Text>
                <TouchableOpacity
                  onPress={() => handleDeleteNote(note.id)}
                  style={styles.deleteNoteButton}
                >
                  <Ionicons name="trash-outline" size={18} color={colors.error} />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Add Note Modal */}
      <Modal
        visible={showNoteModal}
        transparent
        animationType="slide"
        onRequestClose={() => setShowNoteModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { backgroundColor: colors.surface }]}>
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, { color: colors.text }]}>
                Ajouter une note
              </Text>
              <TouchableOpacity onPress={() => setShowNoteModal(false)}>
                <Ionicons name="close" size={28} color={colors.text} />
              </TouchableOpacity>
            </View>

            <TextInput
              style={[styles.noteInput, { backgroundColor: colors.background, color: colors.text, borderColor: colors.border }]}
              value={newNote}
              onChangeText={setNewNote}
              placeholder="Écrivez votre note ici..."
              placeholderTextColor={colors.textSecondary}
              multiline
              numberOfLines={6}
              textAlignVertical="top"
            />

            <TouchableOpacity
              style={[styles.addButton, { backgroundColor: colors.primary }]}
              onPress={handleAddNote}
              disabled={!newNote.trim()}
            >
              <Text style={styles.addButtonText}>Ajouter</Text>
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
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  actionButton: {
    padding: 8,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 4,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  header: {
    marginBottom: 24,
  },
  number: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
  theme: {
    fontSize: 14,
  },
  lyricsContainer: {
    marginBottom: 24,
  },
  verse: {
    marginBottom: 20,
  },
  lyrics: {
    lineHeight: 28,
  },
  refrainContainer: {
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  refrainLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  refrain: {
    lineHeight: 26,
    fontStyle: 'italic',
  },
  notesSection: {
    marginTop: 16,
  },
  notesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  noteCard: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  noteContent: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  deleteNoteButton: {
    padding: 4,
    marginLeft: 8,
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
    minHeight: 300,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  noteInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    minHeight: 120,
    marginBottom: 16,
    fontSize: 16,
  },
  addButton: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HymnDetailScreen;
