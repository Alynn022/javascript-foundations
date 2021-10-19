class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true
    this.eatCount = 0
  }
  greet(greeting) {
    return `Hi, ${this.rider}!`;
  }
  eat() { //there are no parameters because the test is not passing an argument
    this.eatCount ++ //++ is adding 1 to the count 
    if(this.eatCount > 2) {
      this.hungry = false;
    }
  }
};


module.exports = Dragon;
