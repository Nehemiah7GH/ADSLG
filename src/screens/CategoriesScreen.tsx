import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/AppNavigator';
import { THEMES } from '../utils/constants';
import { useTheme } from '../contexts/ThemeContext';

type NavigationProp = StackNavigationProp<RootStackParamList>;

const themeIcons: Record<string, keyof typeof Ionicons.glyphMap> = {
  'Louange': 'musical-notes',
  'Adoration': 'heart',
  'Prière': 'hand-right',
  'Consécration': 'flame',
  'Communion': 'people',
  'Évangélisation': 'megaphone',
  'Action de grâce': 'gift',
  'Repentance': 'sad',
  'Espérance': 'star',
  'Foi': 'shield',
  'Noël': 'snow',
  'Pâques': 'sunny',
  'Pentecôte': 'flame',
  'Divers': 'ellipsis-horizontal',
};

const CategoriesScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { colors } = useTheme();

  const handleThemePress = (theme: string) => {
    navigation.navigate('CategoryHymns', { theme });
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={THEMES}
        keyExtractor={(item) => item}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.categoryCard, { backgroundColor: colors.surface, borderColor: colors.border }]}
            onPress={() => handleThemePress(item)}
            activeOpacity={0.7}
          >
            <View style={[styles.iconContainer, { backgroundColor: `${colors.primary}15` }]}>
              <Ionicons
                name={themeIcons[item] || 'musical-note'}
                size={32}
                color={colors.primary}
              />
            </View>
            <Text style={[styles.categoryName, { color: colors.text }]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    padding: 8,
  },
  categoryCard: {
    flex: 1,
    margin: 8,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 140,
    borderWidth: 1,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryName: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default CategoriesScreen;
