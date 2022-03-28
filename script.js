'use strict';

// for OOP purposes, use only function expression or function declaration
// arrow function does NOT have its own `this` keyword
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  this.calcAge = function () {
    const now = new Date().getFullYear();
    console.log(now - this.birthYear);
  };
};

const jonas = new Person('Jonas', 1986);
console.log(jonas);

console.log(jonas instanceof Person);
jonas.calcAge();

/*
1. new empty object is created
2. function is called
    this keyword is created, and it points to this new object
    all of this happens because of the *new* keyword
3. {} linked to prototype
4. function automatically returns that empty object
    the object is no longer empty


*/
