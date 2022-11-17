// Konvention: Klassen beginnen mit einem Großbuchstaben, Objekte (Instanzen) mit einem Kleinbuchstaben

class Base {
  a = ''; // public
  #b = 'B'; // private

  constructor(a) {
    this.a = a;
  }

  getA() {
    return this.a;
  }

  // instance.getB();
  getB() {
    return this.#b;
  }

  // instance.b
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
  static myValue = 'my value';

  static {
    Child.myValue = 1 + 2 + 3;
  }

  constructor(value1, value2) {
    super(value1);

    console.log(Child.myValue);
  }

  static createChild(v1, v2) {
    return new Child(v1, v2);
    // return new this(v1, v2); // this === Child
  }
}

const child = new Child();

const child2 = Child.createChild('v1', 'v2');

console.log(Child.myValue);
