class Snowman {
  constructor(snowmanDetail) {
    this.carrots = snowmanDetail.carrots;
    this.coal = snowmanDetail.coal;
    this.buttons = snowmanDetail.buttons;
    this.snowballs = snowmanDetail.snowballs;
    this.magicHat = false;
  }
  canWearMagicHat() {
    if(this.coal < 2) {
      this.magicHat = false
    } else if(this.buttons < 5) {
      this.magicHat = false;
    } else if(this.carrots < 1) {
      this.magicHat = false;
    } else if(this.snowballs < 2) {
      this.magicHat = false;
    } else {
      this.magicHat = true
    }
  }
}


module.exports = Snowman;
