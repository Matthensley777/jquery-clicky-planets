"use strict";

let planets = [];

$.get('planets.json').done((data) => {
	planets = data.planets;
	console.log(data);
}).fail((error) => {
	console.log(error);
});

$.ajax({
	method: 'GET', 
	url:'https://api.nasa.gov/planetary/apod?api_key=cML4iFHlbQ0IUTnGJROHnsbAfZ3Dl6TMWimdwSNY'})
    .done((data) => {
    	$('body').css('background-image', `url(${data.hdurl})`);
	console.log(data);
}).fail((error) => {

});




const getPlanets = () => {
	return planets;
};

module.exports = {getPlanets};