# À Dieu Soit La Gloire

Une application mobile dédiée au recueil de cantiques de l'ITPK "À DIEU SOIT LA GLOIRE".

## 📖 Description

Cette application a été développée avec passion pour faciliter l'accès aux cantiques du recueil "À DIEU SOIT LA GLOIRE" au sein du Campus de KATADJI de l'Institut Théologique et Pastoral des Assemblées de Dieu de Côte d'Ivoire. Elle vise à enrichir les cultes personnelles ou communautaires de louange et d'actions de grâce.

## ✨ Fonctionnalités

### 🎵 Gestion des Cantiques
- **Liste complète** des cantiques avec numérotation identique au recueil physique
- **Recherche puissante** par numéro, titre ou contenu des paroles
- **Classification par thèmes** : Louange, Adoration, Prière, Consécration, Communion, Évangélisation, Action de grâce, Repentance, Espérance, Foi, Noël, Pâques, Pentecôte, Divers
- **Historique** des cantiques récemment consultés

### 📱 Interface Utilisateur
- **Design épuré et moderne** avec palette de couleurs spirituelles (bleu royal, or discret, blanc)
- **Mode jour/nuit** automatique et manuel
- **Interface responsive** adaptée à toutes les tailles d'écran
- **Animations subtiles** pour une expérience enrichie

### 📖 Affichage des Cantiques
- **Paroles complètes** avec mise en évidence des refrains
- **Mode présentation** (grandes lettres pour projection)
- **Mode compact** (lecture personnelle)
- **Défilement automatique** à vitesse réglable
- **Fonctionnement 100% hors ligne**

### ⭐ Fonctionnalités Personnelles
- **Favoris** pour accès rapide aux cantiques préférés
- **Listes de lecture** personnalisables
- **Notes personnelles** sur chaque cantique
- **Programmes de service** pour organiser les cultes

## 🛠 Technologies Utilisées

- **React Native** avec **Expo**
- **TypeScript** pour la sécurité du code
- **React Navigation** pour la navigation
- **SQLite** pour la base de données locale
- **AsyncStorage** pour les préférences
- **Expo Vector Icons** pour les icônes

## 📋 Prérequis

- Node.js (v16 ou supérieur)
- npm ou yarn
- Expo CLI (optionnel mais recommandé)

## 🚀 Installation

### 1. Cloner le dépôt

\`\`\`bash
git clone https://github.com/votre-username/ADSLG.git
cd ADSLG
\`\`\`

### 2. Installer les dépendances

\`\`\`bash
npm install
# ou
yarn install
\`\`\`

### 3. Créer les assets

Avant de lancer l'application, assurez-vous d'avoir créé les fichiers d'assets requis dans le dossier `assets/`:
- `icon.png` (1024x1024px)
- `adaptive-icon.png` (1024x1024px)
- `splash.png` (2048x2048px)
- `favicon.png` (48x48px)

Consultez `assets/README.md` pour plus de détails.

### 4. Lancer l'application

\`\`\`bash
npm start
# ou
expo start
\`\`\`

Ensuite:
- Scannez le QR code avec l'application **Expo Go** sur votre téléphone
- Ou appuyez sur `a` pour ouvrir sur un émulateur Android
- Ou appuyez sur `i` pour ouvrir sur un simulateur iOS

## 📱 Déploiement

### Build Android (APK)

\`\`\`bash
eas build --platform android --profile preview
\`\`\`

### Build iOS

\`\`\`bash
eas build --platform ios --profile preview
\`\`\`

### Publication sur les stores

\`\`\`bash
# Android
eas build --platform android --profile production
eas submit --platform android

# iOS
eas build --platform ios --profile production
eas submit --platform ios
\`\`\`

## 📂 Structure du Projet

\`\`\`
ADSLG/
├── App.tsx                 # Point d'entrée de l'application
├── src/
│   ├── components/         # Composants réutilisables
│   │   ├── HymnCard.tsx
│   │   ├── SearchBar.tsx
│   │   └── EmptyState.tsx
│   ├── screens/           # Écrans de l'application
│   │   ├── HomeScreen.tsx
│   │   ├── HymnDetailScreen.tsx
│   │   ├── CategoriesScreen.tsx
│   │   ├── FavoritesScreen.tsx
│   │   ├── PlaylistsScreen.tsx
│   │   ├── ProgramsScreen.tsx
│   │   ├── SettingsScreen.tsx
│   │   └── AboutScreen.tsx
│   ├── navigation/        # Configuration de navigation
│   │   └── AppNavigator.tsx
│   ├── database/          # Gestion de la base de données
│   │   ├── init.ts
│   │   ├── hymns.ts
│   │   ├── favorites.ts
│   │   ├── playlists.ts
│   │   ├── notes.ts
│   │   ├── programs.ts
│   │   └── sampleData.ts
│   ├── contexts/          # Contextes React
│   │   ├── ThemeContext.tsx
│   │   └── SettingsContext.tsx
│   ├── types/             # Définitions TypeScript
│   │   └── index.ts
│   └── utils/             # Utilitaires et constantes
│       └── constants.ts
├── assets/                # Images et ressources
├── package.json
├── tsconfig.json
└── README.md
\`\`\`

## 🎨 Thèmes des Cantiques

L'application organise les cantiques selon les thèmes suivants:

1. **Louange** - Cantiques de louange et d'exaltation
2. **Adoration** - Cantiques d'adoration et de vénération
3. **Prière** - Cantiques de prière et d'intercession
4. **Consécration** - Cantiques de consécration et d'engagement
5. **Communion** - Cantiques de communion et de fraternité
6. **Évangélisation** - Cantiques d'évangélisation et de mission
7. **Action de grâce** - Cantiques de reconnaissance
8. **Repentance** - Cantiques de repentance et de confession
9. **Espérance** - Cantiques d'espérance et de foi
10. **Foi** - Cantiques sur la foi et la confiance
11. **Noël** - Cantiques de Noël
12. **Pâques** - Cantiques de Pâques
13. **Pentecôte** - Cantiques de Pentecôte
14. **Divers** - Autres cantiques

## 👨‍💻 Auteur

**Néhémie ACHI**
Étudiant Pasteur
Institut Théologique et Pastoral des Assemblées de Dieu de Côte d'Ivoire
Campus de KATADJI

📧 Email: nehemiahvmc@gmail.com
📱 Telegram: [@NehemiahAchi](https://t.me/NehemiahAchi)

## 📄 Licence

Cette application a été développée pour un usage personnel et communautaire au sein de l'ITPK.

## 🙏 Remerciements

Merci à tous ceux qui utilisent cette application pour enrichir leurs moments de louange et d'actions de grâce. Que Dieu soit glorifié !

---

**À Dieu Soit La Gloire !** 🎵
