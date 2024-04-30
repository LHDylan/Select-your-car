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
            //-- le code --//

        // création du selecteur du type
            //-- le code --//

        // Création du label pour le selecteur de couleur
            //-- le code --//

        // création du selecteur de couleur
        var colorSelect = document.createElement("select");
        colorSelect.setAttribute("id","color-select");
        
        for(var i=0; i<colorList.length; i++){
            console.log(colorList[i]);
            // crée les options
        }

        // Création du button pour envoyer le formulaire
            //-- le code --//

        // Ajout des éléments au form
            //-- le code --//

        // Ajout du form au formContainer qui représente la div id#form-container
            //-- le code --//
    }

    // Function qui reçoit les données du formulaire
        //-- le code --//
}