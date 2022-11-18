import Model from './Model.js';

const myModel = new Model();

export function getAllAccounts(request, response) {
  const data = myModel.getAccounts();
  response.json(data);
}

export function createAccount(request, response) {
  const newAccount = myModel.createAccount(request.body);
  response.status(201);
  response.json(newAccount);
}

export function updateAccount(request, response) {
  const id = parseInt(request.params.id, 10);
  const updatedAccount = myModel.updateAccount(request.body, id);

  response.json(updatedAccount);
}

export function removeAccount(request, response) {
  const id = parseInt(request.params.id, 10);
  myModel.removeAccount(id);
  response.status(204).send();
}

export function fillAccounts(request, response) {
  myModel.fillAccounts();
  response.send();
}
