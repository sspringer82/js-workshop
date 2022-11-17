class Library {
  add(a, b) {
    return a + b;
  }

  sub(a, b) {
    return a - b;
  }

  mul(a, b) {
    return a * b;
  }
}

// function Library() {}

// Library.prototype.add = function (a, b) {
//   return a + b;
// };

const originalAdd = Library.prototype.add;
Library.prototype.add = function (a, b) {
  console.log('WRAP');
  return originalAdd(a, b);
};

const lib = new Library();
console.log('original', lib.add(2, 2));

// Funktion überschreiben
class MyChildLib1 extends Library {
  add(a, b) {
    console.log('child');
    return a + b;
  }
}
const lib2 = new MyChildLib1();
console.log('override', lib2.add(2, 2));

// Funktion wrappen
class MyChildLib2 extends Library {
  add(a, b) {
    console.log('child');
    return super.add(a, b);
  }
}
const lib3 = new MyChildLib2();
console.log('wrap', lib3.add(2, 2));

// Funktion erweitern
class MyChildLib3 extends Library {
  add(a, b) {
    console.log('child');
    const result = super.add(a, b);
    return result * 2;
  }
}
const lib4 = new MyChildLib3();
console.log('extend', lib4.add(2, 2));
