class Base {
  a = ''; // public
  #b = 'B'; // private

  constructor(a) {
    this.a = a;
  }

  getA() {
    return this.a;
  }

  getB() {
    return this.#b;
  }

  get b() {
    console.log('get B');
    return this.#b;
  }

  set b(value) {
    this.#b = value;
  }
}

const instance = new Base('Klaus');

instance.a = 'asdf';

console.log(instance.b);
instance.b = 'new Value of B';
console.log(instance.b);

console.log(typeof instance); // object
console.log(instance instanceof Base); // true

console.log(instance.getA()); // Klaus
console.log(instance.getB()); // B
console.log(instance.a); // kein Zugriff auf #b

class Child extends Base {
  constructor(value1, value2) {
    super(value1);
  }
}

const child = new Child();
