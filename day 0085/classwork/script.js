
// Task 1

// ყველა ახალ ნასწავლი მეთოდის გამოყენებით შექმენით თითოეულ მათგანზე 2-2 მაგალითი და ახსენით
// კომენტარებით თქვენი სიტყვებით თუ რას აკეთებს თითოეული მეთოდი (push,pop,unshift,shift, slice, splice)

// .push

let names = [];

console.log(names);

// .push მეთოდი სიის ბოლოში ჩაამატებს ახალ ელემენტს.
names.push("Nika"); // names = ["Nika"]
names.push("Luka"); // names = ["Nika", "Luka"]

console.log(names);

// .pop

// .pop მეთოდი წაშლის სიის ბოლო ელემენტს.
// names = ["Nika", "Luka"]
names.pop(); // names = ["Nika"]
names.pop(); // names = []

console.log(names);

// .unshift

let courses = ["HTML","CSS"];

// .unshift მეთოდი ჩაამატებს ელემენტს სიის თავში.

courses.unshift("JavaScript"); // courses = ["JavaScript", "HTML","CSS"];
courses.unshift("Python"); // courses = ["Python", "JavaScript", "HTML","CSS"];

console.log(courses);

// .shift

let numbers = [1, 2, 3, 4, 5];

// .shift მეთოდი შლის სიის პირველ ელემენტს.
numbers.shift(); // numbers = [2, 3, 4, 5];
numbers.shift(); // numbers = [3, 4, 5];

console.log(numbers);

// .slice

let fruits = ["apple", "banana", "orange"];

// .slice მეთოდს გადაეცემა სამი მნიშვნელობა start, end და step.
// ის ჩამოაჭრის სიას ელემენტებს და დააბრუნებს ახალ სიას.

console.log(fruits.slice(0,2)); // ["apple", "banana"];
console.log(fruits.slice(1,3)); // ["banana", "orange"];

// .splice

// .splice მეთოდს გადაეცემა ორი მნიშვნელობა საწყისი index-ი და ელემენტების
// რაოდენობა რომლსაც ის წაშლის. ეს მეთოდი ცვლის ორიგინალ სიას.

fruits.splice(2, 1);
fruits.splice(0, 2);

console.log(fruits);

// Task 2

// გააკეთეთ 3-3 მაგალითი თითოეულ ეთოდზე და ახსენით თქვენი სიტყვებით
// თუ რას აკეთებს ეს მეთოდები (indexOf, lastIndexOf, includes)

names = ["Nika","Luka","Gio","Nika"];

// .indexOf მეთოდს გადაეცემა ორი მნიშვნელობა, რა უნდა იპოვოს და საიდან დაიწყოს ძებნა.
// ის პოულობს უახლოეს გადმოცემულ ელემენტს და აბრუნებს მის ინდექსს.
// თუ ელემენტი არ მოიძებნა დააბრუნებს -1-ს.

console.log(names.indexOf("Nika"));
console.log(names.indexOf("Luka"));
console.log(names.indexOf("Nika", 1));

// .lastIndexOf

names = ["Nika","Luka","Gio","Luka","Gio","Nika"];

// .lastIndexOf მეთოდს გადაეცემა ორი მნიშვნელობა, რა უნდა იპოვოს და სად დაამთავროს ძებნა.
// ის პოულობს ბოლო გადმოცემულ ელემენტს და აბრუნებს მის ინდექსს.
// თუ ელემენტი არ მოიძებნა დააბრუნებს -1-ს.

console.log(names.lastIndexOf("Nika"));
console.log(names.lastIndexOf("Luka", 2));
console.log(names.lastIndexOf("Gio", -1));

// .includes

fruits = ["apple", "banana", "orange"];

// .includes მეთოდს გადაეცემა ორი მნიშვნელობა, რა უნდა იპოვოს და საიდან დაიწყოს ძებნა.
// საბოლოოდ ის აბრუნებს boolean მნიშვნელობას (true/false),
// რომელიც დამოკიდებულია იმაზე იპოვა თუ არა გადმოცემული ელემენტი სიაში.

console.log(fruits.includes("apple")); // true
console.log(fruits.includes("apple", 1)); // false
console.log(fruits.includes("banana")); // true

// Task 3

// გამოიყენეთ sort მეთოდი რომ დაალაგოთ ელემენტები ზრდადობით შემდეგ კი კლებადობით

numbers = [13,7,23,1,2,];

numbers.sort(function(a, b){
    return a - b;
})

console.log(numbers);

numbers = [13,7,23,1,2,];

numbers.sort(function(a, b){
    return b - a;
})

console.log(numbers);