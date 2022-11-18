"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    lastname;
    #firstname = '';
    constructor(firstname, lastname) {
        this.lastname = lastname;
        this.#firstname = firstname;
    }
    get fullname() {
        return `${this.#firstname} ${this.lastname} (${this.calculateAge()})`;
    }
    greet(greeting) {
        return `${greeting} ${this.fullname}`;
    }
    calculateAge() {
        return Math.floor(Math.random() * 100);
    }
}
exports.default = User;
const klaus = new User('Klaus', 'Müller');
function sayHelloTo(user) {
    console.log('Hello ' + user.fullname + '!!!');
}
sayHelloTo(klaus);
console.log(klaus.greet('Hallo'));
