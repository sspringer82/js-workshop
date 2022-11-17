// default export wird ohne {} importiert, Name ist frei wählbar
import User from './User.js';
// named exporte werden mit {} importiert, name ist fix!
import myUser, { greet, format as utilFormat } from './util.js';

const klaus = new User('Klaus', 'Müller');
console.log(klaus.fullName);

console.log(greet(klaus));

const format = 'my fancy format';

console.log(utilFormat(klaus));
