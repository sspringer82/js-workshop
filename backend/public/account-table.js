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
  const headings = ['Vorname', 'Nachname', 'Username', 'Alter'];
  for (const heading of headings) {
    createElement('th', theadRow, heading);
  }
}

function createTableBody(table, data) {
  const tbody = createElement('tbody', table);
  for (const account of data) {
    const tr = createElement('tr', tbody);
    createElement('td', tr, account.firstName);
    createElement('td', tr, account.lastName);
    createElement('td', tr, account.userName);
    createElement('td', tr, account.age);
  }
}

export default function createTable(target, data) {
  const table = createElement('table', target);
  createTableHeader(table);
  createTableBody(table, data);
}
