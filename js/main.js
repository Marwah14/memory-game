
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match!");
	} else {
		alert("sorry, try again.");
	};
}

var flipCard = function (cardId) {
	console.log(" User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

	checkForMatch();
	};
	
	
flipCard(0);
flipCard(1);



