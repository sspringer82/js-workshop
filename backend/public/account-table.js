function createElement(elementType, parent, content) {
  const element = document.createElement(elementType);
  if (content) {
    element.innerText = content;
  }
  if (parent) {
    parent.appendChild(element);
  }
  return element;
}

function createTableHeader(table) {
  const thead = createElement('thead', table);
  const theadRow = createElement('tr', thead);
  const headings = ['Vorname', 'Nachname', 'Username', 'Alter', 'löschen'];
  for (const heading of headings) {
    createElement('th', theadRow, heading);
  }
}

async function deleteAccount(id) {
  const response = await fetch('http://localhost:8080/accounts/' + id, {
    method: 'DELETE',
  });
  if (response.ok) {
    // zeile löschen
    document.querySelector(`[data-id="${id}"]`).remove();
    console.log('deleted successfully');
  } else {
    console.error('failed');
  }
}

function createTableBody(table, data) {
  const tbody = createElement('tbody', table);
  for (const account of data) {
    const tr = createElement('tr', tbody);
    tr.dataset.id = account.id;
    createElement('td', tr, account.firstName);
    createElement('td', tr, account.lastName);
    createElement('td', tr, account.userName);
    createElement('td', tr, account.age);
    const buttonCell = createElement('td', tr);
    const button = createElement('button', buttonCell, 'löschen');
    button.dataset.deleteId = account.id;
    // button.addEventListener('click', () => {
    //   deleteAccount(account.id);
    // });
  }
}

export default function createTable(target, data) {
  const table = createElement('table');
  table.addEventListener('click', (event) => {
    const data = event.target.dataset;
    if (data.deleteId) {
      deleteAccount(data.deleteId);
    }
  });
  createTableHeader(table);
  createTableBody(table, data);
  target.appendChild(table); // nicht im sichtbaren Bereich arbeiten! Erst am Schluss einhängen
}
