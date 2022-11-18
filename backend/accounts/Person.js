export default class Person {
  id = 0;

  firstName = '';

  lastName = '';

  age = 0;

  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
    // return this.firstName + ' ' + this.lastName;
  }
}
