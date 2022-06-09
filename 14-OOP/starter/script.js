// 'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never  do this
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };
// const daniel = new Person('daniel', 1990);
// // console.log(daniel);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to proptotype
// // function is retured  = {}

// const matt = new Person('matt', 1450);
// const jack = new Person('jack', 2006);
// console.log(matt, jack);

// console.log(daniel instanceof Person);

// // Prototyeps
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// daniel.calcAge(); //The daniel obj dont contain the function cakcAge, but thx to prototype inheratence all person obj can use the func.
// jack.calcAge();

// console.log(Person);
// console.log(daniel.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(daniel));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototype should be named someething like .prorotypeOfLinkedObjects or something like that.

// Person.prototype.species = 'Homo Sapiens'; // Not only methods can be added to object, but propories aswell
// console.log(daniel.species);

// // to check is object has own property
// console.log(daniel.hasOwnProperty('firstName')); //true
// console.log(daniel.hasOwnProperty('species')); //false
// //spices is int the proto not in the accual new Person obj

//#212 - challange

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// const car1 = new Car('Volvo', 56);
// const car2 = new Car('Tesla', 230);
// console.dir(car1);

// car1.break();
// car1.break();
// car1.accelerate();
// car1.accelerate();
// car1.accelerate();
// console.log(car1);

// car2.break();
// car2.break();
// car2.break();

// #213
//ES6

// class expression
// const PersonCl = class {}

// // class declearation
// class PersonCl {
//   constructor(fullname, birtYear) {
//     this.fullname = fullname;
//     this.birtYear = birtYear;
//   }
//   //Add a method to the class, by proto
//   calcAge() {
//     console.log(2037 - this.birtYear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullname}`);
//   }

//   get age() {
//     return 2037 - this.birtYear;
//   }

//   set fullname(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullname = name;
//     else alert(`${name}: this is not a full name`);
//   }

//   get fullname() {
//     return this._fullname;
//   }

//   static hey() {
//     console.log('Static Hey ❤️');
//     console.log(this);
//   }
// }

// const jessica = new PersonCl('jess davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// jessica.greet();
// console.log(jessica.age);
// console.log(jessica._fullname);

// // classes are not hoisted
// // classes are first-class citezens
// // Classes are exe in strict mode

// const walter = new PersonCl('walter white', 1956);
// PersonCl.hey();
// // # 214
// // Setter & Getters

// const account = {
//   owner: 'Daniel',
//   movment: [234, 4556, 77543, 223432],

//   get latest() {
//     return this.movment.slice(-1).pop();
//   },

//   set latest(mov) {
//     return this.movment.push(mov);
//   },
// };
// console.log(account.latest);
// account.latest = 50;
// console.log(account.movment);

// #216

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 1995;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);
const emma = Object.create(PersonProto);
emma.init('Emma', 1865);
emma.calcAge();
console.log(emma);

// Coding challange #2

//#212 - challange

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(`${this.make} going at ${this.speed} km/h`);
// };

// const car1 = new Car('Volvo', 56);
// const car2 = new Car('Tesla', 230);
// console.dir(car1);

// car1.break();
// car1.break();
// car1.accelerate();
// car1.accelerate();
// car1.accelerate();
// console.log(car1);

// car2.break();
// car2.break();
// car2.break();

class CarCl {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }
  acc() {
    this.speed += 10;
    console.log(`${this.brand} is goning at ${this.speed} km/h `);
  }

  break() {
    this.speed -= 5;
    console.log(`${this.brand} is goning at ${this.speed} km/h`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('ford', 213);
console.log(ford.speedUS);
ford.acc();
ford.break();
ford.break();

ford.speedUS = 50;
console.log(ford);

// #218
