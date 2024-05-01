var Json = {
  formContainer: null,
  resultContainer: null,

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
    form.append(typeLabel, typeSelect, colorLabel, colorSelect, resetButton, submitButton);

    // Ajout du form au formContainer qui représente la div id#form-container
    this.formContainer.appendChild(form);
  },


  // Function qui reçoit les données du formulaire
  createVoiture: function () {
    typeValue = document.getElementById("type-select").value;
    colorValue = document.getElementById("color-select").value;
    if (typeValue && colorValue) {

      console.log(typeValue, colorValue);
      var voiture = document.createElement("img");
      voiture.setAttribute("src", "images/voitures/" + typeValue + "-"  + colorValue + '.png');
      voiture.setAttribute("id", typeValue + "-" + colorValue);
      voiture.setAttribute("alt", typeValue + "-" + colorValue);
      // voiture.setAttribute("style", "background-color: " + colorValue + ";");
      form.resultContainer.appendChild(voiture);

    } else {
      alert("Veuillez choisir un type et une couleur");
    }
  },
};