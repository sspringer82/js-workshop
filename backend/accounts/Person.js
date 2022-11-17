export default class Person {
  firstName = '';
  lastName = '';
  age = 0;

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
    // return this.firstName + ' ' + this.lastName;
  }
}
