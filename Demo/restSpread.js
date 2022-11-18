// rest Operator
function doIt(...args) {
  let result = 0;
  for (let i = 0; i < args.length; ++i) {
    result += args[i];
  }
  return result;
}

console.log(doIt(1, 2, 3)); // 6

// spread operator

const klaus = {
  name: 'klaus',
  age: 42,
};

const klausKlon2 = klaus; // referenz kopieren

// erzeugt ein neues Objekt
const klausKlon = {
  name: klaus.name,
  age: klaus.age,
};

const klausKlon3 = { ...klaus, status: 'hungry' };
console.log(klausKlon3);

// array spread
const arr = [1, 2, 3];
const arrClone = [...arr];

// flache Kopie!!!
const lisa = {
  name: 'lisa',
  address: {
    street: 'main street',
  },
};

const lisaClone = { ...lisa };

lisaClone.address.street = 'Hafenstraße';

console.log('lisa: ', lisa);
console.log('lisaClone: ', lisaClone);

// tiefe kopie
const maria = {
  name: 'maria',
  address: {
    street: 'main street',
  },
};

const mariaString = JSON.stringify(maria);
const mariaClone = JSON.parse(mariaString);

mariaClone.address.street = 'Burgstraße';

console.log('maria', maria);
console.log('mariaClone', mariaClone);
