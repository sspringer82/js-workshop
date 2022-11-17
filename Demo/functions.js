// named functions
// Deklaration + Definition
function greet(name) {
  return `Hello ${name}`;
}
const result = greet('Klaus'); // Funktionsaufruf
console.log(result); // Hello Klaus

// anonymous function
const greet2 = function (name) {
  return `Hello ${name}`;
};

// Funktionen sind 1st class citizens => können überall verwendet werden, wo normale Werte auch erlaubt sind

// arrow function
const greet3 = (name) => {
  return `Hello ${name}`;
};

// 1. bei einem parameter sind die () optional
// 2. bei einem statement sind die {} optional und statement = return value
// 3. this = der umgebende Kontext

const obj = {
  name: 'Klaus',
  getName() {
    /*
    // mit function verliert ihr "this"
    return function () {
      console.log(this);
      return this.name;
    };
    */
    return () => {
      console.log(this);
      return this.name;
    };
  },
};

const func = obj.getName();
console.log(func());

const arr = [1, 2, 3].map(function (value) {
  return value * value;
}); // [1, 4, 9]

const arr2 = [1, 2, 3].map((value) => value * value); // [1, 4, 9]

// IIFE - immedeatly invoked function expression
(function () {
  console.log('Hallo Welt');
})(); // Ausgabe: Hallo Welt

function add(a, b) {
  return a + b;
}

console.log(add(2, 2)); // 4
console.log(add(2)); // NaN - add(2, undefined)
console.log(add(2, 2, 3)); // 4 - add(2, 2)

function concat() {
  console.log(arguments);
  let result = '';
  for (let i = 0; i < arguments.length; ++i) {
    result += arguments[i];
  }
  return result;
}

concat('a', 'b', 'c'); // abc

function concat2(...args) {
  // alternative 1:
  return args.reduce((prev, curr) => prev + curr, '');
  /*
  // alternative 2:
  let result = '';
  for (let i = 0; i < args.length; ++i) {
    result += args[i];
  }
  return result;
  */
}

// prev = '', curr = a => a
// prev = a, curr = b => ab
// prev = ab, curr = c => abc
console.log(concat2('a', 'b', 'c')); // abc
