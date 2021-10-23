class Hobbit {
  constructor(hobbit) {
    this.name = hobbit.name;
    this.age = hobbit.age = 0;
  }
  celebrateBirthday() {
    (this.age ++)
  }
  timeTravel() {
    console.log(hobbit)
  }
}


// if(this.age < 33)
// this.adult = hobbit.adult = false
// else hobbit.adult = true



module.exports = Hobbit;
