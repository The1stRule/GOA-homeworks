
// Task 4

// 1. **Double the Numbers (map)**
//    - Create an array of numbers. Use `map()` to return a new array where each number is doubled.

let numbers = [1,2,3,4,5];

const dubledNums = numbers.map(curValue => curValue * 2);
console.log(dubledNums);

// 2. **Filter Even Numbers (filter)**
//    - Given an array of numbers, use `filter()` to return a new array containing only the even numbers.

const evenNums = numbers.filter(curValue => curValue % 2 === 0);
console.log(evenNums);

// 3. **Square of Numbers (map)**
//    - Create an array of numbers. Use `map()` to return a new array where each number is squared.

const squaredNums = numbers.map(curValue => curValue ** 2);
console.log(squaredNums);

// 4. **Extract Long Names (filter)**
//    - Create an array of names. Use `filter()` to return a new array of names longer than 5 characters.

const names = ["Alice", "Bob", "Charlotte", "Daniel", "Eve", "Franklin", "Grace"];

const newNames = names.filter(curValue => curValue.length > 5);
console.log(newNames);

// 5. **Capitalize First Letter (map)**
//    - Create an array of strings. Use `map()` to return a new array where the first letter of each string is capitalized.

const strings = ["apple", "banana", "cherry"];
const capitalizedStrings = strings.map(curValue => {
    return curValue[0].toUpperCase() + curValue.slice(1);
})

console.log(capitalizedStrings);

// 6. **Sum All Numbers (forEach)**
//    - Given an array of numbers, use `forEach()` to iterate through the array and find the sum of all numbers.

numbers = [12, 45, 7, 83, 29, 56, 98, 3, 71, 66];
let sum = 0;

numbers.forEach(curValue => sum += curValue);
console.log(sum);

// 7. **Remove Short Words (filter)**
//    - Create an array of words. Use `filter()` to return a new array containing only words that are longer than 3 characters.

let words = ["apple", "is", "banana", "at", "cherry", "on", "dog"];

let newWords = words.filter(curValue => curValue.length > 3);
console.log(newWords);

// 8. **Add Prefix to Words (map)**
//    - Create an array of words. Use `map()` to add the prefix "super" to each word and return a new array.

words = ["hero", "man", "star", "power"];
newWords = words.map(curValue => "super" + curValue);
console.log(newWords);

// 9. **Filter Odd Numbers (filter)**
//    - Given an array of numbers, use `filter()` to return a new array containing only the odd numbers.

numbers = [12, 45, 7, 83, 29, 56, 98, 3, 71, 66];
const oddNums = numbers.filter(curValue => curValue % 2 !== 0);
console.log(oddNums);

// 10. **Log Each Element (forEach)**
//    - Create an array of numbers. Use `forEach()` to log each element of the array to the console.

numbers = [1,2,3,4,5];
numbers.forEach(curValue => {
    console.log(curValue);
})