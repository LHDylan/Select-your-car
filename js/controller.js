var Json = {

    /**
     * Function qui permet d'instancier les objects contenus dans color.js et voiture.js
     */
    setVoiture: function (type, image) {
        this.type = type;
        this.image = image;
    },
    setColor: function (color) {
        this.color = color;
    },

    /**
     * Function qui permet de créer le formulaire
     */
    createForm: function () {
        var formContainer = document.getElementById("form-container");
        // console.log(formContainer);

        // Création du form
        var form = document.createElement("form");
        form.setAttribute("id", "form");


        // Création du label pour le selecteur de type de voiture
        var typeLabel = document.createElement("label");
        // <label></label>
        typeLabel.setAttribute("for", "type-select");
        // <label for="type-select"></label>

        // création du selecteur du type
        var typeSelect = document.createElement("select");
        typeSelect.setAttribute("id","type-select");
        var typePlaceholder = document.createElement("option");
        typePlaceholder.setAttribute("value", "");
        typePlaceholder.setAttribute("selected", "selected");
        typePlaceholder.setAttribute("disabled", "disabled");
        typeSelect.appendChild(typePlaceholder).innerHTML = "Choisissez un type de voiture";

        for(var i=0; i<voitureList.length; i++){
            var typeOption = document.createElement("option");
            typeOption.setAttribute("value", voitureList[i].type);
            // console.log(voitureList[i].type);
            typeSelect.appendChild(typeOption).innerHTML = voitureList[i].type;
        }

        // Création du label pour le selecteur de couleur
        var colorLabel = document.createElement("label");
        colorLabel.setAttribute("for", "color-select");

        // création du selecteur de couleur
        var colorSelect = document.createElement("select");
        colorSelect.setAttribute("id","color-select");
        var colorPlaceholder = document.createElement("option");
        colorPlaceholder.setAttribute("value", "");
        colorPlaceholder.setAttribute("selected", "selected");
        colorPlaceholder.setAttribute("disabled", "disabled");
        colorSelect.appendChild(colorPlaceholder).innerHTML = "Choisissez la couleur de voiture";
        
        for(var i=0; i<colorList.length; i++){
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


        // Ajout des éléments au form
            form.appendChild(typeLabel);
            form.appendChild(typeSelect);
            form.appendChild(colorLabel);
            form.appendChild(colorSelect);
            form.appendChild(resetButton);
            form.appendChild(submitButton);

        // Ajout du form au formContainer qui représente la div id#form-container
            formContainer.appendChild(form);
    }

    // Function qui reçoit les données du formulaire
        //-- le code --//
}