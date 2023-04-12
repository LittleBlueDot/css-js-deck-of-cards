const deck = [];
const suits = ["hearts", "diamonds", "clubs", "spades"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let player1Deck = [];
let player2Deck = [];
let player1Card = [];
let player2Card = [];

function startGame() {
  //<button onclick="startGame()">NEW GAME</button>
  createDeck();
  shuffleDeck();
  splitDecks();
}

function createDeck() {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      const card = {
        value: values[j],
        suit: suits[i],
        power: values.indexOf(values[j])
      }
      deck.push(card);
    }
  }
}

function shuffleDeck() {
  for (let i = 0; i < deck.length - 1; i++) {
    let j = Math.floor(Math.random() * deck.length);
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

function splitDecks() {
  let half = deck.length / 2;
  player1Deck = deck.slice(0, half);
  player2Deck = deck.slice(half);
}

function play() {
  //<button onclick="play()">DRAW CARDS</button>
  drawCards();
  result();
  endGame();
  player1Card = [];
  player2Card = [];
}

function endGame() {
  let winner = "";
  if (player2Deck.length === 0) {
    winner = "Player 1 wins!";
    return true;
  } else if (player1Deck.length === 0) {
    winner = "Player 2 wins!";
    return true;
  } else return false;
}

function drawCards() {
  player1Card.push(player1Deck.shift());
  player2Card.push(player2Deck.shift());
}

function result() {
  if (player1Card[-1].power === player2Card[-1].power) {
    war();
    return;
  } player1Card[-1].power > player2Card[-1].power ? player1Deck.push(player2Card, player1Card) : player2Deck.push(player1Card, player2Card);
}

function war() {
  for (let i = 0; i < 4; i++) {
    if (player1Deck.length === 0 || player1Deck.length === 0) {
      return;
    }
    drawCards();
  }
  result();
}

function suitSymbol(card) {
  switch (card.suit) {
    case "hearts":
      card.suit = "♥";
      break;
  }
}

const images = {
  'hearts': {
    'A': 'img/ace_of_hearts.png',
    '2': 'img/2_of_hearts.png',
    // ... 
  },
  'diamonds': {
    'A': 'img/ace_of_diamonds.png',
    '2': 'img/2_of_diamonds.png',
    // ... 
  },
  'clubs': {
    'A': 'img/ace_of_clubs.png',
    '2': 'img/2_of_clubs.png',
    // ... 
  },
  'spades': {
    'A': 'img/ace_of_spades.png',
    '2': 'img/2_of_spades.png',
    // ... 
  }
};

const symbols = {
  'hearts': '♥',
  'diamonds': '♦',
  'clubs': '♣',
  'spades': '♠'
};

const ranks = {
  1: 'A',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
  11: 'J',
  12: 'Q',
  13: 'K'
};

function renderCard(card) {
  const suit = card.suit;
  const rank = ranks[card.rank];
  const symbol = symbols[suit];
  const imageSrc = images[suit][rank];
  const cardHTML = `
    <div class="card ${suit}">
        <div class="card-front">
          <div class="card-topleft">
            <div class="card-corner-rank">${rank}</div>
            <div class="card-corner-suit">${symbol}</div>
          </div>
          <div class="card-suits">
            <img src="${imageSrc}" alt="${rank} of ${suit}">
          </div>
          <div class="card-bottomright">
            <div class="card-corner-rank">${rank}</div>
            <div class="card-corner-suit">${symbol}</div>
          </div>
        </div>
    </div>
  `;
  return cardHTML;
}