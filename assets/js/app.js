$(function(){

// Variables globales

var myConsole = $('#console');

var actualPlayer = 0;
var nbPlayers = 2;
var nbCardInHand = 5;
var colors = ['red', 'blue', 'green', 'white', 'yellow', 'multicolor'];

var nbColorGame = 5;
var myDeck = newDeck(nbColorGame);

var MAX_ERRORS = 3;
var errors = 0;

var discard = [];

var field = new Object();
field.red	 = 0;
field.blue	 = 0;
field.green	 = 0;
field.yellow = 0;
field.white	 = 0;
field.multicolor = 0;

// hands[player1][card1,card2,card3,card4,card5] => hands[0][0,1,2,3,4]
var hands = [];
for (var i = 0; i < nbPlayers; i++) {
	hands[i] = getHand();
};

UI_updateHands();

// Programme Principale
var myVar = setInterval(function(){ myPgm() }, 1000);

function myPgm() {
	var cardToPlay = player_choseCard();
	field_addCard(cardToPlay);
    player_drawCard();

    UI_updateHands();

    player_switchActualPlayer();

    // Sortie : fin de la partie
	if(gameOver()){
		StopPgm();
	}
}

function StopPgm() {
    clearInterval(myVar);
}

UI_showFinalScore();

/*var card2 = new Object();
card2.value = 1;
card2.color = 'green';
field_addCard(card2);*/


// Evenements

$('body').on('click', '.card', function(){
	var value = $(this).html();
	var color = $(this).attr('color');
	myConsole.html('<p>click on a card : ' + value + ' ' + color + '</p>');
});


// Functions

	// Generale (= à trier)

	function gameOver(){
		return myDeck.length <= 0 || errors >= 3;
	}

	// Deck

	function newDeck(nbColor){

		// type de données:
		// 	- Valeur	: 1, 2, 3, 4, 5
		// 	- Couleur	: rouge, vert, bleu, jaune, blanc

		var deck = [];
		
		// Pour chaque couleur
		for (var i = 0; i < nbColor; i++) {

			// Por chaque chiffre
			for (var j = 1; j <= 5; j++) {

				switch (j) {
					case 1:
						nbCardsToAdd = 3;break;
					case 2:
						nbCardsToAdd = 2;break;
					case 3:
						nbCardsToAdd = 2;break;
					case 4:
						nbCardsToAdd = 2;break;
					case 5:
						nbCardsToAdd = 1;break;
					default:
						nbCardsToAdd = 0;break;
				}

				// on ajoute autant de fois que nécessaire (nbCardsToAdd) le chiffre (j) de la couleur actuelle (colors[i])
				for (var k = 1; k <= nbCardsToAdd; k++) {
					var card = new Object();
					card.color = colors[i];
					card.value = j;

					deck.push(card);
				};

			};

		};

		shuffle(deck);

		return deck;
	};

	function shuffle(array) {
	    var currentIndex = array.length,
	        temporaryValue,
	        randomIndex;

	    // While there remain elements to shuffle...
	    while (0 !== currentIndex) {

	        // Pick a remaining element...
	        randomIndex = Math.floor(Math.random() * currentIndex);
	        currentIndex -= 1;

	        // And swap it with the current element.
	        temporaryValue = array[currentIndex];
	        array[currentIndex] = array[randomIndex];
	        array[randomIndex] = temporaryValue;
	    };
	};


	function deck_pickFirstCard(){
		var cardRes = myDeck.splice(0, 1)[0];
		UI_updateNbDeckCards();

		// console.log(cardRes);
		return cardRes;
	};

	// Hand

	function getHand(){
		var hand = [];
		for (var i = 0; i < nbCardInHand; i++) {
			var myCard = deck_pickFirstCard();
			hand.push(myCard);
		}

		return hand;
	};

	function player_choseCard(){
		var hisHand = hands[actualPlayer];
		
		return hands[actualPlayer].splice(4, 1)[0];
	}

	function player_drawCard(){
		hands[actualPlayer].unshift(deck_pickFirstCard());
	}

	function player_switchActualPlayer(){
		actualPlayer ++;
		if(actualPlayer >= nbPlayers){
			actualPlayer = 0;
		}
	}


	// Discard

	function discard_addCard(card){
		discard.push(card);
	};

	// Field
	
	function field_format(number){
		var res = '';
		
		if(number == 0 || isNaN(number)){
			res = '&nbsp;';
		}
		else{
			res += number;
		}

		return res;
	}

	function field_addCard(card){

		var cardValue = card.value;
		var cardColor = card.color;
		var actualValue = field[cardColor];

		if (cardValue - 1 == actualValue) {
			field[cardColor] = cardValue;
			UI_updateField();
		}
		else{
			// Nouvelle erreur
			errors += 1;
			UI_updateErrors();
			// controlErrors();

			// Défausse la carte
			discard_addCard(card);
			UI_updateDiscard();
		};
	};

	function UI_updateField(){
		
		$('#field-red').html(field_format(field.red));
		$('#field-blue').html(field_format(field.blue));
		$('#field-green').html(field_format(field.green));
		$('#field-yellow').html(field_format(field.yellow));
		$('#field-white').html(field_format(field.white));
	};

	function UI_updateDiscard(){
		// reset
		$('.discard-card').remove();

		// show
		for (var i = 0; i < discard.length; i++) {
			$('#discard-' + discard[i].color).append('<div class="discard-card">' + discard[i].value + '</div>');
		};
	};

	function UI_updateHands(){
		// reset
		$('.card').attr('color','').html('');

		// show
		for (var i = 1; i <= nbPlayers; i++) {
			for (var j = 1; j <= nbCardInHand; j++) {
				$('.deck-player-' + i + ' .card:nth-child(' + j +')').attr('color', hands[i-1][j-1].color).html(hands[i-1][j-1].value);
			};
		};

	};

	function UI_updateErrors(){
		$('#error-value').html(errors);
	};

	function UI_updateNbDeckCards(){
		$('#nb-deck-cards-value').html(myDeck.length);
	};

	function UI_showFinalScore(){
		var finalScore = field.red + field.blue + field.yellow + field.white + field.green + field.multicolor;
		console.log(finalScore);
	}

	function controlErrors(){
		return errors = MAX_ERRORS;
	};

});
