// sicherstellen, dass alles geladen ist
document.addEventListener('DOMContentLoaded', () => {
  console.log('a');
  fetch('http://localhost:8080/accounts')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // hier ist eine gute Stelle, um die Tabelle zu füllen
      const table = document.createElement('table');
      const thead = document.createElement('thead');
      table.appendChild(thead);
      const theadRow = document.createElement('tr');
      thead.appendChild(theadRow);
      const thFirstName = document.createElement('th');
      thFirstName.innerText = 'Vorname:';
      theadRow.appendChild(thFirstName);
      const tbody = document.createElement('thead');
      table.appendChild(tbody);
      const accountList = document.querySelector('#account-list');
      accountList.appendChild(table);
    });
  console.log('b');

  const div = document.createElement('div');
  div.innerText = 'Hallo Welt';
  // tag selector: div => <div>
  // class select: .myClass  => <p class="myClass">
  // id selector: #account-list => <h1 id="account-list">
});
