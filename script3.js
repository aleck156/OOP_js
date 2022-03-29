'use strict';

//////////////////////////////////////////////////////////////////
// 220. Inheritance Between "Classes": ES6 Classes
class PersonCL {
  construct(fullName, birthYear) {
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
    if (name.includes('')) this._fullName = name;
    else alert(`${this} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // static methods
  static hey() {
    console.log(`hey there!`);
  }
}
