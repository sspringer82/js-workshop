import Account from './Account.js';
import { faker } from '@faker-js/faker';

export default class Model {
  #accounts = [];

  fillAccounts() {
    this.#accounts = new Array(100).fill('').map((account, index) => {
      return new Account(
        index,
        faker.name.firstName(),
        faker.name.lastName(),
        Math.floor(Math.random() * 50) + 10
      );
    });
  }

  getAccounts() {
    return this.#accounts;
  }

  createAccount(account) {
    let nextId = Math.max(...this.#accounts.map((account) => account.id)) + 1;
    if (nextId === null) {
      nextId = 1;
    }

    const newAccount = new Account(
      nextId,
      account.firstName,
      account.lastName,
      account.age
    );

    this.#accounts.push(newAccount);
    return newAccount;
  }

  updateAccount(account, id) {
    const index = this.#accounts.findIndex((a) => a.id === id);
    this.#accounts[index] = account;
    return account;
  }

  removeAccount(id) {
    const index = this.#accounts.findIndex((a) => a.id === id);
    this.#accounts.splice(index, 1);
  }
}
