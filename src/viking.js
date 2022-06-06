// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super();
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  Attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health = this.health - damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return 'A Saxon has died in combat';
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let warriorViking = Math.floor(Math.random() * this.vikingArmy.length);

    let randomViking = this.vikingArmy[warriorViking];

    let warriorSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    let randomSaxon = this.saxonArmy[warriorSaxon];

    let saxonDmgTkn = randomSaxon.receiveDamage(randomViking.attack());

    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(warriorSaxon, 1);
    }

    return saxonDmgTkn;
  }

  saxonAttack() {
    let warriorViking = Math.floor(Math.random() * this.vikingArmy.length);

    let randomViking = this.vikingArmy[warriorViking];

    let warriorSaxon = Math.floor(Math.random() * this.saxonArmy.length);

    let randomSaxon = this.saxonArmy[warriorSaxon];

    let vikingDmgTkn = randomViking.receiveDamage(randomSaxon.attack());

    if (randomViking.health <= 0) {
      this.vikingArmy.splice(warriorViking, 1);
    }

    return vikingDmgTkn;
  }

  showStatus() {
    if (!this.saxonArmy.length) {
      return 'Vikings have won the war of the century!';
    } else if (!this.vikingArmy.length) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
