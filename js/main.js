window.onload = function () {

    /**
     * On instancie l'object Json depuis le controller.js
     * Appel de la function createForm
     */
    form = Object.create(Json);
    form.formContainer = document.getElementById('form-container');
    form.resultContainer = document.getElementById('result-container');
    form.createForm();
    //form.createVoiture();

};

/**
 * id, class = kebab-case
 * function() = camelCase
 * Class = PascalCase (import Scanner from "java.util.Scanner")
 * name = snake_case
 */