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
}

const thomas = new StudentCl('Thomas Anderson', 1973, 'Computer Science');
console.log(thomas);
