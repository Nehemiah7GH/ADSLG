import { Hymn } from '../types';

export const sampleHymns: Omit<Hymn, 'id' | 'isFavorite'>[] = [
  {
    number: 1,
    title: "À Dieu Soit La Gloire",
    theme: "Louange",
    lyrics: `À Dieu soit la gloire, pour son grand amour !
En lui je me glorifie, car Christ est mon Sauveur.
Ô joie ineffable, je suis à Jésus !
Par son sang précieux, je suis sauvé, perdu.

Gloire au nom de Jésus !
Gloire au nom de Jésus !
Par son sang précieux,
Je suis sauvé, perdu.`,
    refrain: "Gloire à Dieu ! Gloire à Dieu !\nJésus est mon Sauveur !\nGloire à Dieu ! Gloire à Dieu !\nIl a lavé mon cœur !"
  },
  {
    number: 2,
    title: "Louez Dieu dans son sanctuaire",
    theme: "Louange",
    lyrics: `Louez Dieu dans son sanctuaire,
Louez-le au firmament de sa force !
Louez-le pour ses hauts faits,
Louez-le selon l'immensité de sa grandeur !

Louez-le au son de la trompette,
Louez-le avec la harpe et le luth !
Louez-le avec le tambourin et les danses,
Louez-le avec les instruments à cordes et les flûtes !`,
    refrain: "Que tout ce qui respire loue l'Éternel !\nAlléluia ! Alléluia !"
  },
  {
    number: 3,
    title: "Seigneur, je viens à toi",
    theme: "Adoration",
    lyrics: `Seigneur, je viens à toi, car tu m'as appelé,
J'ai besoin de ta grâce et de ta vérité.
Dans ta sainte présence, mon cœur veut t'adorer,
Car tu es Dieu, tu es saint, tu es mon Roi.

Jésus, mon Sauveur, je t'adore et te bénis,
Tu es mon espérance, mon secours jour et nuit.
Par ton sang versé, tu m'as purifié,
Je veux vivre pour toi tous les jours de ma vie.`,
    refrain: "Te voici, Seigneur, dans ta majesté,\nJe t'adore, je t'aime, tu es ma vérité."
  },
  {
    number: 4,
    title: "Mon Dieu, plus près de toi",
    theme: "Prière",
    lyrics: `Mon Dieu, plus près de toi, plus près de toi !
C'est le cri de ma foi : plus près de toi !
Ou sur une croix, la nuit m'enveloppant,
Toujours plus près de toi, plus près de toi !

En suivant le chemin moins large, plus étroit,
Toujours plus près de toi, plus près de toi !
Malgré l'obstacle et la peine, Seigneur, conduis mes pas,
Toujours plus près de toi, plus près de toi !`,
    refrain: "Plus près de toi, Seigneur, plus près de toi,\nC'est le cri de mon cœur, plus près de toi !"
  },
  {
    number: 5,
    title: "Je suis à Jésus",
    theme: "Consécration",
    lyrics: `Je suis à Jésus, il est à moi,
Pour toujours, pour toujours !
Il m'a sauvé sur la croix,
Pour toujours, pour toujours !

Mon cœur, mon âme, tout mon être,
Je les donne à mon Maître.
Il est mon Roi, mon Seigneur,
Jésus règne dans mon cœur.`,
    refrain: "À Jésus je me donne entier,\nPour le servir, pour l'adorer,\nMa vie, mes jours lui sont consacrés,\nPour toujours et à jamais !"
  },
  {
    number: 6,
    title: "Venez à moi",
    theme: "Évangélisation",
    lyrics: `Venez à moi, vous tous qui êtes fatigués,
Chargés de fardeaux, je vous soulagerai.
Prenez mon joug et apprenez de moi,
Car je suis doux et humble de cœur.

Jésus appelle aujourd'hui,
Il veut sauver ta vie.
Viens tel que tu es, ne tarde plus,
Il t'aime et t'attend, viens à Jésus.`,
    refrain: "Venez, venez à Jésus,\nIl vous recevra, ne tardez plus.\nVenez, venez aujourd'hui,\nIl est le chemin, la vérité, la vie."
  },
  {
    number: 7,
    title: "Merci, Seigneur",
    theme: "Action de grâce",
    lyrics: `Merci, Seigneur, pour ton amour,
Merci pour ta grâce qui me sauve chaque jour.
Merci pour ta bonté qui ne cesse jamais,
Merci, Jésus, pour tous tes bienfaits.

Tu m'as donné le salut et la paix,
Tu es fidèle, tu ne changes jamais.
Mon cœur déborde de reconnaissance,
Je veux te louer en tout temps, en toute circonstance.`,
    refrain: "Merci, merci, Seigneur,\nPour ton grand amour.\nMerci, merci, Seigneur,\nPour toujours et pour toujours !"
  },
  {
    number: 8,
    title: "Ô Seigneur, pardonne-moi",
    theme: "Repentance",
    lyrics: `Ô Seigneur, pardonne-moi,
Car j'ai péché contre toi.
Mon cœur est brisé, contrit,
Je reviens à toi aujourd'hui.

Crée en moi un cœur pur,
Renouvelle en moi un esprit bien disposé.
Ne me rejette pas loin de ta face,
Ne me retire pas ton Saint-Esprit.`,
    refrain: "Purifie-moi, ô Dieu,\nLave-moi, rends-moi blanc comme neige.\nRestau re ma joie, ton salut,\nEt je chanterai ta justice."
  },
  {
    number: 9,
    title: "Mon espérance est en toi",
    theme: "Espérance",
    lyrics: `Mon espérance est en toi, Seigneur,
Tu es mon rocher, mon libérateur.
Quand tout semble sombre autour de moi,
Je garde mes yeux fixés sur toi.

Tu es ma lumière dans la nuit,
Mon refuge quand l'orage vient.
Sur ta promesse je m'appuie,
Car tu es fidèle jusqu'à la fin.`,
    refrain: "En toi seul, Seigneur, j'espère,\nTu ne me décevras jamais.\nEn toi seul je mets ma confiance,\nTu es mon espoir, ma délivrance."
  },
  {
    number: 10,
    title: "Par la foi",
    theme: "Foi",
    lyrics: `Par la foi, je marche avec mon Dieu,
Même quand je ne vois pas le chemin.
Par la foi, je crois en sa promesse,
Il me guidera de sa main.

La foi, c'est l'assurance des choses qu'on espère,
La démonstration de celles qu'on ne voit pas.
Par la foi, je triomphe et j'avance,
Car mon Dieu est avec moi.`,
    refrain: "Je crois, oui je crois,\nEn Dieu qui fait l'impossible.\nJe crois, oui je crois,\nIl est puissant et terrible !"
  },
  {
    number: 11,
    title: "Il est né le divin enfant",
    theme: "Noël",
    lyrics: `Il est né le divin enfant,
Jouez hautbois, résonnez musettes !
Il est né le divin enfant,
Chantons tous son avènement !

Depuis plus de quatre mille ans,
Nous le promettaient les prophètes,
Depuis plus de quatre mille ans,
Nous attendions cet heureux temps.`,
    refrain: "Noël ! Noël ! Chantons Noël,\nCélébrons le Roi des cieux.\nNoël ! Noël ! Chantons Noël,\nGloire au Seigneur glorieux !"
  },
  {
    number: 12,
    title: "Christ est ressuscité",
    theme: "Pâques",
    lyrics: `Christ est ressuscité ! Alléluia !
Il a vaincu la mort ! Alléluia !
Le tombeau est vide, il est vivant !
Christ est ressuscité ! Alléluia !

Il est monté au ciel auprès du Père,
Il reviendra chercher son Église.
Chantons la victoire de notre Sauveur,
Il est vivant pour toujours !`,
    refrain: "Alléluia ! Alléluia !\nChrist est vivant, il règne à jamais !\nAlléluia ! Alléluia !\nGloire à l'Agneau qui nous a sauvés !"
  },
  {
    number: 13,
    title: "Esprit de Dieu, descends",
    theme: "Pentecôte",
    lyrics: `Esprit de Dieu, descends sur nous,
Remplis nos cœurs de ton feu saint.
Esprit de Dieu, viens au milieu de nous,
Manifeste ta puissance divine.

Comme au jour de la Pentecôte,
Viens souffler sur tes enfants.
Que ton onction repose sur nous,
Pour accomplir ta mission sur la terre.`,
    refrain: "Souffle, souffle, Esprit de vie,\nRemplis-nous de ta présence.\nSouffle, souffle, Esprit de feu,\nEmbrasse nos cœurs de ton amour !"
  },
  {
    number: 14,
    title: "À l'Agneau sur son trône",
    theme: "Adoration",
    lyrics: `À l'Agneau sur son trône,
Soit la gloire et l'honneur !
À celui qui nous aime,
Jésus-Christ, le Seigneur !

Puissance et sagesse,
Richesse et force aussi,
Bénédiction sans cesse,
À notre Dieu, Amen !`,
    refrain: "Digne est l'Agneau,\nQui a été immolé,\nDigne est l'Agneau,\nÀ jamais adoré !"
  },
  {
    number: 15,
    title: "Dans ta présence",
    theme: "Communion",
    lyrics: `Dans ta présence, ô Seigneur,
Je trouve la paix et la joie.
Dans ta présence, mon Sauveur,
Mon âme se repose en toi.

Rien n'est comparable à ta présence,
C'est là que je veux demeurer.
Dans ta présence est la plénitude,
À ta droite, les délices éternelles.`,
    refrain: "Ta présence, Seigneur,\nC'est tout ce que je désire.\nTa présence, Seigneur,\nMon cœur soupire après toi."
  }
];
