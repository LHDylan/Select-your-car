var Json = {
  formContainer: null,
  resultContainer: null,
  raceContainer: null,
  raceCars: [],
  /**
   * Function qui permet d'instancier les objects contenus dans color.js et voiture.js
   */

  setVoiture: function (type, image, description) {
    this.type = type;
    this.image = image;
    this.image = description;
  },
  setColor: function (color) {
    this.color = color;
  },
  /**
   * Function qui permet de créer le formulaire
   */
  createForm: function () {
    // Création du form
    var form = document.createElement("form");
    form.setAttribute("id", "form");

    // Création du label pour le selecteur de type de voiture
    var typeLabel = document.createElement("label");
    typeLabel.setAttribute("for", "type-select");
    typeLabel.innerHTML = "Choisissez un type de voiture";

    // création du selecteur du type
    var typeSelect = document.createElement("select");
    typeSelect.setAttribute("id", "type-select");
    var typePlaceholder = document.createElement("option");
    typePlaceholder.setAttribute("value", "");
    typePlaceholder.setAttribute("selected", "selected");
    typePlaceholder.setAttribute("disabled", "disabled");
    typeSelect.appendChild(typePlaceholder).innerHTML = "-- le type --";

    for (var i = 0; i < voitureList.length; i++) {
      var typeOption = document.createElement("option");
      typeOption.setAttribute("value", voitureList[i].type);
      // console.log(voitureList[i].type);
      typeSelect.appendChild(typeOption).innerHTML = voitureList[i].type;
    }

    // Création du label pour le selecteur de couleur
    var colorLabel = document.createElement("label");
    colorLabel.setAttribute("for", "color-select");
    colorLabel.innerHTML = "Choisissez une couleur de voiture";

    // création du selecteur de couleur
    var colorSelect = document.createElement("select");
    colorSelect.setAttribute("id", "color-select");
    var colorPlaceholder = document.createElement("option");
    colorPlaceholder.setAttribute("value", "");
    colorPlaceholder.setAttribute("selected", "selected");
    colorPlaceholder.setAttribute("disabled", "disabled");
    colorSelect.appendChild(colorPlaceholder).innerHTML = "-- la couleur --";

    for (var i = 0; i < colorList.length; i++) {
      var colorOption = document.createElement("option");
      colorOption.setAttribute("value", colorList[i].color);
      // console.log(voitureList[i].color);
      colorSelect.appendChild(colorOption).innerHTML = colorList[i].color;
    }

    // Création du label pour la vitesse de la voiture
    var speedLabel = document.createElement("label");
    speedLabel.setAttribute("for", "speed-select");
    speedLabel.innerHTML = "Choisissez la vitesse de la voiture";

    // création d'un input range pour la vitesse de la voiture
    var speedSelect = document.createElement("input");
    speedSelect.setAttribute("id", "speed-select");
    speedSelect.setAttribute("oninput", "result.value = this.value");
    speedSelect.setAttribute("type", "range");
    speedSelect.setAttribute("min", "1");
    speedSelect.setAttribute("max", "50");
    speedSelect.setAttribute("step", "1");

    // Création d'un output pour la vitesse de la voiture
    var speedOutput = document.createElement("output");
    speedOutput.setAttribute("for", "speed-select");
    speedOutput.setAttribute("name", "result");

    // Création du button pour annuler le formulaire
    var resetButton = document.createElement("input");
    resetButton.setAttribute("type", "reset");
    resetButton.setAttribute("value", "Annuler");

    // Création du button pour envoyer le formulaire
    var submitButton = document.createElement("input");
    submitButton.setAttribute("type", "button");
    submitButton.setAttribute("value", "Envoyer");
    submitButton.addEventListener("click", this.createVoiture);

    // Ajout des éléments au form
    form.append(
      typeLabel,
      typeSelect,
      colorLabel,
      colorSelect,
      speedLabel,
      speedSelect,
      speedOutput,
      resetButton,
      submitButton
    );

    // Ajout du form au formContainer qui représente la div id#form-container
    this.formContainer.appendChild(form);
  },

  // Function qui reçoit les données du formulaire
  createVoiture: function () {
    typeValue = document.getElementById("type-select").value;
    colorValue = document.getElementById("color-select").value;
    speedValue = document.getElementById("speed-select").value;
    if (typeValue && colorValue && speedValue) {
      // console.log(typeValue, colorValue);
      var voiture = document.createElement("img");
      voiture.setAttribute("src", "images/voitures/" + typeValue + "-" + colorValue + ".png");
      voiture.setAttribute("id", typeValue + "-" + colorValue);
      voiture.setAttribute("alt", typeValue + "-" + colorValue);
      if (app.raceCars.length > 3) {
        alert("Vous avez atteint le nombre maximum de voitures");
        document.getElementById("container").style.display = "none";
        app.createRace();
      }
      app.resultContainer.appendChild(voiture);
      app.createRaceCars(typeValue, colorValue, speedValue);
    } else {
      alert("Veuillez choisir un type, une couleur et une vitesse");
    }
  },

  createRaceCars: function (typeValue, colorValue, speedValue) {
    var newVoiture = Object.create(voiture);
    newVoiture.type = typeValue;
    newVoiture.image = "images/voitures/" + typeValue + "-" + colorValue + ".png";
    newVoiture.color = colorValue;
    newVoiture.speed = speedValue;
    this.raceCars.push(newVoiture);
    // console.log(this.raceCars);
  },

  createRace: function () {
    raceContainer = document.getElementById("race-container");
    this.raceContainer.style.display = "block";
    document.getElementsByTagName("body")[0].style.width = "3770px";

    // Création d'une div pour les fonctionnalités de la course
    var RaceButtons = document.createElement("div");
    RaceButtons.setAttribute("id", "race-buttons");
    
      // Bouton pour commencer la course
      var buttonRaceStart = document.createElement("button");
      buttonRaceStart.setAttribute("type", "button");
      buttonRaceStart.innerHTML = "Start";

      // Bouton pour arreter la course
      var buttonRaceStop = document.createElement("button");
      buttonRaceStop.setAttribute("type", "button");
      buttonRaceStop.innerHTML = "Stop";

    // Ajout des boutons au div#race-buttons
    RaceButtons.append(buttonRaceStart, buttonRaceStop);

    // Gestion de la course
    var RaceCourse = document.createElement("div");
    RaceCourse.setAttribute("id", "race-course");

    // Ajout des images de voitures à la div#race-course
    for (var i = 0; i < this.raceCars.length; i++) {
      console.log(this.raceCars[i]);
      var raceCar = document.createElement("img");
      raceCar.setAttribute("src", "images/voitures/" + this.raceCars[i].type + "-" + this.raceCars[i].color + ".png");
      raceCar.setAttribute("id", this.raceCars[i].type + "-" + this.raceCars[i].color);
      raceCar.setAttribute("alt", this.raceCars[i].type + "-" + this.raceCars[i].color);
      raceCar.style.marginTop = i * 110 + "px";
      RaceCourse.append(raceCar);
    }

    // Ajout des divs à la div#race-container
    this.raceContainer.append(RaceButtons, RaceCourse);
  }


  
};
