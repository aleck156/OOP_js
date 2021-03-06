'use strict';

//////////////////////////////////////////////////////////////////
// 220. Inheritance Between "Classes": ES6 Classes

// classes hdie a lot of details that js runs underneath
// they're merely a layer of abstraction
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // instance methods
  calcAge() {
    const now = new Date().getFullYear();
    console.log(now - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // static methods
  static hey() {
    console.log(`hey there!`);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(
      `Hi, my name is ${this.fullName}, I was born in ${this.birthYear}, and I study ${this.course}`
    );
  }

  calcAge() {
    const now = new Date().getFullYear();
    console.log(
      `I'm ${now - this.birthYear} years old, but I feel like ${
        now - this.birthYear - 10
      }`
    );
  }
}

const thomas = new StudentCl('Thomas Anderson', 1973, 'Computer Science');
console.log(thomas);
thomas.introduce();
thomas.calcAge();

//////////////////////////////////////////////////////////////////
// 221. Inheritance Between "Classes": Object.create

// this is the preferred way
// we are not trying to fake classes, but actually properly linking objects together

const PersonProto = {
  calcAge() {
    const now = new Date().getFullYear();
    console.log(now - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(
    `Hi, my name is ${this.fullName}, I was born in ${this.birthYear}, and I study ${this.course}`
  );
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2007, 'Electrical Engineering');
jay.introduce();
jay.calcAge();

//////////////////////////////////////////////////////////////////
// 222. Another Class Example
// 223. Encapsulation: Protected Properties and Methods
// 224. Encapsulation: Private Class Fields and Methods

// js classes do not offer proper encapsulation yet!
// classField proposals

// Public Fields
// Private Fields
// Public methods
// Private methods

// Static variations of the above

class Account {
  // private fields
  #movements = [];
  #pin;

  // public fields
  locale = navigator.language;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // this.#pin = pin; // you cannot define private field in the constructor
    this.#pin = pin;
    // this._movements = [];

    console.log(`Thanks for opening an account, ${this.owner}.`);
  }

  // public interface

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdrawal(val) {
    this.deposit(-val);
    return this;
  }

  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

acc1.deposit(150);
acc1.withdrawal(140);
acc1.requestLoan(270);
acc1.getMovements();
// acc1.#approveLoan(150);

console.log(acc1);
acc1.deposit(320).deposit(710).withdrawal(17.99).requestLoan(179);
console.log(acc1);
