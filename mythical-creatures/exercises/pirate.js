class Pirate {
  constructor(name, job = 'scallywag') {
    this.name = name
    this.job = job
    this.cursed = false
    this.booty = 0
  }
  robShip() {
    this.booty += 100
    if (this.booty >= 500) {
      this.cursed = true
      this.booty = 500
      return `ARG! I\'ve been cursed!`
    } else {
      return `YAARRR!`
    }
  }
    liftCurse() {
    if (this.cursed === false) {
      return `You don\'t need to lift a curse!`
    }
    else {
      this.booty -= 300
      this.cursed = false
     return `Your curse has been lifted!`
    }
  }
}

module.exports = Pirate;
