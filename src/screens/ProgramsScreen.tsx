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
import { ServiceProgram } from '../types';
import {
  getAllServicePrograms,
  createServiceProgram,
  deleteServiceProgram,
} from '../database/programs';
import { EmptyState } from '../components/EmptyState';
import { useTheme } from '../contexts/ThemeContext';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const ProgramsScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { colors } = useTheme();
  const [programs, setPrograms] = useState<ServiceProgram[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newProgramName, setNewProgramName] = useState('');
  const [newProgramDate, setNewProgramDate] = useState('');
  const [newProgramNotes, setNewProgramNotes] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      loadPrograms();
    }, [])
  );

  const loadPrograms = async () => {
    try {
      const data = await getAllServicePrograms();
      setPrograms(data);
    } catch (error) {
      console.error('Error loading programs:', error);
    }
  };

  const handleCreateProgram = async () => {
    if (!newProgramName.trim() || !newProgramDate.trim()) {
      Alert.alert('Erreur', 'Veuillez remplir le nom et la date');
      return;
    }
    try {
      await createServiceProgram(
        newProgramName.trim(),
        newProgramDate.trim(),
        newProgramNotes.trim() || undefined
      );
      setNewProgramName('');
      setNewProgramDate('');
      setNewProgramNotes('');
      setShowCreateModal(false);
      loadPrograms();
    } catch (error) {
      console.error('Error creating program:', error);
      Alert.alert('Erreur', 'Impossible de créer le programme');
    }
  };

  const handleDeleteProgram = (programId: number, name: string) => {
    Alert.alert(
      'Supprimer le programme',
      `Êtes-vous sûr de vouloir supprimer "${name}" ?`,
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Supprimer',
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteServiceProgram(programId);
              loadPrograms();
            } catch (error) {
              console.error('Error deleting program:', error);
            }
          },
        },
      ]
    );
  };

  const handleProgramPress = (programId: number) => {
    navigation.navigate('ProgramDetail', { programId });
  };

  const formatDate = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={programs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.programCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
            onPress={() => handleProgramPress(item.id)}
            activeOpacity={0.7}
          >
            <View style={styles.programInfo}>
              <View style={[styles.iconContainer, { backgroundColor: `${colors.primary}15` }]}>
                <Ionicons name="calendar" size={24} color={colors.primary} />
              </View>
              <View style={styles.textContainer}>
                <Text style={[styles.programName, { color: colors.text }]}>
                  {item.name}
                </Text>
                <Text style={[styles.programDate, { color: colors.textSecondary }]}>
                  {formatDate(item.date)}
                </Text>
                <Text style={[styles.hymnCount, { color: colors.textSecondary }]}>
                  {item.hymnIds.length} cantique{item.hymnIds.length !== 1 ? 's' : ''}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => handleDeleteProgram(item.id, item.name)}
              style={styles.deleteButton}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons name="trash-outline" size={20} color={colors.error} />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <EmptyState
            icon="calendar-outline"
            title="Aucun programme"
            message="Créez des programmes pour organiser vos services de culte"
          />
        }
        contentContainerStyle={programs.length === 0 ? styles.emptyList : undefined}
      />

      <TouchableOpacity
        style={[styles.fab, { backgroundColor: colors.primary }]}
        onPress={() => setShowCreateModal(true)}
      >
        <Ionicons name="add" size={28} color="#FFF" />
      </TouchableOpacity>

      {/* Create Program Modal */}
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
                Nouveau programme
              </Text>
              <TouchableOpacity onPress={() => setShowCreateModal(false)}>
                <Ionicons name="close" size={28} color={colors.text} />
              </TouchableOpacity>
            </View>

            <TextInput
              style={[styles.input, { backgroundColor: colors.background, color: colors.text, borderColor: colors.border }]}
              value={newProgramName}
              onChangeText={setNewProgramName}
              placeholder="Nom du programme"
              placeholderTextColor={colors.textSecondary}
            />

            <TextInput
              style={[styles.input, { backgroundColor: colors.background, color: colors.text, borderColor: colors.border }]}
              value={newProgramDate}
              onChangeText={setNewProgramDate}
              placeholder="Date (ex: 2024-12-25)"
              placeholderTextColor={colors.textSecondary}
            />

            <TextInput
              style={[styles.input, styles.textArea, { backgroundColor: colors.background, color: colors.text, borderColor: colors.border }]}
              value={newProgramNotes}
              onChangeText={setNewProgramNotes}
              placeholder="Notes (optionnel)"
              placeholderTextColor={colors.textSecondary}
              multiline
              numberOfLines={3}
              textAlignVertical="top"
            />

            <TouchableOpacity
              style={[styles.createButton, { backgroundColor: colors.primary }]}
              onPress={handleCreateProgram}
              disabled={!newProgramName.trim() || !newProgramDate.trim()}
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
  programCard: {
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
  programInfo: {
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
  programName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  programDate: {
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

export default ProgramsScreen;
