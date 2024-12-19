
// Task 1

// შექმენით 2 ფაილი, პირველ ფაილში შექმენით 2 ფუნქცია, greet და calculateAverage.
// თქვენი დავალებაა რომ ეს ფუნქციები გადაიტანოთ მეორე index.js ფაილში, commonJS-ის დახმარებით, გამოიყენეთ import/export

const greet = require('./greet');
const calculateAverage = require('./calculateAverage');

greet("Nika");
console.log(calculateAverage([1,2,3,4,5]));