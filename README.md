# Test App Sii

[Link on App](http://app-sii-test.193b.starter-ca-central-1.openshiftapps.com/)

To run the app in the development mode on your local machine, follow these steps:

- Clone the repo: `git clone https://github.com/Artod/sii-test.git`
- Go into the folder: `cd sii-test`
- Install dependencies for the front-end app: `npm install`
- Start it: `npm start`
- Go into the folder: `cd sii-test/server`
- Install dependencies for the server-side app: `npm install`
- Start it: `npm start`
- Open http://localhost:3000/ in your browser

## Règles

Vous pouvez utiliser le langage de programmation que vous souhaitez (Javascript, PHP, SASS/LESS, ASP ...) ainsi que n'importe quelles librairies/Framework/StarterKit (Angular, Symfony, Bootstrap, Yeoman ...)
Lorsque le challenge est complété, simplement nous renvoyer un mail en nous indiquant comment accéder à la solution (lien GitHub, Bitbucket, archive zip ...)
N'oubliez pas de répondre aux questions et de nous fournir les instructions d'installation/exécution.

### Partie 1: Requis
Utiliser l'API Twitter pour créer une page web contenant deux colonnes, affichant les 10 derniers tweets, respectivement de @LP_LaPresse et @CanadiensMTL. Vous êtes libre pour ce qui est du design de la page.
Pour chaque colonne afficher dans l’entête :
- image, nom du compte
- description du compte
- liens vers la page du compte
Pour chaque tweet :
- le contenu du tweet
- la date de création
- un lien vers le tweet (sur le site de Twitter)

### Part 2: Requis additionnels
Permettre d'afficher plus de tweets pour une colonne, en ajoutant par exemple un bouton 'Load More' ou en laissant le choix  à l'utilisateur du nombre de tweet à afficher 20, 30, 50 ... ou toutes autres solutions de votre choix.

### Part 3: Requis optionnel
Si jamais vous avez un peu plus de temps et voulez aller plus loin, vous pouvez par exemple:
- Créer un design responsive s'adaptant sur Tablet et Mobile.
- Ajouter un système de pagination.
- Permettre à l'utilisateur d'ajouter de nouvelles colonnes pour de nouveaux comptes.
- Ou encore ajouter toutes autres fonctionnalités que vous jugez pertinentes.
