import Person from './Person.js';

export default class Account extends Person {
  userName = '';

  #password = '';

  constructor(id, firstName, lastName, age) {
    super(id, firstName, lastName, age);
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

    this.#password = new Array(length)
      .fill('')
      .map(() => String.fromCharCode(65 + Math.random() * 25))
      .join('');
    return this.#password;
  }
}
