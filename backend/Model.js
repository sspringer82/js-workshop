import Account from './Account.js';

export default class Model {
  #accounts = [];

  constructor() {
    this.#accounts = [
      new Account('Claudia', 'Meier', 24),
      new Account('Klaus', 'Müller', 42),
      new Account('Lisa', 'Schmitt', 24),
      new Account('Rüdiger', 'Müller', 42),
    ];
  }

  getAccounts() {
    return this.#accounts;
  }
}
