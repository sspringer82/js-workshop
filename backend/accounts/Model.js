import Account from './Account.js';

export default class Model {
  #accounts = [];

  constructor() {
    this.#accounts = [
      new Account(1, 'Claudia', 'Meier', 24),
      new Account(2, 'Klaus', 'Müller', 42),
      new Account(3, 'Lisa', 'Schmitt', 24),
      new Account(4, 'Rüdiger', 'Müller', 42),
    ];
  }

  getAccounts() {
    return this.#accounts;
  }

  createAccount(account) {
    const nextId = Math.max(...this.#accounts.map((account) => account.id)) + 1;
    const newAccount = { ...account, id: nextId };
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
