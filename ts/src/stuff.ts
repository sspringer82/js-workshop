type Person = {
  name: string;
  address?: {
    street: string;
  };
};

function printPerson(person?: Person): void {
  if (person) {
    console.log('name: ', person.name);
    console.log('street', person.address?.street); // gibt undefined zurück, wenn person.address undefined ist, kein Fehler
    // console.log('street', person.address!.street); // sagt, dass address definiert ist
  }
}

printPerson();
printPerson({ name: 'Lisa' });
printPerson({ name: 'Claudia', address: { street: 'Hafenstraße' } });
