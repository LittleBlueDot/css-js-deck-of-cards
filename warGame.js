const deck = [];
const suits = ["hearts", "diamonds", "clubs", "spades"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let player1Deck = [];
let player2Deck = [];
let player1Card = [];
let player2Card = [];

function startGame() {
  document.querySelector(".game-scene").style.display = "flex"; // LBA added to show game scene
  gameHeader.classList.toggle("fade"); // LBA
  document.querySelector(".start-game").style.display = "none"; // LBA
  document.querySelector(".restart").style.display = "none"; // LBA

  //TODO: see if possible to combine multiple classes, the code bellow doesn´t work
/*   const hideButtons = document.querySelectorAll(".start-game, .restart");
  hideButtons.style.display = "none"; */
  createDeck();
  shuffleDeck();
  splitDecks();
}

// LBA
function restartGame() {
  document.querySelector(".restart").style.display = "none"; // LBA
  document.querySelector(".play").style.display = "block"; // LBA
  document.querySelector(".text").style.display = "none"; // LBA
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
  drawCards();
  result();
  endGame();
  player1Card = [];
  player2Card = [];
}

function drawCards() {
  player1Card.push(player1Deck.shift());
  document.getElementById("card1").innerHTML = renderCard(player1Card.at(-1));
  player2Card.push(player2Deck.shift());
  document.getElementById("card2").innerHTML = renderCard(player2Card.at(-1));
}

function result() {
  if (player1Card.at(-1).power === player2Card.at(-1).power) {
    war();
  } else player1Card.at(-1).power > player2Card.at(-1).power ? player1Deck.push(...player2Card) && player1Deck.push(...player1Card) : player2Deck.push(...player1Card) && player2Deck.push(...player2Card);
}

function war() {
  // Pausar para se clicar novamente em "Draw Cards"
  for (let i = 0; i < 4; i++) {
    if (player1Deck.length === 0 || player1Deck.length === 0) {
      return;
    }
    drawCards();
  }
  result();
}

function endGame() {
  p1score();
  p2score();
  if (player2Deck.length === 0) {
    document.getElementById("winner").innerHTML = "Player 1 wins";
    document.querySelector(".play").style.display = "none"; // LBA
    document.querySelector(".restart").style.display = "block"; // LBA
  } else if (player1Deck.length === 0) {
    document.getElementById("winner").innerHTML = "Player 2 wins";
    document.querySelector(".play").style.display = "none"; // LBA
    document.querySelector(".restart").style.display = "block"; // LBA
  }
}

const images = {
  'hearts': {
    'A': 'img/cards/hearts/ace_of_hearts.svg',
    '2': 'img/cards/hearts/2_of_hearts.svg',
    '3': 'img/cards/hearts/3_of_hearts.svg',
    '4': 'img/cards/hearts/4_of_hearts.svg',
    '5': 'img/cards/hearts/5_of_hearts.svg',
    '6': 'img/cards/hearts/6_of_hearts.svg',
    '7': 'img/cards/hearts/7_of_hearts.svg',
    '8': 'img/cards/hearts/8_of_hearts.svg',
    '9': 'img/cards/hearts/9_of_hearts.svg',
    '10': 'img/cards/hearts/10_of_hearts.svg',
    'J': 'img/jack.svg',
    'Q': 'img/queen.svg',
    'K': 'img/king.svg'
  },
  'diamonds': {
    'A': 'img/cards/diamonds/ace_of_diamonds.svg',
    '2': 'img/cards/diamonds/2_of_diamonds.svg',
    '3': 'img/cards/diamonds/3_of_diamonds.svg',
    '4': 'img/cards/diamonds/4_of_diamonds.svg',
    '5': 'img/cards/diamonds/5_of_diamonds.svg',
    '6': 'img/cards/diamonds/6_of_diamonds.svg',
    '7': 'img/cards/diamonds/7_of_diamonds.svg',
    '8': 'img/cards/diamonds/8_of_diamonds.svg',
    '9': 'img/cards/diamonds/9_of_diamonds.svg',
    '10': 'img/cards/diamonds/10_of_diamonds.svg',
    'J': 'img/jack.svg',
    'Q': 'img/queen.svg',
    'K': 'img/king.svg'
  },
  'clubs': {
    'A': 'img/cards/clubs/ace_of_clubs.svg',
    '2': 'img/cards/clubs/2_of_clubs.svg',
    '3': 'img/cards/clubs/3_of_clubs.svg',
    '4': 'img/cards/clubs/4_of_clubs.svg',
    '5': 'img/cards/clubs/5_of_clubs.svg',
    '6': 'img/cards/clubs/6_of_clubs.svg',
    '7': 'img/cards/clubs/7_of_clubs.svg',
    '8': 'img/cards/clubs/8_of_clubs.svg',
    '9': 'img/cards/clubs/9_of_clubs.svg',
    '10': 'img/cards/clubs/10_of_clubs.svg',
    'J': 'img/jack.svg',
    'Q': 'img/queen.svg',
    'K': 'img/king.svg'
  },
  'spades': {
    'A': 'img/cards/spades/ace_of_spades.svg',
    '2': 'img/cards/spades/2_of_spades.svg',
    '3': 'img/cards/spades/3_of_spades.svg',
    '4': 'img/cards/spades/4_of_spades.svg',
    '5': 'img/cards/spades/5_of_spades.svg',
    '6': 'img/cards/spades/6_of_spades.svg',
    '7': 'img/cards/spades/7_of_spades.svg',
    '8': 'img/cards/spades/8_of_spades.svg',
    '9': 'img/cards/spades/9_of_spades.svg',
    '10': 'img/cards/spades/10_of_spades.svg',
    'J': 'img/jack.svg',
    'Q': 'img/queen.svg',
    'K': 'img/king.svg'
  }
};

const symbols = {
  'hearts': '♥',
  'diamonds': '♦',
  'clubs': '♣',
  'spades': '♠'
};

function renderCard(card) {
  const imageSrc = images[card.suit][card.value];
  return cardHTML = `
    <div class="card ${card.suit}">
        <div class="card-front">
          <div class="card-topleft">
            <div class="card-corner-rank">${card.value}</div>
            <div class="card-corner-suit">${symbols[card.suit]}</div>
          </div>
          <div class="card-suits">
            <img src="${imageSrc}" alt="${card.value} of ${card.suit}">
          </div>
          <div class="card-bottomright">
            <div class="card-corner-rank">${card.value}</div>
            <div class="card-corner-suit">${symbols[card.suit]}</div>
          </div>
        </div>
    </div>
  `;
}

function p1score() {
  return document.getElementById("player1Score").innerHTML = player1Deck.length;
}

function p2score() {
  return document.getElementById("player2Score").innerHTML = player2Deck.length;
}