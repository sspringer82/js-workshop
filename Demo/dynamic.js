function getInstance(className) {
  switch (className) {
    case 'A':
      return new A();
    case 'B':
      return new B();
    default:
      throw new Error('not found');
  }
}

const instance = getInstance('A');
instance.exec();
const instance2 = getInstance('B');
instance2.exec();
