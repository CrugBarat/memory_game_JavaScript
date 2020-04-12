document.addEventListener('DOMContentLoaded', () => {

// card options
const cardArray = [
  {name: 'bear',
    img: 'images/bear.png'},
  {name: 'bear',
    img: 'images/bear.png'},
  {name: 'duck',
    img: 'images/duck.png'},
  {name: 'duck',
    img: 'images/duck.png'},
  {name: 'goat',
    img: 'images/goat.png'},
  {name: 'goat',
    img: 'images/goat.png'},
  {name: 'monkey',
    img: 'images/monkey.jpg'},
  {name: 'monkey',
    img: 'images/monkey.jpg'},
  {name: 'pig',
    img: 'images/pig.png'},
  {name: 'pig',
    img: 'images/pig.png'},
  {name: 'squirrel',
    img: 'images/squirrel.jpg'},
  {name: 'squirrel',
    img: 'images/squirrel.jpg'}
];

//randomises cards
cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//creates board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    var card = document.createElement('img')
    card.setAttribute('src', 'images/top.jpg')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

//checks for matches
function checkForMatch() {
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  if (cardsChosen[0]=== cardsChosen[1]) {
    alert('You found a match!')
    cards[optionOneId].setAttribute('src', 'images/blank.jpg')
    cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'images/top.jpg')
    cards[optionTwoId].setAttribute('src', 'images/top.jpg')
    alert('Unlucky!')
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Well done! Game Complete!'
  }
}

//flips card
function flipCard() {
  var cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length ===2) {
    setTimeout(checkForMatch, 500)
  }
}

createBoard()

})
