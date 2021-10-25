var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0,
    }
  }
    gatherMaterials(material, itemNum) {
      this.materials[material] += itemNum;
    //bracket notation to pass in keys that are changing.
  }
    buildASnowman(snowman) {
      return this.materials

    }
  }

module.exports = Human;
