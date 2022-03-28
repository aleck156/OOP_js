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
const matilda = new Person('Matilda', 1993);
const jack = new Person('Jack', 1973);
console.log(jonas);

console.log(jonas instanceof Person);
console.log(matilda instanceof Person);
console.log(jack instanceof Person);

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

__proto

*/

// the proper way of adding functions and methods to your classes
Person.prototype.calcAge = function () {
  const now = new Date().getFullYear();
  console.log(now - this.birthYear);
};

console.log(Person.prototype);

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log('jonas proto: ', jonas.__proto__);

console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));

// setting up properties on prototypes
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species);
console.log(matilda.species);

console.log(jonas.hasOwnProperty('species'));

/* the *new* operator
1. an empty object is created
2. *this* keyword in constructor function call is set to the new operator
3. the new object is linked (adding __proto__ property to the object) to the constructor function's prototype property
    __proto__ always points to the objects prototype
4. a new object is returned from the function
    unless we *explicitly* return something else

that's how it works with
+ function constructors
+ ES6+ classes

THIS IS NOT HOW ITWORKS WITH OBJECT.CREATE

THE PROTOTYPE CHAIN

Object.prototype is at the top of prototype chaining
whenever we create object literal, Object() constructor function is called FIRST, behind the scene
    Object.prototype

the prototype chain is a series of links between objects, linked through prototypes
*/

console.log(Object.prototype === Person.__proto__);

//////////////////////////////////////////////////////////////////
// 211. Prototypal Inheritance on Built-In Objects

console.log(jonas.__proto__);
Person.prototype.MyNewProp = `nani desu ka?!`;
Person.prototype.anotherFuncInTheStack = function () {
  console.log(`Pink Freud`);
};
console.log(jonas.__proto__);
jonas.anotherFuncInTheStack();

// moving up the prototype chain
// Object.prototype is the TOP of the chain
console.log(jonas.__proto__.__proto__ === Object.prototype);

console.log(Person.prototype.constructor);
console.dir(Person.prototype.constructor);

const arr = [2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5, 2, 3, 4, 5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

// expanding methods of built-in objects is as simple as ...
Array.prototype.myFunc = function () {
  console.log(`Hello world, from another world!`);
};

arr.myFunc();

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

console.log(...new Array(10).fill(9).unique());

// adding new stuff to prototypes is nice and dandy, until you start messing with built-in methods OR next ECMAScript edition allocates keyword used by your own custom stuff
// it's a disaster just waiting to happen
const h1 = document.querySelector('h1');
// getting the actual object, not just the element
console.dir(h1);
console.dir(h1.__proto__);

// the function itself is also an object, thus they have a prototype
console.dir(x => x + 1);
