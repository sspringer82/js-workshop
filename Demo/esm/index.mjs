import User from './User.js';

const klaus = new User('Klaus', 'Müller');

console.log(await klaus.fullname);
