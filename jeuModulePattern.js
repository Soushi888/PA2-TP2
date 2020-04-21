let jeuModulePattern = (function () {
  // déclarer les variables du module
  // ce sont les variables communes à plusieurs des 3 fonctions du module pattern

  let compteurEssaies = 0;
  let randomY;
  let randomX;
  let caseCherche;

  let oCibleDansGrille = {
    // fonction au chargement de la page
    // =================================

    initialiserPage: function () {
      // initialisation de la page, à compléter :
      // Bouton Nouveau Jeu
      let eNouveauJeu = document.getElementById("nouveauJeu");

      // Champs Nombres lignes et colonnes. Réinitialisation à 10 quand on rafraichie la page.
      let eNbLignes = document.getElementById("nbLignes");
      eNbLignes.value = 10;
      let eNbColonnes = document.getElementById("nbColonnes");
      eNbColonnes.value = 10;

      // - initialiser le jeu lorsque l'utilisateur clique sur le bouton Nouveau Jeu
      eNouveauJeu.addEventListener("click", this.initialiserJeu);
    },

    // fonction d'initialisation d'un nouveau jeu
    // ==========================================

    initialiserJeu: function () {
      // Initialisation du contenu du span nbCoups (valeur à 0)
      document.getElementById("nbCoups").innerHTML = compteurEssaies;
      // Création de la grille avec le nombre de lignes et de colonnes du formulaire
      let nbLignes = document.getElementById("nbLignes").value;
      let nbColonnes = document.getElementById("nbColonnes").value;

      let eGrille = document.getElementById("grille");
      eGrille.innerHTML = ""; // Réinitialise la grille à chaque fois

      for (let i = 0; i < nbLignes; i++) {
        eTr = document.createElement("tr");

        eGrille.appendChild(eTr);
        for (let j = 0; j < nbColonnes; j++) {
          eTd = document.createElement("td");

          eTr.appendChild(eTd).setAttribute("data-c", [j + 1]);
          eTr.appendChild(eTd).setAttribute("data-l", [i + 1]);

          // ajouter le gestionnaire d'évènement pour gérer les clics sur les cases de la grille
          eTd.addEventListener("click", function (evt) {
            oCibleDansGrille.jouer(evt);
            return;
          });
        }
      }

      console.log("Nombre de lignes = " + nbLignes);
      console.log("Nombre de colonnes = " + nbColonnes);

      // générer de manière aléatoire, la case cible à découvrir dans cette grille
      randomY = Math.floor(Math.random() * nbLignes);
      randomX = Math.floor(Math.random() * nbColonnes);

      caseCherche = randomX + 1 + "," + (randomY + 1);

      console.log("coordonnée de la case à trouver : " + caseCherche);
    },

    // fonction de traitement d'un clic sur une case

    jouer: function (evt) {
      caseCliquee = evt.target.dataset.c + "," + evt.target.dataset.l;
      console.log(caseCliquee);

      document.getElementById("nbCoups").innerHTML = compteurEssaies;

      if (caseCliquee == caseCherche) {
        evt.target.classList = "ok";
        evt.target.innerHTML = "0";
        window.alert("Boom, tu es mort, bravo ! Ça t'a prit " + compteurEssaies + " essai(s)" + " avant d'exploser !");
      } else {
        evt.target.classList = "ko";

        let distanceX = evt.target.dataset.c - randomX;
        let distanceY = evt.target.dataset.l - randomY;

        if (distanceX < distanceY && distanceX !== 0) {
          evt.target.innerHTML = Math.abs(distanceX);
        } else if (distanceX < distanceY && distanceX !== 0) {
          evt.target.innerHTML = Math.abs(distanceY);
        }

        compteurEssaies++;
      }
      // gestion d'un clic sur une case (filtrer les noeuds TD non déjà cliqués), à compléter :
      // - incrémenter le nombre de coups joués
      // - indiquer dans la case l'écart maximum (de lignes ou de colonnes) par rapport à la cible
      //   exploiter pour cela les coordonnées de la case
      //   (attribut data-c du <td> pour le numéro de colonne et data-l du <tr> pour le numéro de ligne)
      // - si la cible est atteinte, empêcher tout nouveau clic
    },
  };

  return oCibleDansGrille;
})();
