var Json = {
	formContainer: null,
	resultContainer: null,
	raceContainer: null,
	raceCourse: null,
	raceCars: [],
	speedest: null,
	podium: [],
	interval: null,

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
		var o = this;
		submitButton.addEventListener("click", function () {
			o.createVoiture(o);
		});

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
	createVoiture: function (o) {
		if (o.raceCars.length > 3) {
			alert("Vous avez atteint le nombre maximum de voitures");
			document.getElementById("container").style.display = "none";
			o.createRace();
		} else {
			typeValue = document.getElementById("type-select").value;
			colorValue = document.getElementById("color-select").value;
			speedValue = document.getElementById("speed-select").value;
			if (typeValue && colorValue && speedValue) {
				// console.log(typeValue, colorValue);
				var v0 = document.createElement("img");
				v0.setAttribute(
					"src",
					"images/voitures/" + typeValue + "-" + colorValue + ".png"
				);
				v0.setAttribute("id", typeValue + "-" + colorValue);
				v0.setAttribute("alt", typeValue + "-" + colorValue);

				o.resultContainer.appendChild(v0);
				o.createRaceCars(typeValue, colorValue, speedValue, v0);
			} else {
				alert("Veuillez choisir un type, une couleur et une vitesse");
			}
		}

		// console.log(o);
	},

	createRaceCars: function (typeValue, colorValue, speedValue, image) {
		var nbVoiture = this.raceCars.length;
		var newVoiture = Object.create(voiture);
		newVoiture.type = typeValue;
		newVoiture.image = image;
		newVoiture.color = colorValue;
		newVoiture.speed = speedValue;
		newVoiture.position = 0;
		newVoiture.left = 0;
		newVoiture.top = nbVoiture * 110;
		newVoiture.arrived = false;
		this.raceCars.push(newVoiture);
		// console.log(this.raceCars);
		if (newVoiture.speed > this.speedest) {
			this.speedest = newVoiture.speed;
			// console.log(this.speedest);
		}
	},

	createRace: function () {
		raceContainer = document.getElementById("race-container");
		this.raceContainer.style.display = "block";
		// document.getElementsByTagName("body")[0].style.width = "3770px";

		// Création d'une div pour les fonctionnalités de la course
		var RaceButtons = document.createElement("div");
		RaceButtons.setAttribute("id", "race-buttons");

		// Bouton pour commencer la course
		var buttonRaceStart = document.createElement("button");
		buttonRaceStart.setAttribute("type", "button");
		buttonRaceStart.innerHTML = "Start";
		var o = this;
		buttonRaceStart.addEventListener("click", function () {
			o.startRace(o);
		});
		// app.startRace(app.raceCars);

		// Bouton pour arreter la course
		var buttonRaceStop = document.createElement("button");
		buttonRaceStop.setAttribute("type", "button");
		buttonRaceStop.innerHTML = "Stop";

		// Ajout des boutons au div#race-buttons
		RaceButtons.append(buttonRaceStart, buttonRaceStop);

		// Gestion de la course
		// var RaceCourse = document.createElement("div");
		// RaceCourse.setAttribute("id", "race-course");

		// Ajout des images de voitures à la div#race-course
		for (var i = 0; i < this.raceCars.length; i++) {
			this.raceCars[i].image.style.marginTop = this.raceCars[i].top + "px";
			document.getElementById("race-course").append(this.raceCars[i].image);
		}

		// Ajout des divs à la div#race-container
		document.getElementById("race-bouttons").appendChild(RaceButtons);

		// Bouton pour commencer la course
	},

	moveRace: function (raceCars, speedest) {
		for (var i = 0; i < raceCars.length; i++) {
			// console.log(raceCars[i].left);
			if (raceCars[i].left <= 3620) {
				raceCars[i].left =
					parseInt(raceCars[i].left) + parseInt(raceCars[i].speed);
				// console.log(raceCars[i].image);
				raceCars[i].image.style.left = raceCars[i].left + "px";
				// console.log(this.raceCourse);
				if (parseInt(this.raceCourse.style.left) > -2800) {
					this.raceCourse.style.left -= speedest + "px";
				}
			} else {
				// permet de récuperer l'ordre et de faire le podium
				if (!raceCars[i].arrived) {
					this.podium.push(i);
				}
				raceCars[i].arrived = true;
				if (this.podium.length >= 4) {
					clearInterval(this.interval);
					// console.log(this.podium);
					this.createPodium();
				}
				// console.log(raceCars.length);
			}
		}
	},

	startRace: function (o) {
		o.interval = setInterval(function () {
			o.moveRace(o.raceCars, o.speedest);
		}, 10);
	},

	createPodium: function () {
		var podiumDiv = document.createElement("div");
		var imgPodiumFirst = document.createElement("img");
		var imgPodiumSecond = document.createElement("img");
		var imgPodiumThird = document.createElement("img");

		podiumDiv.setAttribute("id", "podium");
		for (var i = 0; i < 3; i++) {
			if (i == 0) {
				imgPodiumFirst.setAttribute("id", i);
				imgPodiumFirst.setAttribute("src", "images/podium/premier.png");
				imgPodiumFirst.style.left = 3450 + "px";
				imgPodiumFirst.style.top =
					parseInt(this.raceCars[this.podium[i]].image.style.marginTop) +
					25 +
					"px";
				imgPodiumFirst.style.width = 64 + "px";
				document.getElementById("race-course").appendChild(imgPodiumFirst);
			}
			if (i == 1) {
				imgPodiumSecond.setAttribute("id", i);
				imgPodiumSecond.setAttribute("src", "images/podium/second.jpg");
				imgPodiumSecond.style.left = 3450 + "px";
				imgPodiumSecond.style.top =
					parseInt(this.raceCars[this.podium[i]].image.style.marginTop) +
					25 +
					"px";
				imgPodiumSecond.style.width = 64 + "px";
				document.getElementById("race-course").appendChild(imgPodiumSecond);
			}
			if (i == 2) {
				imgPodiumThird.setAttribute("id", i);
				imgPodiumThird.setAttribute("src", "images/podium/troisieme.jpg");
				imgPodiumThird.style.left = 3450 + "px";
				imgPodiumThird.style.top =
					parseInt(this.raceCars[this.podium[i]].image.style.marginTop) +
					25 +
					"px";
				imgPodiumThird.style.width = 64 + "px";
				document.getElementById("race-course").appendChild(imgPodiumThird);
			}
		}
	},
};

//(changer les intervalle du bouton vitesse)

//defiler le background en même temps que les voitures

//faire un clear intervalle quand le scroll du background est terminé

// arreter la course a la fin du background

// Faire le podium des 3 premiers

// console.log(raceCars[i].position);
// console.log(document.getElementsByTagName("img")[i]);
// raceCars[i].position += raceCars[i].speed;
/* 			if (raceCars[i].position < 3770) {
  // document.querySelector("#race-container img:first-of-type").style.left =+ 50;
  // document.getElementsByTagName("img")[i].style.left += raceCars[i].speed + "px";
  console.log("on avance");
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
} else {
  ("Bravo, vous avez gagné !");
  // break;
} */
