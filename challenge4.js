class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
}

class EVCl extends CarCl {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
}
