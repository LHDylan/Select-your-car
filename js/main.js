window.onload = function () {
	/**
	 * On instancie l'object Json depuis le controller.js
	 * Appel de la function createForm
	 */
	app = Object.create(Json);
	app.formContainer = document.getElementById("form-container");
	app.resultContainer = document.getElementById("result-container");
	app.raceContainer = document.getElementById("race-container");
	app.raceCourse = document.getElementById("race-course");
	app.createForm();
	if (app.raceCars.length > 2) {
		app.createRace();
	}
};

/**
 * id, class = kebab-case
 * function() = camelCase
 * Class = PascalCase (import Scanner from "java.util.Scanner")
 * name = snake_case
 */
