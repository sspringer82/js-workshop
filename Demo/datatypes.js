// primitive types (by-value)
const boolean = true;
const number = 42;
const number1 = 3.14;
const number2 = 0xaff;
const number3 = Number.MAX_SAFE_INTEGER;
const bigInt = 42n;
const bigInt2 = BigInt(42);
const veryBig =
  BigInt(Number.MAX_SAFE_INTEGER) ** BigInt(Number.MAX_SAFE_INTEGER);
const s1 = 'Hallo "Welt"';
const s2 = "Hallo 'Welt'";
const name = 'Klaus';
const s3 = `Hallo ${1 + 1}`; // template string
// interpolation
// mehrzeiligkeit
// tagging functions

const nichts = null; // kein wert - gehört uns
const nichts2 = undefined; // kein wert - gehört der engine - keine Zuweisung

const symbol = Symbol('Hallo');

// composite types (by-reference)

// object literal
const obj = {
  name: 'Klaus',
  age: 42,
  address: {
    street: 'Main street',
  },
  getName() {
    return this.name + ' ' + this.age;
  },
};

console.log(obj.age); // 42
obj.age = 43;
console.log(obj.age); // 43
const property = 'name';
console.log(obj[property]); // 'Klaus'
console.log(obj.getName()); // Klaus 42

// Array
const arr = new Array(); // Array Constructor - eher selten
const arr2 = [1, 2, 3, 'hallo welt', true]; // Array literal
console.log(arr2[0]); // 1
const arr3 = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(arr3[0][1]); // 2
