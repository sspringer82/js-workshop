"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
const userName = 'Klaus';
console.log('Hallo ' + userName);
let value;
value = 'myName';
// value = 5; // geht nicht!
let value2 = 'myName'; // :string kann ich mir theoretisch sparen
function divide(a, b) {
    if (b === 0) {
        throw new Error('Only Chuck Norris is able to divide by zero');
    }
    const result = a + b;
    return result;
}
const add = function (a, b) {
    return a + b;
};
const sub = (a, b) => {
    return a - b;
};
const klaus = new User_1.default();
