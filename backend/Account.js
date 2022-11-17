import Person from './Person.js';

export default class Account extends Person {
  userName = '';
  #password = '';

  constructor(firstName, lastName, age) {
    super(firstName, lastName, age);
    this.userName = this.firstName[0].toLowerCase() + this.lastName;
  }

  getUser() {
    return this.firstName[0].toLowerCase() + this.lastName;
  }

  get username() {
    return `${this.firstName.charAt(0).toLowerCase()}${this.lastName}`;
  }

  generatePassword(length) {
    // for (let i = 0; i < length; ++i) {
    //   this.#password += String.fromCharCode(65 + Math.random() * 25);
    // }
    // return this.#password;

    return (this.#password = new Array(length)
      .fill('')
      .map((v) => String.fromCharCode(65 + Math.random() * 25))
      .join(''));
  }
}
