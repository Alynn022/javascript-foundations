var Person = require('../exercises/person');
var Statue = require('../exercises/statue');

class Medusa {
    constructor(medusa) {
    this.name = medusa
    this.statues = []
  }
  gazeAtVictim(victim) {
    if (this.statues.length >= 3) {
      var newStatue = new Statue(victim.name)
      var freedPerson = new Person(this.statues[0].name)
      this.statues.shift()
      this.statues.push(newStatue)
      freedPerson.mood = 'relieved'
    return freedPerson
    } else {
      var newStatue = new Statue(victim.name)
       return this.statues.push(newStatue)
    }
  }
}

          module.exports = Medusa;

module.exports = Medusa;
