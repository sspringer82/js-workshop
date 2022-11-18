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
    });
  console.log('b');

  const div = document.createElement('div');
  div.innerText = 'Hallo Welt';
  const accountList = document.querySelector('#account-list');
  // tag selector: div => <div>
  // class select: .myClass  => <p class="myClass">
  // id selector: #account-list => <h1 id="account-list">
  accountList.appendChild(div);
});
