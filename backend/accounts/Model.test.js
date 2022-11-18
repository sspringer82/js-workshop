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

  it('should remove an account', () => {
    const model = new Model();
    model.fillAccounts();

    const allAccounts = model.getAccounts();
    const originalLength = allAccounts.length;
    const accountIdToBeDeleted = allAccounts[27].id;

    model.removeAccount(accountIdToBeDeleted);

    const modifiedAccounts = model.getAccounts();
    const doesTheAccountExist = modifiedAccounts.find(
      (account) => account.id === accountIdToBeDeleted
    );

    expect(modifiedAccounts.length).toEqual(originalLength - 1);
    expect(doesTheAccountExist).toBeUndefined();
  });
});
