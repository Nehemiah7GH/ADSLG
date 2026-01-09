import { Hymn } from '../types';

export const sampleHymns: Omit<Hymn, 'id' | 'isFavorite'>[] = [
  {
    number: 1,
    title: "À Dieu Soit La Gloire",
    theme: "Louange",
    lyrics: `A Dieu soit la gloire
A Dieu soit la gloire
A Dieu soit la gloire
Pour les choses qu'Il a faites
Par Son Sang, Il m'a lavé,
Par Sa puissance, Il m'a relevé,
A Dieu soit la gloire
Pour les choses qu'Il a faites`
  },
  {
    number: 2,
    title: "A Nouveau Réunis",
    theme: "Communion",
    lyrics: `A nouveau réunis, pour louer le Seigneur
A nouveau réunis d'un même cœur !
A nos besoins Il répond,
Oui notre Dieu est bon !
A nouveau réunis pour louer le Seigneur`
  },
  {
    number: 3,
    title: "A Toi Nos Cœurs",
    theme: "Consécration",
    lyrics: `A toi nos cœurs, nos vies,
Christ notre Roi (Christ notre Roi)
Nous marchons tous à Ta suite,
Marchons à Ta suite !
Nous marchons tous à Ta suite,
Christ notre Roi (Christ, notre Roi)`
  },
  {
    number: 4,
    title: "Bénissez Le Seigneur",
    theme: "Louange",
    lyrics: `Bénissez Le Seigneur,
Vous tous serviteurs du Seigneur
Qui vous tenez dans maison de Dieu
Durant les heures de la nuit.
Levez vos mains vers Lui,
Et bénissez votre Dieu
Que Le Seigneur soit béni de Sion,
Lui qui fit le ciel et la terre !`
  },
  {
    number: 5,
    title: "Car Tu Es Dieu",
    theme: "Louange",
    lyrics: `Car tu es Dieu au-dessus de la terre
Tu établis ton trône dans les cieux
Car tu es Dieu au-dessus de la terre
Tu es le Roi, tu es le seul Dieu !`,
    refrain: "Dieu de gloire\nDieu de gloire\nDieu de gloire\nTu es Roi !"
  },
  {
    number: 6,
    title: "Chaque Instant",
    theme: "Foi",
    lyrics: `Chaque instant de chaque jour,
Jésus prend soin de moi ;
Chaque instant de chaque jour,
Mon cœur est dans la joie
Depuis que Christ m'a sauvé
C'est le bonheur !
Libéré de mon péché,
J'ai la paix dans mon cœur !`
  },
  {
    number: 7,
    title: "Cherchez D'Abord",
    theme: "Foi",
    lyrics: `Cherchez d'abord le Royaume de Dieu
et sa justice ;
Et toutes choses vous seront données
en plus, Alléluia, alléluia !
L'homme ne vivra pas de pain seulement
Mais de toute parole qui sortira
de la bouche de Dieu,
Alléluia, alléluia !`
  },
  {
    number: 8,
    title: "En Toi Jésus",
    theme: "Foi",
    lyrics: `En Toi Jésus, je mets toute ma foi
En Toi Jésus, je mets toute ma foi
En Toi Jésus, je mets toute ma foi`
  },
  {
    number: 9,
    title: "Béni Soit Le Seigneur",
    theme: "Louange",
    lyrics: `Béni soit le Seigneur
Béni soit le Seigneur
Car Son amour est grand
Car Son amour est grand
Béni soit le Seigneur
Béni soit le Seigneur
Car Il est puissant !
Car Il est puissant !`,
    refrain: "Nous te louons Seigneur de tout notre cœur, Nous nous tournons vers toi, Tu es notre joie.\nBéni soit le Seigneur\nPour Sa fidélité\nBéni soit le Seigneur\nPour Sa sainteté"
  },
  {
    number: 10,
    title: "Grandes Et Merveilleuses",
    theme: "Louange",
    lyrics: `Grandes et merveilleuses sont toutes
Tes œuvres O Seigneur, notre Dieu
Tout-Puissant !
Juste et véritable dans toute Ta volonté, Toi le Roi éternel`
  },
  {
    number: 11,
    title: "Dieu Est Là",
    theme: "Foi",
    lyrics: `Dieu est là, Dieu est là
Dieu est là pour te bénir, Dieu est là
Dieu est là pour secourir,
Te consoler, te guérir,
Si tu crois à Sa Parole, Dieu est là.`
  },
  {
    number: 12,
    title: "Digne Est L'Agneau",
    theme: "Louange",
    lyrics: `Digne est l'Agneau de recevoir
Force et Richesse, louange, honneur,
Sagesse, gloire, puissance et autorité
Pour les siècles des siècles,
Digne est l'agneau de Dieu.
Force, gloire, puissance et victoire
Sagesse, richesses, puissance et autorité,
Force, gloire puissance et victoire,
Sagesse, richesse : Digne est l'Agneau de Dieu !`
  },
  {
    number: 13,
    title: "Je N'Ai Que Toi",
    theme: "Foi",
    lyrics: `Je n'ai que Jésus pour me relever
Je n'ai que Jésus pour me guérir
Je n'ai que Jésus comme espérance,
De Sa puissance, Il me remplit !
Je n'ai que Jésus, je n'ai que Lui
Pour me diriger, pour me garder,
Et dans mes luttes, Il me soutient,
Je n'ai que Jésus, je n'ai que Lui.`
  },
  {
    number: 14,
    title: "Je M'Écrie Loué Soit",
    theme: "Louange",
    lyrics: `Je m'écrie: "loué soit l'Eternel !"
Et je suis délivré de tous mes ennemis`
  },
  {
    number: 15,
    title: "Hier, Aujourd'hui",
    theme: "Foi",
    lyrics: `Hier, aujourd'hui pour jamais,
Jésus ne change pas
Tout se flétrit ici-bas
Jésus ne change pas`,
    refrain: "Bénis soit Son Nom, Bénis soit Son Nom\nTout se flétrit ici-bas, Lui ne change pas !"
  },
  {
    number: 16,
    title: "Il Est Le Dieu De Mon Salut",
    theme: "Louange",
    lyrics: `Il est Le Dieu de mon salut
Il est le Dieu de ma délivrance
Un Dieu d'amour, un Dieu d'espérance,
Alléluia, alléluia !`
  },
  {
    number: 17,
    title: "Je Louerai L'Éternel",
    theme: "Louange",
    lyrics: `Je louerai l'Eternel, de tout mon cœur
Je raconterai toutes Tes merveilles,
Je chanterai Ton Nom.
Je Louerai l'Eternel de tout Mon cœur
Je ferai de toi le sujet de ma joie, alléluia!`
  },
  {
    number: 18,
    title: "Ne Crains Point",
    theme: "Foi",
    lyrics: `Ne crains point crois seulement,
Ne crains point crois seulement,
Toutes choses sont possibles
A celui qui croit
Regarde à Ton Sauveur, IL est toujours vainqueur
Toutes choses sont possibles à celui qui croit !`
  },
  {
    number: 19,
    title: "Nous Sommes Uns",
    theme: "Communion",
    lyrics: `Nous sommes un dans un lien d'amour
Nous sommes un dans un lien d'amour
Notre esprit est uni avec l'Esprit de Dieu
Nous sommes un dans un lien d'amour.
Maintenant chantons tous ensemble
Et que son amour se répande
Tenons-nous par la main et le monde verra
Nous sommes un dans lien d'amour !`
  },
  {
    number: 20,
    title: "O! Dieu Crée En Moi",
    theme: "Repentance",
    lyrics: `O! Dieu, crée en moi un cœur pur
O! Dieu, crée en moi un cœur pur
Renouvelles en moi un esprit bien disposé,
O! Dieu crée en moi un cœur pur.`
  },
  {
    number: 21,
    title: "Prosternez-Vous",
    theme: "Louange",
    lyrics: `Prosternez-vous devant votre Roi
Adorez-le de tout votre cœur
Faites monter vers Sa Majesté
Des chants de gloire pour votre Roi des rois !`
  },
  {
    number: 22,
    title: "Quand Les Montagnes",
    theme: "Foi",
    lyrics: `Quand les montagnes s'éloignent
Quand les collines chancelleraient
Dieu fera tout comme Il promet
Mon amour, oui mon amour ne s'éloignera pas de toi
Mon amour, oui mon amour ne s'éloignera pas de toi
Quand les montagnes s'éloignent
Quand les collines chancelleraient
Dieu fera tout comme Il promet!`
  },
  {
    number: 23,
    title: "Te Ressembler Jésus",
    theme: "Consécration",
    lyrics: `Te ressembler Jésus, c'est mon espoir suprême,
penser, agir, aimer toujours plus comme Toi,
Te ressembler Jésus, c'est mon espoir suprême,
par Ton Esprit, rends-moi semblable à Toi.`
  },
  {
    number: 24,
    title: "Vers Jésus Lève Les Yeux",
    theme: "Foi",
    lyrics: `Vers Jésus, lève les yeux
Contemple Son visage merveilleux
Et les choses de la terre pâliront peu à peu
si tu lèves vers Jésus les yeux.
Christ est pour moi Un Sauveur admirable,
Un Conseiller, Un Ami merveilleux
Son Nom béni n'a rien de comparable
sur cette terre et là-haut dans les cieux !`
  },
  {
    number: 25,
    title: "Vers Toi Seigneur",
    theme: "Louange",
    lyrics: `Vers Toi, Seigneur, j'élève ma voix
Pour T'adorer mon Sauveur, mon Roi
Reçois Seigneur comme un doux parfum
L'amour et le chant de mon cœur reconnaissant.`
  },
  {
    number: 26,
    title: "Oui Tu Es Digne",
    theme: "Louange",
    lyrics: `Oui Tu es digne de régner dans notre cœur,
Tu es le Roi de gloire, alléluia !
Jésus, Tu es le Maitre en moi, alléluia !
Alléluia, alléluia !`
  },
  {
    number: 27,
    title: "Seigneur Nous Voici",
    theme: "Prière",
    lyrics: `Seigneur, nous voici devant Toi
Tous unis dans Ta maison
Nous avons soif de T'entendre
Nous avons soif de Toi
Oh, Seigneur, manifeste-Toi!
Au milieu de nous, montre Ta grandeur
Seigneur de gloire, règne sur nos cœurs !
Seigneur nous voici devant Toi manifeste-Toi!`
  },
  {
    number: 28,
    title: "Je Prie Pour Toi",
    theme: "Communion",
    lyrics: `Je prie pour toi, tu pries pour moi
Car Dieu nous lie à toujours en une chaîne d'amour
Je prie pour toi, et tu pries pour moi
Car Dieu nous lie à toujours en une chaîne d'amour
Et chacun des maillons, dans l'épreuve tiendra bon.`
  },
  {
    number: 29,
    title: "Hosanna",
    theme: "Louange",
    lyrics: `Hosanna, Hosanna, Hosanna, au plus haut des cieux
Hosanna, Hosanna, Hosanna, au plus haut des cieux
Nous célébrons Ton Nom d'un cœur reconnaissant
Tu es le Seigneur glorieux
Hosanna au plus haut des cieux !`,
    refrain: "Gloire, Gloire, Gloire, à Jésus notre Roi\nNous célébrons Ton Nom d'un cœur reconnaissant,\nTu es le Seigneur glorieux,\nOh gloire à Jésus notre Roi !"
  },
  {
    number: 30,
    title: "En Son Temps",
    theme: "Foi",
    lyrics: `En Son temps, en Son temps
Ce que Dieu fait est parfait en Son temps
Seigneur Jésus je te prie,
Montre-moi que dans ma vie
Tu fais tout ce que tu dis en Ton temps.
En Ton temps, en Ton temps
Ce que tu fais est parfait en Ton temps
Seigneur, prends toute ma vie,
Qu'elle soit dès aujourd'hui
Pour toi une mélodie, en Ton temps.`
  },
  {
    number: 31,
    title: "L'Esprit Du Seigneur",
    theme: "Pentecôte",
    lyrics: `L'Esprit du Seigneur est sur nous,
Notre combat est le combat de Dieu
Il est au milieu de nous,
En nous, pour nous
Alors que le plus petit dise aujourd'hui
"Je suis fort en Lui"
Et que le plus faible aussi dise
"Je puis tout car Il me fortifie"

Sur nos fronts un Nom glorieux
A nos côtés, une puissante Armée
Nous donne de triompher
En Lui, pour Lui
Alors que le plus petit dise aujourd'hui
"Je suis fort en Lui"
Et que le plus faible aussi dise
"Je puis tout car Il me fortifie"
"Je puis tout car Il me FORTIFIE!!!"`
  },
  {
    number: 32,
    title: "Comme Une Biche",
    theme: "Prière",
    lyrics: `Comme une biche soupire
Comme une biche soupire
Comme une biche soupire
Comme une biche soupire
Après des courants d'eau
Ainsi mon âme soupire après toi
Soupire après toi, ô Dieu.
Mon âme a soif de Dieu, du Dieu vivant, Dieu vivant !
Comme une biche après des courants d'eau !`
  },
  {
    number: 33,
    title: "Être Comme Jésus",
    theme: "Consécration",
    lyrics: `Être comme Jésus, être comme Jésus,
C'est bien là tout mon désir,
Le long du chemin, jusqu'au jour divin,
C'est bien là tout mon désir.`
  },
  {
    number: 34,
    title: "Jésus Est Seigneur",
    theme: "Louange",
    lyrics: `Jésus est Seigneur, Jésus-Christ est Roi
Nous nous emparons de la victoire en Son Nom
Chaque peuple ou nation, chaque situation
doit proclamer que Jésus est Roi,
Car l'Éternel Dieu L'a ressuscité des morts
Et l'a établi Roi des rois, Lui a donné le pouvoir
sur toute la création
Oui Dieu l'a dit : Christ est Seigneur`
  },
  {
    number: 35,
    title: "Règne En Moi",
    theme: "Consécration",
    lyrics: `Règne en moi, Roi Puissant, règne en moi,
Règne en moi, Roi Puissant, règne en moi.
Maîtrise mon cœur, viens régner Seigneur
Et que ta volonté soit faite à jamais
Règne en moi, Roi Puissant, règne en moi,
Règne en moi, Roi Puissant, règne en moi.`
  },
  {
    number: 36,
    title: "Celui Qui Demeure",
    theme: "Foi",
    lyrics: `Celui qui demeure à l'abri du Très-Haut
Repose à l'ombre d'El-Shaddai
Celui qui demeure à l'abri du Très-Haut
Repose à l'ombre d'El-Shaddai
Je dis à l'Éternel: Mon refuge et ma forteresse,
En Toi, je me confie El Shaddaï
Je dis à l'Éternel: Mon refuge et ma forteresse,
En Toi, je me confie El Shaddaï`
  },
  {
    number: 37,
    title: "Son Nom Est Jésus",
    theme: "Louange",
    lyrics: `Son Nom est Jésus, Jésus, Il vient pour te consoler
Il guérit les cœurs brisés soulage les opprimés,
Il est toujours capable de délivrer`
  },
  {
    number: 38,
    title: "Nous Voulons Voir",
    theme: "Prière",
    lyrics: `Nous voulons voir Jésus dans toute Sa grandeur
communiquer la vie et engendrer la paix
Nous voulons voir Jésus un seul instant
Nous voulons voir Jésus se lever parmi nous!`
  },
  {
    number: 39,
    title: "Tu Es Le Potier",
    theme: "Consécration",
    lyrics: `Tu es le Potier et je suis l'argile
Formé par Tes mains, Tes doigts agiles
Tu fais de moi, ô Seigneur, un vase d'honneur !`
  },
  {
    number: 40,
    title: "C'Est Si Bon De Marcher",
    theme: "Foi",
    lyrics: `C'est si bon de marcher avec le Seigneur
C'est si bon de marcher avec le Seigneur
C'est si bon de marcher toujours
Un peu plus près du Seigneur
C'est si bon de marcher avec le Seigneur

C'est si bon de regarder vers le Seigneur
C'est si bon de regarder vers le Seigneur
De lever les yeux vers Lui
Lorsque s'épaissit la nuit ;
C'est si bon de regarder vers le Seigneur

C'est si bon de s'appuyer sur le Seigneur
C'est si bon de s'appuyer sur le Seigneur
dans les bons, les mauvais jours,
de compter sur son amour
C'est si bon de s'appuyer sur le Seigneur`
  },
  {
    number: 41,
    title: "Jésus, Qui Est Comparable",
    theme: "Louange",
    lyrics: `Jésus, qui est comparable à Toi?
Jésus, Tu es tout pour moi
Jésus, j'ai besoin de Toi
Jésus Tu es toujours le même
Jésus, je T'aime`
  },
  {
    number: 42,
    title: "Je Veux Te Louer",
    theme: "Louange",
    lyrics: `Je veux Te louer, Toi qui m'as aimé
Comment m'exprimer, pour Te remercier?
Tu as rempli ma vie de joie et d'harmonie.
Oh MERCI!`
  },
  {
    number: 43,
    title: "Revêtons L'Armure",
    theme: "Foi",
    lyrics: `Revêtons l'armure et gagnons le combat,
La victoire est à notre Dieu !
Toute arme forgée contre nous est brisée,
la victoire est à notre Dieu !`,
    refrain: "Oui Chantons gloire, honneur\nForce et louange au Seigneur\n\nLorsque les ténèbres seraient comme un fleuve,\nla victoire est à notre Dieu !\nIl déploie sur nous le pouvoir de son sang,\nla victoire est à notre Dieu !\n\nQuand l'ennemi vient près de toi ne craint rien,\nla victoire est à notre Dieu\nTu peux résister car tu es racheté,\nLa victoire est à notre Dieu !"
  },
  {
    number: 44,
    title: "Abba Père, Je Veux",
    theme: "Consécration",
    lyrics: `Abba Père, je veux être à Toi seulement
Et ma volonté soumettre à Toi constamment
Que mon cœur reste enflammé
Près de Toi je veux rester
Abba Père, je veux être à Toi seulement.`
  },
  {
    number: 45,
    title: "Merci Pour Ta Parole",
    theme: "Action de grâce",
    lyrics: `Merci pour ta Parole, Lumière donné aux hommes
pour nous faire connaître le cœur de Dieu,
J'aime Ta parole, Seigneur !`,
    refrain: "Elle est la vérité sur mon sentier,\nPar elle, je veux me laisser guider\net faire ta volonté sans murmurer\nEn espérant dans ta bonté !\n\nJe crois dans tes promesses mon cœur est comme un rocher\nFondé sur tout ce que dit mon Dieu\nJ'aime Ta parole Seigneur."
  },
  {
    number: 46,
    title: "Sonde-Moi Ô Dieu",
    theme: "Repentance",
    lyrics: `Sonde-moi ô Dieu et connais mon cœur
Eprouve-moi et connais mes pensées !
Regarde si je suis sur une mauvaise voie
Et conduis-moi dans la voie de l'éternité !`
  },
  {
    number: 47,
    title: "On T'A Fait Connaître",
    theme: "Consécration",
    lyrics: `On t'a fait connaître ô Homme ce qui est bien
Et ce que l'Eternel demande de toi :
C'est que tu pratiques la justice
Que tu aimes la miséricorde,
Que tu marches humblement avec ton Dieu
Que tu marches humblement avec ton Dieu`
  },
  {
    number: 48,
    title: "L'Éternel Combattra",
    theme: "Foi",
    lyrics: `L'Eternel combattra pour vous
L'Eternel combattra pour vous
L'Eternel combattra pour vous
Et vous gardez le silence !`
  },
  {
    number: 49,
    title: "Père, Unis-Nous Tous",
    theme: "Communion",
    lyrics: `Père, unis-nous tous
Père, unis-nous tous
Que le monde croie à ton amour
Père, unis-nous tous !`
  },
  {
    number: 50,
    title: "Que Ma Vie Te Glorifie",
    theme: "Consécration",
    lyrics: `Que ma vie Te glorifie, Te glorifie
Que ma vie Te glorifie, Seigneur !
Que l'Eglise Te glorifie, Te glorifie,
Que l'Eglise Te glorifie, Te glorifie, Seigneur !
In my life, Lord, Be glorified
In my life, Lord, Be glorified
In my life, Lord, be glorified today !
(in your church...)`
  },
  {
    number: 51,
    title: "Abba Père",
    theme: "Consécration",
    lyrics: `Abba Père, je veux être à Toi seulement
Et ma volonté soumettre à Toi constamment
que mon cœur reste enflammé
Près de Toi je veux rester
Abba Père, je veux être à Toi seulement !`
  },
  {
    number: 52,
    title: "Not By Might",
    theme: "Pentecôte",
    lyrics: `Not by might nor by power
Not by might nor by power
But by my Spirit, said the Lord
This mountain can be removed
This mountain can be removed
This mountain can be removed
But by my Spirit, said the Lord`
  },
  {
    number: 53,
    title: "He's Alive",
    theme: "Pâques",
    lyrics: `He's alive, amen! he's alive
Jesus is alive forever, He's alive, amen !`
  },
  {
    number: 54,
    title: "Viens Régner Jésus",
    theme: "Louange",
    lyrics: `Viens régner Jésus Jésus sur toutes les nations du monde
Viens régner Jésus Jésus sur toutes les nations du monde
Que Ta gloire remplie l'univers tout entier
Que tout homme vienne à Tes pieds se prosterner
car Toi seul, Toi seul es digne de régner, REGNER !`
  },
  {
    number: 55,
    title: "Jésus Nous T'Adorons",
    theme: "Louange",
    lyrics: `Jésus, nous T'adorons
Jésus, nous T'adorons
Jésus, Tu es Souverain!
Tes œuvres T'acclament, l'Eglise proclame :
« O Jésus, tu es Souverain !»`
  },
  {
    number: 56,
    title: "La Joie Du Seigneur",
    theme: "Louange",
    lyrics: `La joie du Seigneur est ma force
La joie du Seigneur est ma force
La joie du Seigneur est ma force
Ma force est dans la joie du Seigneur !`
  },
  {
    number: 57,
    title: "C'Est La Joie",
    theme: "Louange",
    lyrics: `C'est la joie
C'est la joie
C'est la joie du ciel
Qui déborde de mon cœur
Gloire à mon sauveur
Oh vous qui n'avez pas cette joie,
Voulez-vous venir, venir la recevoir ?
Oh, vous qui n'avez pas cette joie,
Voulez-vous venir aujourd'hui la recevoir?
Oh! La joie immense, infinie de donner à Jésus sa vie
de pouvoir combattre et lutter jusqu'au bout,
d'avoir la victoire en tout et partout !`
  },
  {
    number: 58,
    title: "Parce Qu'Il Vit",
    theme: "Espérance",
    lyrics: `Parce qu'Il vit, je n'ai rien à craindre
Mes lendemains sont assurés
Entre Ses mains, Il tient ma vie
Pour ce temps et l'éternité, je sais qu'Il vit!
Entre Ses mains, Il tient ma vie
Pour ce temps et l'éternité, je sais qu'Il vit!`
  },
  {
    number: 59,
    title: "Ah, Tiens-Moi Prêt",
    theme: "Espérance",
    lyrics: `Ah, tiens-moi prêt pour Ton retour,
Victorieux de jour en jour
Gardé par Ton fidèle amour !
Ah, tiens-moi prêt pour Ton retour!`
  },
  {
    number: 60,
    title: "Ce N'Est Plus Moi Qui Vis",
    theme: "Consécration",
    lyrics: `Ce n'est plus moi qui vis, Alléluia
C'est Jésus qui vit en moi !
Ce n'est plus moi qui vis, Alléluia
C'est Jésus qui vit en moi !
En moi, En moi, C'est Jésus qui vit en moi
En moi, En moi, C'est Jésus qui vit en moi
Ce n'est plus moi qui vis, Alléluia
C'est Jésus qui vit en moi
Ce n'est plus moi qui vis, Alléluia
C'est Jésus qui vit en moi`
  },
  {
    number: 61,
    title: "Amour Si Merveilleux",
    theme: "Action de grâce",
    lyrics: `Amour si merveilleux
Amour si merveilleux
Amour si merveilleux
Pour moi, pour moi !
sur la croix de Golgotha
Jésus-Christ me racheta !
Amour si merveilleux,
Si merveilleux pour moi !`
  },
  {
    number: 62,
    title: "Nous Sommes Héritiers",
    theme: "Communion",
    lyrics: `Nous sommes héritiers du père
et cohéritiers du Fils
Nous sommes enfants du Royaume
et nous formons une famille.`
  },
  {
    number: 63,
    title: "Notre Espoir",
    theme: "Espérance",
    lyrics: `Notre espoir dans le combat c'est Jésus, le Roi des rois,
dans le ciel, notre avocat, Le rocher de notre foi.
Notre espoir dans le combat c'est Jésus, le Roi des rois,
dans le ciel, notre avocat, Le rocher de notre foi.
La victoire est possible si nous marchons par le Christ
ainsi psalmodient les élus, Alléluia, Amen!
La victoire est possible si nous marchons par le Christ
ainsi psalmodient les élus, Alléluia, Amen!`
  },
  {
    number: 64,
    title: "Le Seigneur Est Vivant",
    theme: "Louange",
    lyrics: `Le Seigneur est vivant Il est mon rocher
Le Seigneur est vivant Il est mon rocher
Et qu'Il soit exalté Le Rocher de mon Salut
Et qu'Il soit exalté Le Rocher de mon Salut`
  },
  {
    number: 65,
    title: "Ceux Qui Se Confient",
    theme: "Foi",
    lyrics: `Ceux qui se confient en l'Eternel
Sont comme la montagne de Sion
Ceux qui se confient en l'Eternel
Sont comme la montagne de Sion
Elle ne chancelle point elle est affermie pour toujours
Elle ne chancelle point elle est affermie pour toujours
Des montagnes entourent Jérusalem
Ainsi l'Eternel entoure son peuple
Des montagnes entourent Jérusalem
Ainsi l'Eternel entoure son peuple`
  },
  {
    number: 66,
    title: "Oh Roi Des Rois",
    theme: "Louange",
    lyrics: `Oh Roi des rois, nous Te louons
chantant hosanna à la gloire de Ton nom
Oh Roi des rois, nous Te louons
chantant hosanna à la gloire de Ton nom
Nous te louons, Nous t'adorons et nous te bénissons
Nous te louons, Nous t'adorons et nous te bénissons`
  },
  {
    number: 67,
    title: "Alléluia",
    theme: "Louange",
    lyrics: `Alléluia, alléluia !
Gloire à Jésus notre seul Maître !
Gloire au Vainqueur de Golgotha !
Alléluia, alléluia !
Alléluia, alléluia !
Gloire à Jésus notre seul Maître,
Qui nous a sauvés du péché,
Alléluia, alléluia !`
  },
  {
    number: 68,
    title: "Nous Marchons",
    theme: "Espérance",
    lyrics: `Nous marchons ensemble
Nous marchons ensemble
Vers ce beau pays là-haut
Nous marchons ensemble
Nous marchons ensemble
Vers ce beau pays là-haut`
  },
  {
    number: 69,
    title: "Que C'Est Merveilleux !",
    theme: "Louange",
    lyrics: `Que c'est merveilleux, vraiment merveilleux
d'abandonner ce monde pour suivre Jésus,
devenir ami du Seigneur Jésus
que c'est merveilleux, vraiment merveilleux!`
  },
  {
    number: 70,
    title: "Depuis Que Jésus",
    theme: "Louange",
    lyrics: `Depuis que Jésus est venu habiter mon cœur,
dans ma vie, j'ai vu se réaliser le bonheur !
Tous mes péchés ont disparu
C'est la paix, la joie chaque jour.
Tenu par sa main, je suis en chemin
J'attends son retour!`
  },
  {
    number: 71,
    title: "Je Suis Dans La Joie",
    theme: "Louange",
    lyrics: `Je suis dans la joie
Quand on me dit :
<< Allons à la maison de l'Eternel >>
Une heure dans Ses parvis
Vaut mieux que mille ailleurs
Une heure dans Ses parvis
Vaut mieux que mille ailleurs
Assemblés en Son nom, Jésus est avec nous
Assemblés en Son nom, Jésus est avec nous
Ce que vous demander Il vous l'accordera
Ce que vous demander Il vous l'accordera
Si Dieu est avec nous, qui sera contre nous ?
Si Dieu est avec nous, qui sera contre nous ?`
  },
  {
    number: 72,
    title: "J'Étais Pauvre",
    theme: "Action de grâce",
    lyrics: `J'étais pauvre mais Il m'a enrichi !
Etant riche, il s'est fait pauvre pour moi
Mon Sauveur bien-aimé expia mes péchés.
J'étais pauvre mais il m'a enrichi !`
  },
  {
    number: 73,
    title: "Personne N'Est Fort",
    theme: "Pentecôte",
    lyrics: `Personne n'est fort, Plus grand que notre Dieu
personne, personne !
Personne n'est fort, Plus grand que notre Dieu
personne, personne !
Personne n'est (plus grand que notre Dieu)
Personne n'est (plus grand que notre Dieu)
Personne n'est (plus grand que notre Dieu)
Personne n'est (plus grand que notre Dieu)
Ce n'est pas par la force,
Ni par l'intelligence,
Mais c'est par Le Saint-Esprit
Ce n'est pas par la force,
Ni par l'intelligence,
Mais c'est par Le Saint-Esprit
Que les montagnes seront déplacées
Que les montagnes seront déplacées
Que les montagnes seront déplacées
Par la puissance du Saint-Esprit
Par la puissance du Saint-Esprit`
  },
  {
    number: 74,
    title: "En Christ J'Ai",
    theme: "Foi",
    lyrics: `En Christ, j'ai la lumière qui me conduit
L'amour qui, sur la terre, toujours me suit,
La joie intime et pure, l'espérance des cieux,
La foi qui me rassure, La paix de Dieu !`
  },
  {
    number: 75,
    title: "J'Aime Le Seigneur",
    theme: "Louange",
    lyrics: `J'aime le Seigneur de tout mon cœur
J'aime le Seigneur qui est mort pour moi
et je veux Lui obéir toujours.`
  },
  {
    number: 76,
    title: "Chantez Au Seigneur",
    theme: "Louange",
    lyrics: `Chantez au Seigneur un chant nouveau
Dansez en son honneur
Jésus est le Roi de Gloire,
Il est le Seigneur des Seigneurs,
Jésus est le Roi de Gloire,
Notre Libérateur!
Chantez au Seigneur un chant nouveau
Dansez en son honneur !`
  },
  {
    number: 77,
    title: "Sanctifions-Nous",
    theme: "Consécration",
    lyrics: `Sanctifiions-nous, aimons-nous
pour attendre Jésus,
Car Il revient bientôt !
Il revient. (Pour nous prendre)
Il revient. (Pour nous prendre)
Alléluia!`
  },
  {
    number: 78,
    title: "Jésus-Christ Est Seigneur",
    theme: "Louange",
    lyrics: `Jésus-Christ est Seigneur,
Il est sorti du tombeau, Il est Seigneur !
Tout genou fléchira, Toute langue confessera
que Jésus est Seigneur !`
  },
  {
    number: 79,
    title: "Quel Bonheur De",
    theme: "Foi",
    lyrics: `Quel bonheur de marcher avec Jésus
Quel bonheur de marcher avec Lui!
Il conduira tous les pas de mon voyage ici-bas!
Quel bonheur de marcher avec Lui!
Avec Lui, montons toujours plus haut
Avec Lui, montons toujours plus haut
Ne craignons pas le danger Christ est le bon berger.
Avec lui, montons toujours plus haut
Plus haut sera le divin repos
Plus haut sera le divin repos
Avec Jésus, dans les cieux, nous serons toujours heureux.
Plus haut sera le divin repos !`
  },
  {
    number: 80,
    title: "Louange À Jésus",
    theme: "Louange",
    lyrics: `Louange, Louange, Louange à Jésus notre Roi !
Qui pourra condamner ceux qui sont délivrés
Et qui marche dans la sainteté ?
Louange, Louange, Louange à Jésus notre Roi !
Qui pourra condamner ceux qui sont délivrés
Et qui marche dans la sainteté ?`
  },
  {
    number: 81,
    title: "Il Sait Si Bien",
    theme: "Foi",
    lyrics: `Il sait si bien ce qu'il me faut,
Sur Son amour, je me repose.
Le mystère de toute chose
Me sera révélé là-haut!`
  },
  {
    number: 82,
    title: "Par Le Nom De Jésus",
    theme: "Foi",
    lyrics: `Par Le Nom de Jésus
Par Le Nom de Jésus
Dieu donne la victoire !
Par Le Nom de Jésus
Par Le Nom de Jésus
Dieu donne la victoire !`
  },
  {
    number: 83,
    title: "Heureux Est Le Peuple",
    theme: "Louange",
    lyrics: `Heureux, Heureux est le peuple
Dont l'Eternel est le Dieu
Heureux, Heureux est le peuple
Dont l'Eternel est le Dieu
Le matin, cherchez Sa face jusqu'au soir de Son retour.
Confiez-vous en Sa grâce, Il est Dieu d'amour!`
  },
  {
    number: 84,
    title: "Je Marche Vers",
    theme: "Espérance",
    lyrics: `Je marche vers ma patrie, je marche vers le bonheur,
Vers une joie infinie qui remplira tout mon cœur :
Voir mon Sauveur face à face,
Et je serai par sa grâce dans la présence du Roi !`
  },
  {
    number: 85,
    title: "Quand La Tempête",
    theme: "Foi",
    lyrics: `Quand la tempête, les vents contraires
Soufflent dans ma vie, vers Jésus, je lève les yeux,
la paix me revient !
Quand la tempête, les vents contraires
Soufflent dans ma vie, vers Jésus, je lève les yeux,
la paix me revient !
Je ne crains plus rien, mon espoir dans le combat c'est Jésus!
je ne crains plus rien, mon Dieu est vivant !
Je ne crains plus rien, mon espoir dans le combat c'est Jésus!
je ne crains plus rien, mon Dieu est vivant !`
  },
  {
    number: 86,
    title: "Mon Oreille",
    theme: "Louange",
    lyrics: `Mon oreille avait entendu parler de Toi
Mais maintenant mon œil Te voit
Maintenant mon œil Te voit
Maintenant mon œil Te voit
Jésus, mon Roi!
C'est pourquoi je me condamne et me repens
car Maintenant mon œil Te voit, Jésus, mon Roi !
Désormais, je veux célébrer Ton nom Seigneur !
Car Maintenant mon œil Te voit,
Maintenant mon œil te voit
Maintenant mon œil te voit
Jésus, mon Roi!`
  },
  {
    number: 87,
    title: "Dans Le Monde Entier",
    theme: "Pentecôte",
    lyrics: `Dans le monde entier, le Saint-Esprit agit
Dans le monde entier, comme le prophète l'a dit.
Dans le monde entier, Le Seigneur répand Sa grâce
remplissant tout l'univers comme l'eau couvre
le fond des mers.
Au fond de mon cœur, le Saint-Esprit agit
Au fond de mon cœur, comme le prophète l'a dit
Au fond de mon cœur, Le Seigneur répand Sa Grâce
remplissant mon cœur ouvert, comme l'eau couvre
le fond des mers.`
  },
  {
    number: 88,
    title: "Gloire À Ton Nom",
    theme: "Louange",
    lyrics: `Gloire à Ton Nom, Jésus
Gloire à Ton Nom, Jésus
Mon Rocher, Ma Forteresse,
Mon Libérateur je me confie en Toi !
Gloire à Ton Nom, Seigneur Jésus !`
  },
  {
    number: 89,
    title: "Envoie La Puissance",
    theme: "Pentecôte",
    lyrics: `Envoie la puissance sur ton peuple,
La puissance d'autrefois,
Ouvre les écluses, envoie la puissance
Sur tous ceux qui sont à Toi.
Envoie sur chacun des langues de feu,
Brulant en nous toute tiédeur
Purifie nos âmes, mets en nous Ta flamme;
Oh, Baptise-nous de feu.`
  },
  {
    number: 90,
    title: "Que N'Ai-Je Mille",
    theme: "Louange",
    lyrics: `Que n'ai-je mille voix, mon Dieu pour T'adorer
Que n'ai-je mille pieds, pour courir à Ta voix
Mais prends ma vie, mon cœur, de chacun d'eux dispose,
qu'ils soient d'une bonne odeur dans ton sanctuaire.`
  },
  {
    number: 91,
    title: "Oh Oui C'Est Vrai",
    theme: "Foi",
    lyrics: `Oh oui c'est vrai, je sais que c'est vrai
Il est écrit, cela suffit: que Jésus m'aime
Oh bonheur suprême, La Bible me le dit !`
  },
  {
    number: 92,
    title: "Car Ta Bonté",
    theme: "Action de grâce",
    lyrics: `Car Ta Bonté vaut mieux que la vie
Car Ta Bonté vaut mieux que la vie
Mes lèvres célèbrent tes louanges,
Car ta bonté vaut mieux que la vie
J'élèverai les mains en Ton nom
J'élèverai les mains en Ton nom
Je te bénirai toute ma vie
Car Ta bonté vaut mieux que la vie`
  },
  {
    number: 93,
    title: "Merveilleux Amour",
    theme: "Action de grâce",
    lyrics: `Merveilleux amour, amour de Dieu pour moi!
Merveilleux amour de Jésus sur la croix !
Vaste autant que les océans, profond plus que les mers,
haut plus que l'azur des cieux est Son amour !`
  },
  {
    number: 94,
    title: "Notre Dieu Est Grand",
    theme: "Louange",
    lyrics: `Notre Dieu est grand, nul n'est comme Lui!
Son Nom est puissant, Son pouvoir infini !
Les flots de la Mer Rouge, Son bras les ouvrit
Ce Dieu de miracle est Le même aujourd'hui !`
  },
  {
    number: 95,
    title: "Quand Je Vois Le Ciel",
    theme: "Louange",
    lyrics: `Quand je vois le ciel, œuvre de Tes Doigts
La lune et les étoiles que Tu créas
Qu'est-ce que l'homme, ô Eternel
Qu'est-ce que l'homme, ô Eternel
Qu'est-ce que l'homme, ô Eternel
Que Tu prennes garde à lui ?
Quand je vois le ciel, œuvre de Tes Doigts
La lune et les étoiles que Tu créas`
  },
  {
    number: 96,
    title: "Car Dieu Nous Aime",
    theme: "Action de grâce",
    lyrics: `Car Dieu nous aime, rien n'est secret,
Tous nos problèmes, Il les connaît !
Il nous appelle, les bras ouverts
Pour nous rebelles, Il s'est offert`
  },
  {
    number: 97,
    title: "Quand Je Sombrais",
    theme: "Action de grâce",
    lyrics: `Quand je sombrais dans la boue du péché,
Christ m'a délivré !
Et quand vaincu, j'étais désespéré
Christ m'a délivré !
Quel merveilleux Sauveur j'ai trouvé,
Il m'a délivré !`
  },
  {
    number: 98,
    title: "Illumine La Route",
    theme: "Prière",
    lyrics: `Illumine la route de ceux qui sont révoltés,
délivre-les du doute qu'ils acceptent tes bontés.
Illumine la route de ceux qui sont révoltés,
délivre-les du doute qu'ils acceptent tes bontés.
Donne à celui qui passe la force de Ton amour.
Et qu'en voyant Ta face, Ta paix il découvre un jour.
Donne à celui qui passe la force de Ton amour.
Et qu'en voyant Ta face, Ta paix il découvre un jour.
O Seigneur notre Père, que Ton nom soit glorifié.
Tu es notre lumière en Jésus ressuscité
O Seigneur notre Père, que Ton nom soit glorifié.
Tu es notre lumière en Jésus ressuscité`
  },
  {
    number: 99,
    title: "Jésus, Mon Bien-Aimé",
    theme: "Louange",
    lyrics: `Jésus mon bien-aimé, tout mon trésor,
Tu m'as donné Ton amour et Ta vie!
De tout mon cœur, je T'aime et je T'adore
et tout mon être Te prie !
Alléluia, Alléluia
Agneau de Dieu, digne Seigneur,
Alléluia, Alléluia
Mon âme Te loue ô Seigneur !`
  },
  {
    number: 100,
    title: "Notre Dieu Règne",
    theme: "Foi",
    lyrics: `Notre Dieu règne encore, jamais Son amour ne s'endort!
Le vent se déchaîne, et nos cœurs sont en peine,
mais Dieu nous conduit jusqu'au port!
Notre Dieu règne encore, jamais son amour ne s'endort!
Ce qu'il nous promet reste vrai pour jamais!
Notre Dieu règne encore !`
  },
  {
    number: 101,
    title: "Mon Cœur Est Rempli",
    theme: "Louange",
    lyrics: `Mon cœur est rempli de joie, de bonheur
Mon cœur est rempli, car Jésus a pardonné tous mes péchés,
Et grâce à son sang, il a tout effacé.
Mon cœur est rempli de joie, de bonheur`
  },
  {
    number: 102,
    title: "Je Lève Les Yeux",
    theme: "Foi",
    lyrics: `Je lève les yeux vers les montagnes !
D'où me viendra le secours?
Le secours me vient de l'Eternel
Qui a fait les cieux et la terre`
  },
  {
    number: 103,
    title: "Il Est Un Fleuve",
    theme: "Pentecôte",
    lyrics: `Il est un fleuve coulant du cœur de Dieu
C'est le grand fleuve d'un amour merveilleux !
Je vais y boire, son amour me remplit,
Et sa victoire m'anime de l'Esprit !`
  },
  {
    number: 104,
    title: "J'Entre Dans Tes",
    theme: "Louange",
    lyrics: `J'entre dans Tes portes, J'entre dans Tes parvis.
Avec des louanges, devant Toi me voici
Je reconnais Ta royauté, El Shadaï, Dieu puissant !
J'entre dans Tes portes, J'entre dans Tes parvis.
Avec des louanges, devant Toi me voici`
  },
  {
    number: 105,
    title: "Point De Souffrance",
    theme: "Espérance",
    lyrics: `Point de souffrance amère, dans la maison du père,
que ce sera beau, près du Saint Agneau !
Tout est joie infinie, allégresse, harmonie,
Dans la maison, la maison là-haut !`
  },
  {
    number: 106,
    title: "Toutes Choses",
    theme: "Foi",
    lyrics: `Toutes choses concourent au bien de ceux qui aiment Dieu,
De ceux qui sont appelés selon son dessein !
Toutes choses concourent au bien de ceux qui aiment Dieu
Oui, tout, tout, tout concoure à leur bien !`
  },
  {
    number: 107,
    title: "C'Est Merveilleux",
    theme: "Louange",
    lyrics: `C'est merveilleux ce que Dieu fait,
Tout ce que Dieu dit est grand et vrai !
La foi saisit ce qu'il promet,
C'est merveilleux ce que Dieu fait !`
  },
  {
    number: 108,
    title: "O Jésus, Ta Grâce",
    theme: "Action de grâce",
    lyrics: `O Jésus, ta grâce infinie
A touché mon cœur malheureux,
Et tu as transformés ma vie, Me rendant heureux !
En retour mon Sauveur, je T'aime
Et je chante Ton grand amour !
Qui m'a sauvé de l'enfer même et pour toujours!`
  },
  {
    number: 109,
    title: "Oh Joie Et Paix",
    theme: "Louange",
    lyrics: `Oh joie et paix du cœur, Jésus est mon Sauveur!
Sa croix m'a sauvé de la mort,
Il va me guider jusqu'au port !
Oh joie et paix du cœur, Jésus est mon Sauveur !
toujours, il me rendra vainqueur, Oui, gloire à mon Sauveur !`
  },
  {
    number: 110,
    title: "Jour Après Jour",
    theme: "Foi",
    lyrics: `Jour après jour, gardé par Ton amour,
Jour après jour, à l'abri de Ton aile!
C'est le repos, c'est la vie éternelle,
Je T'appartiens, ô Sauveur, pour toujours!`
  },
  {
    number: 111,
    title: "Je Veux Compter Sur",
    theme: "Foi",
    lyrics: `Je veux compter sur Ta grâce, Seigneur,
pour aller plus loin.
Je veux compter sur Ta face, pour éclairer mon chemin !
O Jésus, prend Ta victoire, toute entière sur mon cœur
Pour que je vive à Ta gloire, Et que je marche en vainqueur`
  },
  {
    number: 112,
    title: "Précieux Jésus",
    theme: "Louange",
    lyrics: `Précieux Jésus, Précieux Jésus
Tout ému devant Ta croix, précieux Jésus,
j'élève mes mains et mon âme à la louange de Ton Nom,
Précieux Jésus, Précieux Jésus.

Tendre Père, Tendre Père
Tu as fait de nous tes enfants, Tendre Père
j'élève mes mains et mon âme à la louange de Ton Nom
Tendre Père, Tendre Père.

Alléluia, Alléluia, Alléluia, Alléluia
J'élève mes mains et mon âme à la louange de Ton Nom,
Alléluia, Alléluia`
  },
  {
    number: 113,
    title: "Adorons Dieu Ensemble",
    theme: "Louange",
    lyrics: `Adorons Dieu ensemble, adorons
Adorons Dieu ensemble, adorons
Fidèle dans toutes Ses voies,
Il est juste dans Son amour,
Son Nom soit élevé pour toujours !`
  },
  {
    number: 114,
    title: "Ah! Qu'Il Est Doux",
    theme: "Communion",
    lyrics: `Ah qu'il est doux pour des frères
De demeurer ensemble
Ah qu'il est doux de demeurer ensemble`
  },
  {
    number: 115,
    title: "Allons Acclamer",
    theme: "Louange",
    lyrics: `Allons acclamer l'Eternel Dieu
Allons célébrer le Rocher de notre Salut
Allons vers Lui, chantons notre Joie.
Allons exalter Son Nom !
Car l'Eternel est un grand Dieu
Car l'Eternel est un grand Dieu
Au-dessus de tous les Dieux
Allons acclamer l'Eternel Dieu
Allons célébrer le Rocher de notre Salut
Allons vers Lui, chantons notre Joie
Allons exalter Son Nom !`
  },
  {
    number: 116,
    title: "Assis Avec Christ",
    theme: "Foi",
    lyrics: `Assis avec Christ dans les lieux célestes
Regardons en bas l'ennemi vaincu
Assis avec Christ dans les lieux célestes
Nous ne craignons rien devant l'ange déchu
Car c'est en Jésus-Christ que nous sommes vainqueurs
Il nous a délivrés de l'oppresseur
Car c'est en Jésus-Christ que nous sommes vainqueurs
Il nous a rachetés, Il est Seigneur !`
  },
  {
    number: 117,
    title: "Avec Dieu Nous Ferons",
    theme: "Foi",
    lyrics: `Avec Dieu, nous ferons des exploits
Car c'est Lui seul qui écrase l'ennemi
Chantons et crions la victoire : Christ est Roi!
Car Dieu a gagné le combat et libéré son peuple.
Sa parole a vaincu l'ennemi,
La terre entière verra qu'avec Dieu, nous ferons des exploits
Car c'est Lui seul qui écrase l'ennemi
Chantons et crions la victoire: Christ est Roi!`
  },
  {
    number: 118,
    title: "Ce Même Jésus",
    theme: "Espérance",
    lyrics: `Ce même Jésus reviendra
Ce même Jésus reviendra
De la même manière que lorsqu'Il s'en alla,
oui! Ce même Jésus reviendra !`
  },
  {
    number: 119,
    title: "C'Est Vers Toi",
    theme: "Louange",
    lyrics: `C'est vers Toi que je me tourne, je veux marcher dans Tes voies
j'élève les mains pour Te rencontrer,
Mon cœur désire Te chanter pour bénir et célébrer Ton Saint Nom
car Tu es fidèle et bon !
Seigneur, ô Seigneur, je veux Te donner
Seigneur, ô Seigneur, ma vie à jamais !
Mes yeux contemplent Ta gloire, Ta vie ranime ma foi
Ta paix et Ta joie inondent mon cœur
Toi seul fait tout mon bonheur je veux proclamer que Tu es celui
qui chaque jour me bénit
Seigneur, ô Seigneur, je veux partager
Seigneur, ô Seigneur, Ton éternité`
  },
  {
    number: 120,
    title: "Goûtez, Voyez",
    theme: "Louange",
    lyrics: `Goutez, voyez combien Dieu est bon
Goutez et voyez combien Dieu est bon
Heureux l'homme qui se réfugie en Lui
Heureux l'homme qui se réfugie en Lui
Goutez, voyez combien Dieu est bon
Goutez et voyez combien Dieu est bon
Il est bon, Il est bon !`
  },
  {
    number: 121,
    title: "En Présence De Ton",
    theme: "Louange",
    lyrics: `En présence de Ton peuple je publie Ton Nom
Tu es Saint et du trône au milieu des louanges d'Israël,
nous proclamons tous ensemble Ta fidélité.
Que Ton nom soit exalté sur la terre et dans le ciel.`
  },
  {
    number: 122,
    title: "J'Ai Confiance",
    theme: "Foi",
    lyrics: `J'ai confiance en mon Seigneur le long du chemin
J'ai confiance en mon Seigneur et Il tient ma main !`
  },
  {
    number: 123,
    title: "Emmanuel",
    theme: "Louange",
    lyrics: `Emmanuel, Emmanuel,
Il s'appelle Emmanuel
Dieu se révèle parmi nous :
Il s'appelle Emmanuel`
  },
  {
    number: 124,
    title: "Je Confesse",
    theme: "Louange",
    lyrics: `Je confesse que Jésus est Seigneur
Je confesse que Jésus est Seigneur
Il est Tout-Puissant, Omnipotent
Et glorieux, victorieux
Je confesse que Jésus-Christ est Seigneur !`
  },
  {
    number: 125,
    title: "Jésus Apprends-Moi",
    theme: "Consécration",
    lyrics: `Jésus, apprends-moi, je T'en prie à vivre selon Ton Esprit
Jésus, apprends-moi, je T'en prie à vaincre selon Ton Esprit.
Seigneur, voici tout mon péché d'hier, d'aujourd'hui, de demain
je ne peux pratiquer le bien merci de m'avoir pardonné.
Seigneur, je ne désire pas laisser le péché vivre en moi
Tu peux me montrer chaque fois ce qui dans mon cœur ne va pas
Seigneur, fais ce que Tu voudras, ma vie maintenant est à Toi,
je veux être prêt au combat en sachant que Tu vis en moi.`
  },
  {
    number: 126,
    title: "Je Suis Revêtu",
    theme: "Foi",
    lyrics: `Je suis revêtu du précieux sang du Seigneur Jésus
et Il vit en moi, vit en moi
Je suis revêtu du précieux sang du Seigneur Jésus
et Il vit en moi, vit en moi`
  },
  {
    number: 127,
    title: "Qui De Nous Entendra ?",
    theme: "Évangélisation",
    lyrics: `Qui de nous entendra la voix du Seigneur?
Qui de nous offrira de donner son cœur?
A Ta croix, à Ta croix, je voudrais aller
Contempler, accepter toute la vérité.
Me voici aujourd'hui, prends-moi tout entier,
Ton amour me conduit pour l'Eternité.
Pour ce monde perdu, pour ces vies gâchées
Seigneur, Tu es venu pour les racheter.`
  },
  {
    number: 128,
    title: "Rendons Gloire À Dieu",
    theme: "Louange",
    lyrics: `Rendons gloire à Dieu notre Père
Bénissons notre Rédempteur
Et que l'Esprit-Saint nous libère
De la tristesse et de la peur.
Que la joie de Dieu nous habite
Que la paix de notre Seigneur ici-bas jamais ne nous quitte
mais qu'elle éclaire notre cœur !`
  },
  {
    number: 129,
    title: "Si Mon Peuple",
    theme: "Repentance",
    lyrics: `Si mon peuple sur qui est invoqué mon Nom
s'humilie, prie et cherche ma face
Si mon peuple sur qui est invoqué mon Nom
se détourne de ses mauvaises voies,
Je l'exaucerai des cieux, j'effacerai son péché
et son pays, je guérirai.`
  },
  {
    number: 130,
    title: "Prends Ma Vie",
    theme: "Consécration",
    lyrics: `Prends ma vie, sers Toi de moi,
Ce que je suis est à Toi
Prends mes mains mon Dieu
Je T'appartiens sers Toi de moi, sers Toi de moi
Prends ma vie, sers toi de moi, me voici.`
  },
  {
    number: 131,
    title: "Viens Adorer",
    theme: "Louange",
    lyrics: `Viens adorer, peuple racheté
Toutes les nations, venez le louer
Adorer Jésus, notre Rédempteur
Il est précieux, Roi de gloire !`
  },
  {
    number: 132,
    title: "Moi, Je Suis Dans La Joie",
    theme: "Louange",
    lyrics: `Moi, je suis dans la joie, quand on me dit:
<< Allons, à la maison de l'Eternel! >>
Moi, je suis dans la joie, quand on me dit:
<< Allons, à la maison de l'Eternel! >>
Là, sont réunis mes frères et mes amis
Tous, tous, tous les gens que j'aime
Ceux qui me comprennent
C'est ici que je suis bien
C'est ici que je suis bien
Moi, je suis dans la joie, quand on me dit:
<< Allons, à la maison de l'Eternel ! >>
Moi, je suis dans la joie, quand on me dit:
<< Allons, à la maison de l'Eternel ! >>`
  },
  {
    number: 133,
    title: "Que J'Aime La Famille",
    theme: "Communion",
    lyrics: `Que j'aime la famille de Dieu
Où tout le monde n'est plus qu'un
Ils m'ont ouvert tout grand leur cœur
Je suis heureux d'être un des leurs
Dans cette famille de Dieu !`
  },
  {
    number: 134,
    title: "Me Voici",
    theme: "Consécration",
    lyrics: `Me voici, je m'abandonne à Toi
Me voici, prêt à Te servir.`
  },
  {
    number: 135,
    title: "Dieu Est Esprit",
    theme: "Louange",
    lyrics: `Dieu est Esprit et il faut que ceux qui l'adorent
l'adorent en Esprit et en vérité
Dieu est Esprit et il faut que ceux qui l'adorent
l'adorent en Esprit et en vérité`
  },
  {
    number: 136,
    title: "Esprit De Dieu Montre",
    theme: "Pentecôte",
    lyrics: `Esprit de Dieu, montre-moi Jésus
Chasse le mal en moi, je veux la vie
Esprit de Dieu, montre-moi Jésus
Et révèle à mon cœur son grand amour.`
  },
  {
    number: 137,
    title: "Qui Est Dieu ?",
    theme: "Louange",
    lyrics: `Qui est Dieu, si ce n'est l'Eternel?
Qui est un rocher, si ce n'est notre Dieu
Qui est Dieu, si ce n'est l'Eternel?
Qui est un rocher, si ce n'est notre Dieu
C'est Lui qui me ceint de force et qui rend parfait mon chemin
Il exerce mes mains au combat
Sa droite me soutient, et je ne crains rien
Qui est Dieu, si ce n'est l'Eternel?
Qui est un rocher, si ce n'est notre Dieu ?`
  },
  {
    number: 138,
    title: "Nous Venons Devant",
    theme: "Louange",
    lyrics: `Nous venons devant le Seigneur glorieux,
célébrer la joie d'un ton victorieux,
car Il vient nous délivrer de l'ennemi
et nous marchons avec Lui.
Il est le Libérateur
Nous tenons fermement l'épée à deux tranchants
et combattons dans l'armée du Dieu Tout-Puissant
Nous prenons possession de notre Canaan
et voulons voir le Seigneur établir Ses plans
Nous venons devant le Seigneur glorieux
célébrer la joie d'un ton victorieux
car Il vient nous délivrer de l'ennemi
et nous marchons avec Lui.
Il est Le Libérateur, Il est Le Libérateur, Libérateur !`
  },
  {
    number: 139,
    title: "Je T'Aime Ô Éternel",
    theme: "Louange",
    lyrics: `Je t'aime ô Eternel, ma force et ma forteresse,
Je t'aime, ô Eternel, Libérateur, mon Dieu,
Mon Rocher, tu es mon bouclier!
Loué soit l'Eternel ! Et je suis délivré
Loué soit l'Eternel! De tous mes ennemis!
Je t'aime, ô Eternel !`
  },
  {
    number: 140,
    title: "Mets Dans Mon Cœur",
    theme: "Prière",
    lyrics: `Mets dans mon cœur, Seigneur, Quelque chose de nouveau
Mets dans mon cœur, Seigneur un renouveau.
Je t'ouvre grand mon cœur`
  },
  {
    number: 145,
    title: "Nous Apportons",
    theme: "Louange",
    lyrics: `Nous apportons dans Ta maison un sacrifice de louange
Nous apportons dans Ta maison un sacrifice d'adoration
et nous élevons vers Toi un sacrifice de reconnaissance
et nous élevons vers Toi un sacrifice de joie.`
  },
  {
    number: 146,
    title: "Dieu Est Bon",
    theme: "Louange",
    lyrics: `Dieu est bon, nous voulons le crier
Dieu est bon, Le célébrer
Dieu est bon, nous voulons le crier
Dieu est bon, oui c'est bien vrai !
Et quand je pense à Son amour pour moi,
mon cœur saute de joie et je veux danser
car dans Son cœur, il y a place pour moi
et j'y cours, les bras grands ouverts!
Dieu est bon, nous voulons le crier
Dieu est bon, Le célébrer.
Dieu est bon, nous voulons le crier
Dieu est bon, oui c'est bien vrai !`
  },
  {
    number: 147,
    title: "Christ Nous A Reçu",
    theme: "Communion",
    lyrics: `Christ nous a reçus, acceptons-nous les uns les autres
Christ nous a reçus, acceptons-nous en Lui
Ensemble et d'un même cœur, glorifions Dieu notre Père
en Jésus, Son Fils, notre Roi
Ensemble et d'un même cœur, glorifions Dieu notre Père
en Jésus, Son Fils, notre Roi
Christ nous a reçus, acceptons-nous les uns les autres,
acceptons-nous en Lui.`
  },
  {
    number: 148,
    title: "Debout, Lève-Toi",
    theme: "Foi",
    lyrics: `Debout, lève-toi, la trompette a sonné
Debout, arme-toi, c'est l'heure du combat
Debout, lève-toi car Dieu est déjà là
Debout, lève-toi, avance et bats-toi
Et la terre peut se réjouir, au jour où l'Eglise ne dort plus,
c'est le temps de`
  },
  {
    number: 149,
    title: "Nous Croyons",
    theme: "Foi",
    lyrics: `Nous croyons en Dieu le Père, créateur de l'univers
et en Christ, Son Fils unique, né de Dieu par l'Esprit Saint.
Nous croyons qu'Il est mort pour nous,
Crucifié pour nos péchés et qu'Il est auprès du Père
car Dieu L'a ressuscité.`,
    refrain: "Jésus, Roi des rois, Roi des rois\nTon Nom est tout-puissant !\n\nNous croyons qu'Il répand sur nous Son Esprit avec Ses dons\nNotre Dieu par Sa Parole nous envoie vers les nations\nIl revient avec puissance pour juger Sa création\nTout genou pliera devant Lui, hommes et femmes confesseront"
  },
  {
    number: 150,
    title: "Oh Viens Et Vois!",
    theme: "Louange",
    lyrics: `Oh! Viens et vois que Dieu est bon
Combien l'homme est béni quand il se cache en Lui.
J'ai cherché Jésus et Il m'a répondu
Lui seul m'a délivré de mes craintes passées.
Je veux Le remercier car Il est bon,
Son grand amour pour moi ne tarira pas
Je veux Le remercier car Il est bon,
Son grand amour pour moi ne tarira pas`
  },
  {
    number: 151,
    title: "Les Cieux Proclament",
    theme: "Pâques",
    lyrics: `Les cieux proclament la gloire du Ressuscité,
rien n'est égal à la beauté du Seigneur.
A jamais Il sera l'Agneau sur le trône,
je fléchis le genou pour L'adorer Lui seul !
Je veux chanter la gloire du Ressuscité
L'Agneau immolé nous a rachetés pour Dieu,
à jamais Tu seras l'Agneau sur le trône,
je fléchis le genou pour T'adorer, Toi seul!`
  },
  {
    number: 152,
    title: "Une Nouvelle Création",
    theme: "Louange",
    lyrics: `Une nouvelle création, plus sous la condamnation,
je vis dans la grâce de Dieu
Mon cœur est débordant, mon amour grandissant.
Je vis dans la grâce de Dieu.
Je veux Te louer Seigneur
Je veux Te louer Seigneur
Je veux chanter tout ce que Tu as fait.
En moi, plus de fardeaux, la joie et le repos,
Je vis dans la grâce de Dieu.`
  },
  {
    number: 153,
    title: "Je Ne Suis Qu'Un Vase",
    theme: "Consécration",
    lyrics: `Je ne suis qu'un vase entre Tes mains,
Vase d'argile que Tu as façonné
Je ne suis qu'un vase entre Tes mains
Vase fragile entre les mains du potier.
Déverse en moi Ton huile sainte,
Déverse en moi Ton huile pure,
Déverse en moi Ton huile sainte
Et que Tu sois toujours glorifié !`
  },
  {
    number: 154,
    title: "L'Amour Est Patient",
    theme: "Divers",
    lyrics: `L'amour est patient, rempli de bonté,
L'amour ne s'enfle jamais d'orgueil
Il n'envie pas et ne se vante pas
Il n'aime pas l'injustice mais la vérité
Et quand tout disparaîtra, l'amour seul demeurera
En un mot, le plus grand don, c'est l'Amour.`
  },
  {
    number: 155,
    title: "Souffle, De Dieu",
    theme: "Pentecôte",
    lyrics: `Souffle, souffle de Dieu, nous t'accueillons,
viens purifier nos cœurs
Oh, souffle, souffle de Dieu, nous t'accueillons
viens purifier nos cœurs.`
  },
  {
    number: 156,
    title: "Je Laisse À Tes Pieds",
    theme: "Prière",
    lyrics: `Je laisse à tes pieds mes fardeaux devant toi,
Je dépose tous mes soucis et chaque fois
que je ne sais pas me diriger
Je laisse à tes pieds mes fardeaux devant toi,
Je dépose tous mes soucis et chaque fois
que je ne sais pas me diriger
J'abandonne à Tes pieds mes fardeaux.`
  },
  {
    number: 157,
    title: "Il Est Exalté",
    theme: "Louange",
    lyrics: `Il est exalté, le Roi est au-dessus des cieux, je veux Le louer
Il est élevé, à jamais exalté et je loue Son Saint Nom.
Il est Seigneur, sa vérité régnera,
Tout l'univers se réjouit dans son amour.
Il est exalté, Le Roi est au-dessus des cieux !`
  },
  {
    number: 158,
    title: "Donne-Moi Seigneur",
    theme: "Prière",
    lyrics: `Donne-moi, Seigneur, d'aimer comme Tu aimes.
Oh! Donne-moi, Seigneur, de voir comme Tu vois.
Donne-moi, Seigneur, de m'oublier moi-même
Et que les autres Te voient, ô Jésus, vivre en moi !`
  },
  {
    number: 159,
    title: "Merci Pour La Croix",
    theme: "Action de grâce",
    lyrics: `Merci pour la croix pour le prix payé
Car Tu T'es donné sans rien retenir
Précieux Jésus, précieux Jésus
Ils sont pardonnés nos nombreux péchés
Couverts par ton sang, ils sont oubliés
Merci Jesus, merci Jésus !`,
    refrain: "A Toi mon amour, tout mon cœur, Seigneur.\nJe ne comprendrais jamais pourquoi Tu m'aimes.\nTu es mon bonheur, ma suprême joie.\nMais voici le plus grand miracle à mes yeux:\nC'est que je fais ta joie!\n\nC'est pour nous guérir que Tu as souffert\nTu as pris nos peurs, donné Ton amour\nPrécieux Jésus, précieux Jésus\nTout est accompli, Tu as triomphé\nTu peux nous sauver si parfaitement\nMerci Jésus, merci Jésus !"
  },
  {
    number: 160,
    title: "Seigneur Par La Clarté",
    theme: "Prière",
    lyrics: `Seigneur, par la clarté de Ton amour
Chasse l'obscurité qui nous entoure,
Jésus, Toi la lumière qui nous éclaire,
Vérité qui nous guide et qui nous libère
Brille sur moi, brille sur moi !`,
    refrain: "Brille, ô Jésus, couvre ce pays de Ta gloire\nBrule, ô Esprit Saint, embrase nos cœurs,\nCoule en torrent de Ta grâce, remplis les nations\nParle, Seigneur, que la lumière soit !\n\nSeigneur, Tu me conduis dans Ta présence\nDans la nuit, dans l'éclat de ta puissance\nPar Ton sang, je prends part à Ta sainteté\nSonde-moi, mes ténèbres, consumes-les\nBrille sur moi, brille sur moi !\n\nEt quand nous contemplons Ta royauté\nNos visages reflètent Ta beauté\nEt, transformés sans cesse de gloire en gloire\nQue sans fin notre vie dise Ton histoire,\nBrille sur moi, brille sur moi !"
  },
  {
    number: 161,
    title: "J'Ai Soif De Ta Présence",
    theme: "Prière",
    lyrics: `J'ai soif de Ta présence, divin chef de ma foi
Dans ma faiblesse immense que ferai-je sans Toi ?`,
    refrain: "Chaque jour à chaque heure, oh! j'ai besoin de Toi,\nViens Jésus et demeure auprès de moi.\n\nDes ennemis dans l'ombre rodent autour,\nAccablés par le nombre, que ferais-je sans Toi ?\n\nPendant les jours d'orages, d'obscurités, d'effroi\nQuand faiblit mon courage, que ferais-je sans Toi ?\n\nO Jésus Ta présence, c'est la vie et la paix,\nLa paix dans la souffrance et la vie à jamais."
  },
  {
    number: 162,
    title: "Pour Cet Immense",
    theme: "Action de grâce",
    lyrics: `Pour cet immense bonheur, alléluia
Que Tu as mis dans mon cœur, alléluia
Je veux Te chanter, Seigneur, alléluia
Oui, Jésus est mon Sauveur, alléluia !
Je le redirai encore, alléluia
Que pour moi, Jésus est mort, alléluia
Voilà pourquoi je l'adore, alléluia
Lui seul est tout mon trésor, alléluia !
Que chaque jour, à chaque heure, alléluia
En moi, tu aies Ta demeure, alléluia
Que ma vie soit une fleur, alléluia
Un parfum pour Toi, Seigneur, alléluia !`
  },
  {
    number: 163,
    title: "Nous Venons Dans Ta",
    theme: "Louange",
    lyrics: `Nous venons dans Ta maison et nous nous assemblons
pour t'adorer Jésus, T'adorer, Te louer, Seigneur !
Tu nous donnes ta justice et Tu nous affranchis
pour t'adorer Jésus, T'adorer, Te louer, Seigneur !
Nous levons nos mains vers Toi et nous te contemplons
pour T'adorer Jésus, T'adorer, Te louer, Seigneur !`
  },
  {
    number: 164,
    title: "J'Aime L'Éternel",
    theme: "Louange",
    lyrics: `J'aime l'Eternel car Il entend ma voix
Il a penché vers moi Son oreille
Et je L'exalterai toute ma vie
Oui, comment rendrais-je à l'Eternel
Ses bienfaits envers moi,
Oui, comment rendrais-je à l'Eternel
Ses bienfaits envers moi,
Je veux aimer comme Il a aimé
Donner ma vie pour mes frères,
Je veux marcher comme Il a marché
Vivre dans Sa lumière !
Je veux aimer comme Il a aimé
Donner ma vie pour mes frères,
Je veux marcher comme Il a marché
Vivre dans Sa lumière !`
  },
  {
    number: 165,
    title: "L'Éternel Me Conduit",
    theme: "Foi",
    lyrics: `L'Eternel me conduit vers des sentiers nouveaux
Il me fait reposer dans de verts pâturages`,
    refrain: "Car Il est merveilleux, Il est si merveilleux\nC'est Lui mon berger\nJe L'aime et je veux Le servir\nCar Il est merveilleux c'est Lui qui me remplit\nde joie tous les jours de ma vie !\n\nL'Eternel me conduit vers de paisibles eaux.\nIl restaure mon âme à cause de Son Nom.\n\nEt si je dois marcher dans la sombre vallée.\nJe ne crains aucun mal car Tu es avec moi."
  },
  {
    number: 166,
    title: "Rends Grâce D'Un",
    theme: "Action de grâce",
    lyrics: `Rends grâce d'un cœur reconnaissant,
Rends grâce au Seigneur saint saint saint,
rends grâce car Il nous nous a donné Jésus-Christ, Son Fils
Rends grâce d'un cœur reconnaissant,
Rends grâce au Seigneur saint saint saint,
rends grâce car Il nous nous a donné Jésus-Christ, Son Fils
Maintenant le faible dit : « je suis fort >>>
Le pauvre dit : « je suis riche,
Dieu a fait de grande choses pour moi >>>
Rends grâce !`
  },
  {
    number: 167,
    title: "Louez L'Éternel",
    theme: "Louange",
    lyrics: `Louez l'Eternel, Le Dieu très Haut
Le Grand Dieu de l'éternité
Le Créateur de l'univers Louez Son Nom à jamais
Le Créateur de l'univers Louez Son Nom à jamais`
  },
  {
    number: 168,
    title: "Jésus Et Moi",
    theme: "Foi",
    lyrics: `Jésus et moi nous cheminons ensemble
jour après jour, Il m'ouvre le chemin.
Jésus et moi nous cheminons ensemble
jour après jour, Il m'ouvre le chemin.
Je Le suivrai j'irai où bon Lui semble
je n'ai pas peur je sais qu'Il me tient ma main.
Je Le suivrai j'irai où bon Lui semble
je n'ai pas peur je sais qu'Il me tient ma main.
Jésus et moi nous cheminons ensemble
quand tout est sombre Il sait guider mes pas
Jésus et moi nous cheminons ensemble
quand tout est sombre Il sait guider mes pas
Je suis en paix je n'ai plus rien à craindre
dans le danger je sais qu'Il tient ma main
Je suis en paix je n'ai plus rien à craindre
dans le danger je sais qu'Il tient ma main`
  },
  {
    number: 169,
    title: "Mon Dieu Est Si Grand",
    theme: "Louange",
    lyrics: `Mon Dieu est si grand, si fort et si puissant.
Rien n'est impossible à mon Dieu
Les monts sont à Lui
Les mers sont à Lui
Les cieux sont Sa création
Mon Dieu est si grand si fort et si puissant.
Rien n'est impossible à mon Dieu
Mon Dieu est si bon, si tendre et si aimant
Rien n'est comparable a mon Dieu.
Il m'a tant aimé
Il m'a tout donné,
Je veux Le remercier
Mon Dieu est si bon, si tendre et si aimant,
Rien n'est comparable à mon Dieu.`
  }
];
