class Unicorn {
  constructor(name, color = 'white') {
    this.name = name;
    this.color = color;
  }

  isWhite() {
    return this.color === 'white' 
  }

  says(greeting) {
    return `**;* ${greeting} *;**`
  }
}

module.exports = Unicorn;




// 1. read the test that you're running
// 2. ask yourself, if it's going to fail and why?
// 3. run the test
// 4. make it pass
