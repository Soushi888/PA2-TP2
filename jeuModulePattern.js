let jeuModulePattern = function () {
	
	// déclarer les variables du module
	// ce sont les variables communes à plusieurs des 3 fonctions du module pattern

	let compteurClique = 0;
	let eTr;
	let eTd;
	let randomY;
	let randomX;

	let oCibleDansGrille = {
		

		// fonction au chargement de la page
		// =================================

		initialiserPage : function () {

			// initialisation de la page, à compléter :
			// Bouton Nouveau Jeu
			let eNouveauJeu = document.getElementById("nouveauJeu");

			// Champs Nombres lignes et colonnes. Réinitialisation à 10 quand on rafraichie la page.
			let eNbLignes = document.getElementById("nbLignes");
			eNbLignes.value = 10;
			let eNbColonnes = document.getElementById("nbColonnes");
			eNbColonnes.value = 10;

			// - variables (eGrille, eNbCoups) des éléments du DOM utilisés dans le module
			let eGrille = document.getElementById("grille");

			// - initialiser le jeu lorsque l'utilisateur clique sur le bouton Nouveau Jeu
			eNouveauJeu.addEventListener("click", this.initialiserJeu);
		},
		

		// fonction d'initialisation d'un nouveau jeu
		// ==========================================

		initialiserJeu : function () {
			console.log("Test initialiserJeu");
			
			
			// Initialisation du contenu du span nbCoups (valeur à 0)
			document.getElementById("nbCoups").innerHTML = compteurClique
			// Création de la grille avec le nombre de lignes et de colonnes du formulaire
			let nbLignes = eNbLignes.value;
			let nbColonnes = eNbColonnes.value;

			// - générer de manière aléatoire, la case cible à découvrir dans cette grille
			// - ajouter le gestionnaire d'évènement pour gérer les clics sur les cases de la grille
		},


		// fonction de traitement d'un clic sur une case
		// =============================================

		jouer :	function (evt) {
	
			// gestion d'un clic sur une case (filtrer les noeuds TD non déjà cliqués), à compléter :
			// - incrémenter le nombre de coups joués
			// - indiquer dans la case l'écart maximum (de lignes ou de colonnes) par rapport à la cible
			//   exploiter pour cela les coordonnées de la case 
			//   (attribut data-c du <td> pour le numéro de colonne et data-l du <tr> pour le numéro de ligne)
			// - si la cible est atteinte, empêcher tout nouveau clic
		}
	}
	
	return oCibleDansGrille;
} ();