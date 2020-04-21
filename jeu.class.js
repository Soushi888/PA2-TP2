class Jeu {
  compteurEssaies;
  randomY;
  randomX;
  caseCherche;

  // initialisation de la page
  constructor() {
    // Bouton Nouveau Jeu
    let eNouveauJeu = document.getElementById("nouveauJeu");

    // Réinitialise la grille à chaque fois
    let eGrille = document.getElementById("grille");
    eGrille.innerHTML = "";

    this.compteurEssaies = "";
    document.getElementById("nbCoups").innerHTML = this.compteurEssaies;

    // initialiser le jeu lorsque l'utilisateur clique sur le bouton Nouveau Jeu
    eNouveauJeu.addEventListener("click", this.initialiserJeu);
  }

  // methode d'initialisation d'un nouveau jeu
  initialiserJeu() {
    // Initialisation du contenu du span nbCoups (valeur à 0)
    this.compteurEssaies = 0;
    document.getElementById("nbCoups").innerHTML = this.compteurEssaies;
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
        let eTr = document.createElement("tr");

        let lignes = [];
        lignes[i] = eGrille.appendChild(eTr);
        for (let j = 0; j < nbColonnes; j++) {
          let eTd = document.createElement("td");

          let colonnes = [];
          colonnes[j] = eTr.appendChild(eTd);

          colonnes[j].setAttribute("data-c", [j + 1]);
          colonnes[j].setAttribute("data-l", [i + 1]);

          colonnes[j].addEventListener("click", (evt) => {
            this.jouer(evt);
          });
        }
      }
    }

    console.log("Nombre de lignes = " + nbLignes);
    console.log("Nombre de colonnes = " + nbColonnes);

    // générer de manière aléatoire, la case cible à découvrir dans cette grille
    this.randomY = Math.floor(Math.random() * nbLignes);
    this.randomX = Math.floor(Math.random() * nbColonnes);

    this.caseCherche = this.randomX + 1 + "," + (this.randomY + 1);

    console.log("coordonnée de la case à trouver : " + this.caseCherche);
  }

  // Gestion des coups joués par le joueur
  jouer(evt) {
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
      requestAnimationFrame(this.constructor);
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
  }
}
