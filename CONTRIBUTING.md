# Guide de Contribution

Merci de votre intérêt pour contribuer à "À Dieu Soit La Gloire" !

## 📝 Ajouter des Cantiques

Pour ajouter de nouveaux cantiques à l'application, suivez ces étapes :

### 1. Format des Cantiques

Chaque cantique doit suivre cette structure TypeScript :

\`\`\`typescript
{
  number: 1,                    // Numéro du cantique (unique)
  title: "Titre du cantique",   // Titre complet
  theme: "Louange",             // Thème (voir liste ci-dessous)
  lyrics: "Paroles...",         // Paroles complètes (séparées par \\n\\n pour les couplets)
  refrain: "Refrain..."         // Refrain (optionnel)
}
\`\`\`

### 2. Thèmes Disponibles

Utilisez exactement l'un de ces thèmes :
- `Louange`
- `Adoration`
- `Prière`
- `Consécration`
- `Communion`
- `Évangélisation`
- `Action de grâce`
- `Repentance`
- `Espérance`
- `Foi`
- `Noël`
- `Pâques`
- `Pentecôte`
- `Divers`

### 3. Formatage des Paroles

#### Couplets
Séparez chaque couplet par une ligne vide (`\\n\\n`) :

\`\`\`typescript
lyrics: \`Premier couplet ligne 1
Premier couplet ligne 2
Premier couplet ligne 3

Deuxième couplet ligne 1
Deuxième couplet ligne 2
Deuxième couplet ligne 3\`
\`\`\`

#### Refrain
Si le cantique a un refrain, placez-le dans le champ `refrain` :

\`\`\`typescript
refrain: \`Gloire à Dieu ! Gloire à Dieu !
Jésus est mon Sauveur !\`
\`\`\`

### 4. Ajouter au Fichier de Données

Éditez le fichier `src/database/sampleData.ts` et ajoutez votre cantique à l'array `sampleHymns` :

\`\`\`typescript
export const sampleHymns: Omit<Hymn, 'id' | 'isFavorite'>[] = [
  // ... cantiques existants ...
  {
    number: 50,
    title: "Nouveau Cantique",
    theme: "Louange",
    lyrics: \`Première strophe...

Deuxième strophe...\`,
    refrain: "Refrain si applicable..."
  },
];
\`\`\`

### 5. Exemple Complet

\`\`\`typescript
{
  number: 16,
  title: "Jésus est mon berger",
  theme: "Foi",
  lyrics: \`L'Éternel est mon berger,
Je ne manquerai de rien.
Il me fait reposer dans de verts pâturages,
Il me dirige près des eaux paisibles.

Il restaure mon âme,
Il me conduit dans les sentiers de la justice,
À cause de son nom.
Quand je marche dans la vallée de l'ombre de la mort,
Je ne crains aucun mal, car tu es avec moi.\`,
  refrain: \`Ta houlette et ton bâton me rassurent,
Tu dresses devant moi une table,
En face de mes adversaires.\`
}
\`\`\`

## 🔧 Développement

### Installation de l'environnement

\`\`\`bash
# Installer les dépendances
npm install

# Lancer l'application en mode développement
npm start
\`\`\`

### Tests

Avant de soumettre des modifications :

1. Vérifiez que l'application compile sans erreurs
2. Testez la recherche de cantiques
3. Vérifiez l'affichage correct des paroles
4. Testez le mode hors ligne

### Structure de Code

- **Utilisez TypeScript** pour tous les nouveaux fichiers
- **Suivez les conventions** de nommage existantes
- **Commentez** le code complexe en français
- **Formatez** le code de manière cohérente

## 📋 Checklist avant soumission

- [ ] Les numéros de cantiques sont uniques
- [ ] Les thèmes utilisent exactement les noms de la liste
- [ ] Les paroles sont correctement formatées
- [ ] Les refrains sont séparés des couplets
- [ ] L'application compile sans erreurs
- [ ] Les cantiques s'affichent correctement dans l'app

## 🐛 Signaler des Problèmes

Si vous rencontrez des bugs ou avez des suggestions :

1. Vérifiez que le problème n'a pas déjà été signalé
2. Décrivez clairement le problème
3. Incluez les étapes pour reproduire le bug
4. Mentionnez votre version de l'application

## 💡 Suggestions de Fonctionnalités

Nous sommes ouverts aux suggestions ! N'hésitez pas à proposer :

- Nouvelles fonctionnalités
- Améliorations de l'interface
- Optimisations de performance
- Nouvelles catégories de cantiques

## 📧 Contact

Pour toute question concernant les contributions :

**Néhémie ACHI**
- Email: nehemiahvmc@gmail.com
- Telegram: [@NehemiahAchi](https://t.me/NehemiahAchi)

---

Merci de contribuer à cette application et de participer à l'édification de la communauté ! 🙏
