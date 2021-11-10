class Skater {
  constructor(skaterDetails) {
    this.name = skaterDetails.name;
    this.skill = skaterDetails.skill;
    this.tricks = skaterDetails.tricks;
    this.money = skaterDetails.cash;  
    this.frustration = 0;
  }
   practice(trick) {
    if (this.tricks[trick] === false) {
      this.frustration += 1
    }
    if ((this.frustration === 3) && (trick === 'bigSpin')) {
      this.tricks.bigSpin = true
      this.frustration = 0
      return `I just learned to ${trick}!!!`
    }
    if ((this.frustration === 3) && (trick === 'treflip')) {
      this.tricks.treflip = true
      this.frustration = 0
      return `I just learned to ${trick}!!!`
    }
    if ((this.frustration === 3) && (trick === 'kickflip')) {
      this.tricks.kickflip = true
      this.frustration = 0
      return `I just learned to ${trick}!!!`
    }
   }
} 


module.exports = Skater;