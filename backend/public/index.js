import createTable from './account-table.js';

// sicherstellen, dass alles geladen ist
document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:8080/accounts')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      createTable(document.querySelector('#account-list'), data);
    });
});
