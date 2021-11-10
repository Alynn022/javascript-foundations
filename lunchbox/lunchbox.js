class LunchBox {
  constructor(lunchBoxDetails) {
    this.owner = lunchBoxDetails.owner; 
    this.material = lunchBoxDetails.madeOf;
    this.shape = lunchBoxDetails.shape; 
    this.color = lunchBoxDetails.color;
    this.snacks = [];
  }
  acquireSnack(snack) {
    this.snacks.push(snack);
    snack.isInLunchBox = true; 
  }

  findHealthySnacks() {
    var healthySnacks = []
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].checkForHealthy()) {
        healthySnacks.push(this.snacks[i].type);
      }
    }
    return healthySnacks;
  }
}

//   findHealthySnacks() {
//     var healthySnacks = []
//     for (var i = 0; i < this.snacks.length; i++) {
//       if (this.snacks[i].type.includes('Fruit') || this.snacks[i].type.includes('fruit')) {
//         healthySnacks.push(this.snacks[i].type);
//       } 
//     } 
//     return healthySnacks
//   }

//   findHealthySnacks() {
//     // needs to return an array of two strings
//     // ["Mixed fruit", "Fruit"]
//     var healthySnacks = [];
//     for (var i = 0; i< this.snacks.length; i++) {
//       if (this.snacks[i].type.toUpperCase().includes('FRUIT')) {
//         healthySnacks.push(this.snacks[i].type)
//       }
//     }
//     return healthySnacks;
//   }
// }


module.exports = LunchBox;
