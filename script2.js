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

Student.prototype.introduce = function () {
  console.log(
    `Hi, my name is ${this.firstName}, I was born in ${this.birthYear}, and I study ${this.course}`
  );
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);

mike.introduce();
