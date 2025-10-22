import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { ServiceProgram, Hymn } from '../types';
import { getServiceProgramById, getProgramHymns } from '../database/programs';
import { toggleFavorite } from '../database/favorites';
import { HymnCard } from '../components/HymnCard';
import { EmptyState } from '../components/EmptyState';
import { useTheme } from '../contexts/ThemeContext';

type Props = StackScreenProps<RootStackParamList, 'ProgramDetail'>;

const ProgramDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { programId } = route.params;
  const { colors } = useTheme();
  const [program, setProgram] = useState<ServiceProgram | null>(null);
  const [hymns, setHymns] = useState<Hymn[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProgram();
  }, [programId]);

  const loadProgram = async () => {
    try {
      setLoading(true);
      const [programData, hymnsData] = await Promise.all([
        getServiceProgramById(programId),
        getProgramHymns(programId),
      ]);

      if (programData) {
        setProgram(programData);
        setHymns(hymnsData);
        navigation.setOptions({ title: programData.name });
      }
    } catch (error) {
      console.error('Error loading program:', error);
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
      loadProgram();
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
            icon="calendar-outline"
            title="Programme vide"
            message="Aucun cantique dans ce programme"
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

export default ProgramDetailScreen;
