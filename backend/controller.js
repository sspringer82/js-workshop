import Model from './Model.js';

const myModel = new Model();

export function getAllAccounts(request, response) {
  const data = myModel.getAccounts();
  response.json(data);
}
