'use strict';

//////////////////////////////////////////////////////////////////
// 218. Inheritance Between "Classes": Constructor Functions

/*    REAL CLASSES DO NOT EXIST IN JAVASCRIPT
+ prototypal inheritance is not true OOP


*/

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  const now = new Date().getFullYear();
  console.log(now - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// with this line, Student class inherits all of methods available to Person class
// it has to be added BEFORE any other methods are added to the Student.prototype
// this also makes a constructor of Student.prototype to be of Person.prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototype.introduce = function () {
  console.log(
    `Hi, my name is ${this.firstName}, I was born in ${this.birthYear}, and I study ${this.course}`
  );
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);

mike.introduce();

// calling methods from parent class does not work ... yet
// but once we connect Student.prototype with Person.prototype with Object.create, it works!
mike.calcAge();

// adding new functionality to Person class gets propagated to all children that inherit from that class
Person.prototype.testing = function () {
  console.log(`testNG`);
};

mike.testing();

// Object.prototype still sits at the top of prototype chain
// we can call whatever method is there, once we call Object.create()
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);

console.dir(Student.prototype.constructor);
console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);
