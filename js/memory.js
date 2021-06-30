// we need a MemoryGame class,
// we need a method to shuffle cards,
// we need a method to compare cards, and
// we need a method to check if the game is finished.

class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    //     // storing the cards player clicks
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // https://bost.ocks.org/mike/shuffle/
  }

  // when user chooses cards, check if they are the same
  // will receive 2 parameters: cards chosen by player
  // The method will add 1 to our pairsClicked property
  //  if the cards are the same also add 1 to pairsGuessed
  // return true or false depending on the result of comparing both cards
  // add checkIfFinished() method
  checkIfPair(card1, card2) {
    this.pairsClicked += 1;

    if (card1 === card2) {
      this.pairsGuessed += 1;
      this.checkIfFinished();
      return true;
    } else {
      return false;
    }
  }
  // return this.pairsGuessed === something === /2
  checkIfFinished() {}
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
