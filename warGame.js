const deck = [];
let player1Deck = [];
let player2Deck = [];

const suits = ["hearts", "diamonds", "clubs", "spades"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function createDeck() {
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
        const card = {
          value: values[j],
          suit: suits[i]
          //adicionar propriedade ??
        }
        deck.push(card);
      }
    }
    shuffleDeck()
  }

function shuffleDeck() {
    for (let i = 0; i < deck.length - 1; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    splitDecks()
}

function splitDecks() {
    let half = deck.length / 2;
    player1Deck = deck.slice(0, half);
    player2Deck = deck.slice(half);
}


function drawCards(cards) {
    let player1Card = [];
    let player2Card = [];

    for (let i = 0; i < cards; i++) {
        player1Card.push(player1Deck.shift());
        player2Card.push(player2Deck.shift());
    }
    result(player1Card, player2Card);
}

function result(card1, card2) {
    if (getCardValue(card1.slice(-1)) === getCardValue(card2.slice(-1))) {
        drawCards(4);
    } else 
    getCardValue(card1.slice(-1)) > getCardValue(card2.slice(-1)) ? player1Deck.push(card2, card1) : player2Deck.push(card1, card2);

    endGame();
}

function endGame() {
    let winner = "";
    if (player2Deck.length === 0) {
      winner = "Player 1 wins!";
    } else if (player1Deck.length === 0) {
      winner = "Player 2 wins!";
    }
  }

function getCardValue(card) {
    switch(card.value) {
      case "A":
        return 14;
      case "K":
        return 13;
      case "Q":
        return 12;
      case "J":
        return 11;
      default:
        return parseInt(card.value);
    }
}

function suitSymbol(card) {
    switch(card.suit) {
        case "hearts":
            card.suit = "♥";
            break;
    }
}

function startGame() {

}

function renderCard(card) {
    return `<div class="card ${card.suit}">
    <div class="card-inner">
        <div class="card-front">
            <div class="card-topleft">
                <div class="card-corner-rank">5</div>
                <div class="card-corner-suit">♥</div>
            </div>
            <div class="card-suits ordered">
                <div class="card-suit">♥</div>
                <div class="card-suit">♥</div>
                <div class="card-suit centered">♥</div>
                <div class="card-suit">♥</div>
                <div class="card-suit">♥</div>
            </div>
            <div class="card-bottomright hearts">
                <div class="card-corner-rank">5</div>
                <div class="card-corner-suit">♥</div>
            </div>
        </div>
        <div class="card-back"></div>
    </div>
</div>`
}

createDeck();

