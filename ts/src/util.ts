type Params = { name: string; age: string };
// type OtherParams = Params & { address: { street: string } };

// interface Params {
//   name: string;
// }

// interface Params {
//   age: string;
// }
// class Foo implments Params {}

export function saySomething(person: Params): string {
  return `Hello ${person.name} (${person.age})`;
}

type Person = {
  id: number;
  name: string;
  age: number;
};

type InputPerson = Omit<Person, 'id'>;

function createPerson(newPerson: InputPerson): Person {
  // magic
  const result = { ...newPerson, id: Math.random() };
  return result;
}

const newKlaus = {
  name: 'Klaus',
  age: 42,
};
const createdKlaus = createPerson(newKlaus);
console.log(createdKlaus);
