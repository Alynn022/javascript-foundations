class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }
  fill(candy) {
    this.candies.push(candy)
    this.count += 1
  } 
  contains(candy) {
    if (candy === 'Lindt Chocolate') {
      return true
    }
    else {
      return false
    }
  }
}

module.exports = Bag;