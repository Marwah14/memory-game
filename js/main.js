
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
];

var cardsInPlay = [];

var checkForMatch = () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("you found a match!");
	} else {
		alert("sorry, try again.");
	};
}

var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank = "queen");
	cardsInPlay.push(cards[cardId].rank = "queen || King");
	console.log("cardImage");
	console.log("suit");



	checkForMatch();
	};
	
	
flipCard(0);
flipCard(1);



