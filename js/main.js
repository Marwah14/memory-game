
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = [0];
cardsInPlay.push('cardOne');
console.log("User flipped queen");
var cardTwo = [2];
cardsInPlay.push('cardTwo')
console.log ("User flipped King");

if (cardsInPlay.lenght === 2) {
	if (cardsInPlay[0] === cardsInPlay[2]) { 
		alert("You found a match!");
	} else {
		alert("Sorry, try again");
	};
};



