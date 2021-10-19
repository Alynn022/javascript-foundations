class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet;
    this.thirsty = true;
    this.drinks = 0;
    this.ouncesDrank = 0;
  if(pet === undefined) {
    this.pet = 'bat'
  }
}
  drink() {
    if(this.ouncesDrank < 50)
    this.drinks ++;
    this.ouncesDrank = this.drinks * 10;
    if(this.drinks > 0)
      this.thirsty = false
    if(this.ouncesDrank > 49)
    return `I'm too full to drink anymore!`
  }
}


module.exports = Vampire;
