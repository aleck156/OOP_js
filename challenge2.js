'use strict';

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`[${this.make}] Accelerating. Current speed: ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`[${this.make}] Accelerating. Current speed: ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
console.log(car2.speedUS);

const car3 = new Car('ford', 120);

// CHALLENGE #3
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// connect Car.prototype to EV.prototype, making it into a proper inheritance
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge = this.charge * 0.99;
  console.log(
    `${this.make} is going at ${this.speed}, with a charge of ${this.charge}`
  );
};
