import { jest } from '@jest/globals';
import Model from './Model.js';

describe('Model', () => {
  it('should create a new Account', () => {
    const model = new Model();
    const newAccount = { firstName: 'Klaus', lastName: 'Müller', age: 42 };

    const result = model.createAccount(newAccount);

    expect(result).toEqual({
      id: 1,
      firstName: 'Klaus',
      lastName: 'Müller',
      age: 42,
      userName: 'kMüller',
    });
  });

  it('should add a new account to an existing array', () => {
    debugger;
    const model = new Model();
    model.fillAccounts(); // + 100 Accounts

    const newAccount = { firstName: 'Klaus', lastName: 'Müller', age: 42 };

    const result = model.createAccount(newAccount);

    expect(result).toEqual({
      id: 100,
      firstName: 'Klaus',
      lastName: 'Müller',
      age: 42,
      userName: 'kMüller',
    });
  });
});
