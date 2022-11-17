var myVar = 'Hallo Welt'; // veraltet - function scope

let myVar2 = 'Hallo Welt'; // block scope Variable

const myVar3 = 'Hallo Welt'; // block scope Konstante - immer nutzen, außer ich muss den Inhalt verändern

const string = 'Hallo Welt';
// string = 42; TypeError

// Objekte möglichst immer const!
const obj = {
  name: 'Klaus',
};
// obj = true; TypeError
obj.name = 'Claudia'; // geht
