export default class User {
  #firstname = '';

  constructor(firstname: string, public lastname: string) {
    this.#firstname = firstname;
  }

  get fullname() {
    return `${this.#firstname} ${this.lastname} (${this.calculateAge()})`;
  }

  greet(greeting: string): string {
    return `${greeting} ${this.fullname}`;
  }

  private calculateAge(): number {
    return Math.floor(Math.random() * 100);
  }
}

const klaus = new User('Klaus', 'Müller');

function sayHelloTo(user: User): void {
  console.log('Hello ' + user.fullname + '!!!');
}

sayHelloTo(klaus);

console.log(klaus.greet('Hallo'));
