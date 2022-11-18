import createTable from './account-table.js';

// sicherstellen, dass alles geladen ist
document.addEventListener('DOMContentLoaded', async () => {
  // fetch('http://localhost:8080/accounts')
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     createTable(document.querySelector('#account-list'), data);
  //   })
  //   .catch((error) => console.error(error));

  try {
    const response = await fetch('http://localhost:8080/accounts');
    const data = await response.json();
    createTable(document.querySelector('#account-list'), data);
  } catch (error) {
    console.error(error);
  }
});
