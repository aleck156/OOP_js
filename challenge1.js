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
