class Person {
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

class Account extends Person {
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

const klaus = new Account('Klaus', 'Müller', 42);
console.log(klaus.userName);
console.log(klaus.username);

console.log(klaus.generatePassword(8));
