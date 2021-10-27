class Magician {
  constructor(magicianDetails) {
    this.name = `The Great ${magicianDetails.name}`
    this.assistant = magicianDetails.assistant
    this.favoriteAccessory = magicianDetails.clothing || 'top hat'
    this.confidencePercentage = 10
  }
  performIncantation(phrase) {
    return phrase.toUpperCase(phrase) + "!"
  }
  performTrick() {
    this.confidencePercentage += 10
    if (this.favoriteAccessory != 'top hat') {
      return'PULL DOVE FROM SLEEVE'
    }
    else {
      return 'PULL RABBIT FROM TOP HAT'
    }
  }
  performShowStopper() {
    if ((this.confidencePercentage >= 100) && (this.assistant === true)) {
      return 'WOW! The magician totally just sawed that person in half!'
    }
     else {
     }
     return 'Oh no, this trick is not ready!'
  }
}





module.exports = Magician;
