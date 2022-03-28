'use strict';

// for OOP purposes, use only function expression or function declaration
// arrow function does NOT have its own `this` keyword
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // creating and defining methods in constructor function is a bad practice
  // each time you create a new instance of that class, it's created with all those methods anew
  // this takes TONS of memory space for something that is repetitive among all of instances!

  // prototypes and prototype inheritance is the way!
};

const jonas = new Person('Jonas', 1986);
console.log(jonas);

console.log(jonas instanceof Person);

/*
1. new empty object is created
2. function is called
    this keyword is created, and it points to this new object
    all of this happens because of the *new* keyword
3. {} linked to prototype
4. function automatically returns that empty object
    the object is no longer empty

OOP is not a feature of Js
it's merely a pattern developed by coders
*/

// PROTOTYPES
/*
+ each and every function has a property called property
+ every object will have access to it



*/

// the proper way of adding functions and methods to your classes
Person.prototype.calcAge = function () {
  const now = new Date().getFullYear();
  console.log(now - this.birthYear);
};

console.log(Person.prototype);

jonas.calcAge();
