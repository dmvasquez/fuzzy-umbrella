var planets = [
	{planet: 'Sun', gravity: 27.9},
  	{planet: 'Mercury', gravity: 0.377},
	{planet: 'Venus', gravity: 0.9032},
	{planet: 'Earth', gravity: 1},
	{planet: 'Moon', gravity: 0.1655},
	{planet: 'Mars', gravity: 0.3895},
	{planet: 'Jupiter', gravity: 2.640},
	{planet: 'Saturn', gravity: 1.139},
	{planet: 'Uranus', gravity: 0.917},
	{planet: 'Neptune', gravity: 1.148},
	{planet: 'Pluto', gravity: 0.06}
];

function roundToDecimal(num,dec) {
      var rounded = (Math.round(num * Math.pow(10,dec)) / Math.pow(10,dec)).toFixed(dec);
      return rounded;
    }

//options to select
for(var i = 0; i < planets.length; i++) {
	var planet = planets[i];

	var optionElement = document.createElement('option');
	optionElement.value = planet.gravity;
	optionElement.innerHTML = planet.planet;

	var selectElement = document.getElementById('selectPlanet');
	selectElement.appendChild(optionElement);
}

//bind a function to the click event
var form = document.getElementById('inputForm');


form.onsubmit = function () {
	var inputWeight = document.getElementById('inputWeight');

	var weight = inputWeight.value;

	var selectElement = document.getElementById('selectPlanet');

	var selectedIndex = selectElement.selectedIndex;

	var selectedOption = selectElement.options[selectedIndex];

	var planetName = selectedOption.text;
	var planetValue = selectedOption.value;

	var userWeightOnPlanet = weight * planetValue;

	if (isNaN(userWeightOnPlanet)) {
		
		var output = document.getElementById('output');
		output.innerHTML = "<div class='animated shake errorMessage'>Please insert only numerical values into the box</div>";

	} else {
		var message = 'If you were on ' + planetName + ' you would weigh ' + roundToDecimal(userWeightOnPlanet, 2) + ' lbs.';
		
		var output = document.getElementById('output');
		output.innerHTML = message;	
	}
	return false;
}