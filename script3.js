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
const jay = Object.create(StudentProto);
