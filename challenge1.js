'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed; // in km/h
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const myCar = new Car('Ford', 210);
console.log(myCar.make, myCar.speed);

myCar.accelerate();
console.log(myCar.make, myCar.speed);

myCar.brake();
myCar.brake();
myCar.brake();
myCar.brake();
myCar.brake();
myCar.brake();
console.log(myCar.make, myCar.speed);

const myCar1 = new Car('BMW', 120);
const myCar2 = new Car('Mercedes', 95);

// CHALLENGE #3
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// connect Car.prototype to EV.prototype, making it into a proper inheritance
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed}, with a charge of ${this.charge}`
  );
};

const firstEV = new EV('Hyundai', 130, 100);
firstEV.accelerate();
firstEV.accelerate();
firstEV.accelerate();
firstEV.accelerate();
firstEV.accelerate();
firstEV.accelerate();

const secondEV = new EV('Tesla', 120, 23);
secondEV.accelerate();
secondEV.accelerate();
secondEV.accelerate();
secondEV.accelerate();
secondEV.accelerate();
secondEV.brake();
secondEV.chargeBattery(90);
