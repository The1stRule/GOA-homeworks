
// Task 2

// შექმენით 2 ფაილი, პირველში შექმენით greet ფუნქცია და name ცვლადი,
// თქვენი დავალებაა რომ ეს ფუნქცია და ცვლადი გადაიტანოთ მეორე index.js ფაილში,
// module-ის დახმარებით, გამოიყენეთ import/export. კომენტარებით ახსენით რა არის Named export და Default export

import sayHi, {firstname, group} from './greet.js';

sayHi(firstname);

console.log(`Firstname: ${firstname}`);
console.log(`Group: ${group}`);
