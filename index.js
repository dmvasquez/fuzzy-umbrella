// Encapsulate to avoid polluting global namespace
var AstroCalc = {}

AstroCalc.planets = [
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

AstroCalc.roundToDecimal = function (num,dec) {
      return (Math.round(num * Math.pow(10,dec)) / Math.pow(10,dec)).toFixed(dec);
}

//options to select
AstroCalc.planets.forEach(function (planet) {
	var optionElement = document.createElement('option');
	optionElement.value = planet.gravity;
	optionElement.appendChild(document.createTextNode(planet.planet));
	
	document.getElementById('selectPlanet').appendChild(optionElement)
});

//bind a function to the click event
document.getElementById('inputForm').onsubmit = function (e) {
	e.preventDefault();
	
	var selectElement = document.getElementById('selectPlanet');
	var selectedOption = selectElement.options[selectElement.selectedIndex];

	var planetName = selectedOption.text;
	var planetGravity = selectedOption.value;
	var inputWeight = document.getElementById('inputWeight').value;
	var userWeightOnPlanet = inputWeight * planetGravity;

	var child;
	if (isNaN(userWeightOnPlanet)) {
		child = document.createElement('div');
		child.className = 'animated shake errorMessage'
		child.appendChild(document.createTextNode('Please insert only numerical values into the box'));
	} else {
		var message = 'If you were on ' + planetName + ' you would weigh ' + 
		    AstroCalc.roundToDecimal(userWeightOnPlanet, 2) + ' lbs.';
		child = document.createTextNode(message);
	}
	
	var output = document.getElementById('output');
	if ( output.childNodes[0] ) {
		output.replaceChild(child, output.childNodes[0]);
	} else {
		output.appendChild(child);
	}
}
