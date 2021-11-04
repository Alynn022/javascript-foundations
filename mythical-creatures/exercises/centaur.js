class Centaur {
  constructor(name) {
    this.name = name
    this.breed = 'Palomino'
    this.cranky = false
    this.standing = true
    this.count = 0
    this.layingDown = false
  }
  shootBow() {
    this.count ++
    if ((this.count >= 3) || (this.layingDown === true)) {
      this.cranky = true
      return 'NO!'
    }
     else {
      return 'Twang!!!'
    }
  }
  run() {
    this.count ++
    if ((this.count >= 3) || (this.layingDown === true)) {
    this.cranky = true
    return 'NO!'
    }
    else {
    return 'Clop clop clop clop!!!'
    }
  }
  sleep() {
    this.cranky = false
    if (this.standing === true) {
      return 'NO!'
    }
    else {
      this.count = 0
      return 'ZZZZ'
    }
  }
  layDown() {
    this.standing = false
    this.layingDown = true
  }
  standUp() {
    this.standing = true
    this.layingDown = false
  }
  drinkPotion() {
    this.cranky = false 
    this.count = 0
    if (!this.stand === true) {
      return 'Not while I\'m laying down!'
    }
  }
}



module.exports = Centaur;
