import User from './User';
import './Collection';
import './stuff';

const userName = 'Klaus';
console.log('Hallo ' + userName);

let value: string;
value = 'myName';
// value = 5; // geht nicht!

let value2: string = 'myName'; // :string kann ich mir theoretisch sparen

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Only Chuck Norris is able to divide by zero');
  }
  const result = a + b;
  return result;
}

const add = function (a: number, b: number): number {
  return a + b;
};

const sub = (a: number, b: number): number => {
  return a - b;
};

const klaus = new User('Lisa', 'Meier');
