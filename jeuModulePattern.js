let jeuModulePattern = (function () {
  // déclarer les variables du module
  // ce sont les variables communes à plusieurs des 3 fonctions du module pattern

  let compteurEssaies;
  let randomY;
  let randomX;
  let lignes = [];
  let colonnes = [];
  let caseCherche;

  let oCibleDansGrille = {
    // fonction au chargement de la page
    // =================================

    initialiserPage: function () {
      // initialisation de la page, à compléter :
      // Bouton Nouveau Jeu
      let eNouveauJeu = document.getElementById("nouveauJeu");

      // Réinitialise la grille à chaque fois
      let eGrille = document.getElementById("grille");
      eGrille.innerHTML = "";

      compteurEssaies = "";
      document.getElementById("nbCoups").innerHTML = compteurEssaies;

      // initialiser le jeu lorsque l'utilisateur clique sur le bouton Nouveau Jeu
      eNouveauJeu.addEventListener("click", this.initialiserJeu);
    },

    // fonction d'initialisation d'un nouveau jeu
    initialiserJeu: function () {
      // Initialisation du contenu du span nbCoups (valeur à 0)
      compteurEssaies = 0;
      document.getElementById("nbCoups").innerHTML = compteurEssaies;
      // Création de la grille avec le nombre de lignes et de colonnes du formulaire
      let nbLignes = document.getElementById("nbLignes").value;
      let nbColonnes = document.getElementById("nbColonnes").value;

      // Réinitialise la grille à chaque fois
      let eGrille = document.getElementById("grille");
      eGrille.innerHTML = "";

      eGrille.addEventListener("contextmenu", function (evt) {
        evt.preventDefault();
      });

      if (nbLignes >= 2 && nbColonnes >= 2) {
        for (let i = 0; i < nbLignes; i++) {
          eTr = document.createElement("tr");

          lignes[i] = eGrille.appendChild(eTr);
          for (let j = 0; j < nbColonnes; j++) {
            eTd = document.createElement("td");

            colonnes[j] = eTr.appendChild(eTd);

            colonnes[j].setAttribute("data-c", [j + 1]);
            colonnes[j].setAttribute("data-l", [i + 1]);

            colonnes[j].addEventListener("click", function (evt) {
              oCibleDansGrille.jouer(evt);
            });
          }
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

      if (caseCliquee == caseCherche) {
        evt.target.classList = "ok";
        evt.target.innerHTML = "0";
        window.alert(
          "Boom, tu es mort, bravo ! Ça t'a prit " +
            compteurEssaies +
            " essai(s)" +
            " avant d'exploser !"
        );
        requestAnimationFrame(this.initialiserPage);
      } else {
        evt.target.classList = "ko";
        compteurEssaies++;

        cliqueX = evt.target.dataset.c;
        cliqueY = evt.target.dataset.l;

        evt.target.innerHTML = Math.abs(
          Math.floor(Math.hypot(randomX - cliqueX, randomY - cliqueY))
        );

        document.getElementById("nbCoups").innerHTML = compteurEssaies;
      }
    },
  };

  return oCibleDansGrille;
})();
