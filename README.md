# E-GamePlat
Une plateforme permettant de jouer en ligne à une sélection de jeux, directement depuis son navigateur

*** PLANNEUR ***

==========
Pré-requis
==========

# A faire No code:
-Faire fonctionner le project sur Docker
-Crée un modèle/maquette du projet sur sigma !!! (je pense important)

![](./Assets/E-GamePlat.gif)

# A faire:
-Crée une base de donnée utilisateur
-Demander de se connecter si l'utilisateur n'est pas connecté
-Rédiriger vers l'accueil

=======
Accueil
=======

# Fait :
-Afficher les rooms crées public
-Pouvoir créer une room

# A faire:
-Pouvoir rejoindre une room

=====
Lobby
=====

# A faire:
-Crée une room / et generer un code de room
-Rendre la room privée (public par défault)
-Communiquer avec les joueurs présents
-Sélection un JEU (un "jeu" par défault)
-Afficher les paramètres du jeu choisis
-Valider son status (Prêt a jouer)

==============
GAME (EpiQuizz)
==============

# Condition
- 2-8 joueurs (peut-être plus tard on verras si on décide d'augmenter le nombre de joueur maximun)

# Paramètre
- Choix du quizz sous forme de Json

# A faire:
- Récupèrer les questions depuis le Json choisi en paramètre
- Déterminer le temps et les points que la question rapporte (noté dans le json je pense)
- Création de l'écran de fin avec les scores de tout les joueurs

==============
GAME (Yannouf)
==============

# Condition
- 3 joueurs (Ni plus ni Moins)

# A Prévoir avant si déter mdr:
- Units Test

# A faire:
-Crée un jeu de carte
-Distribuer les cartes au joueurs
-Déterminer aléatoirement le premier joueur
- ### detailler les reglès du jeu ###