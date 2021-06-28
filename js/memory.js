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

  checkIfFinished() {}
}

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
