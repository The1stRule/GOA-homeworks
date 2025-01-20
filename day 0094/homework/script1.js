
// Task 1

// 1. **Filter Prime Numbers**
//   - Create an array of numbers and use `filter()` to return only the prime numbers.

let numbers = [2, 4, 7, 10, 13, 15, 17, 20, 23, 25];

const filteredPrimes = numbers.filter(curValue => {
    for(let i = 2; i < curValue; i++) {
        if(curValue % i === 0) {
            return false;
        }
    }
    return true;
})

console.log(filteredPrimes);

// 2. **Map to Object Conversion**
//   - Given an array of objects (e.g., users with `id` and `name`), use `map()` to create an array of strings that contains only the names.

const users = [
    { id: 1, name: "Nika" },
    { id: 2, name: "Luka" },
    { id: 3, name: "Zuka" }
];

const usersNames = users.map(curValue => curValue.name);

console.log(usersNames);

// 4. **Filter Objects by Property**
//   - Given an array of objects representing products (each having a `name` and `price`), use `filter()` to return products that are cheaper than a certain value.

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Smartphone", price: 600 },
    { name: "Smartwatch", price: 250 },
    { name: "Wireless Earbuds", price: 150 }
];

const filteredProducts = products.filter(curValue => curValue.price <= 500);

console.log(filteredProducts);


// 5. **Map Complex Transformations**
//   - Create an array of objects representing books (with `title` and `author`). Use `map()` to return an array of strings in the format: `"Title by Author"`.

const books = [
  { title: "The Odyssey", author: "Homer" },
  { title: "War and Peace", author: "Leo Tolstoy" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "The Hobbit", author: "J.R.R. Tolkien" }
];

const booksAuthors = books.map(curValue => `${curValue.title} by ${curValue.author}`);

console.log(booksAuthors);

// 6. **Filter Numbers Based on Multiple Conditions**
//   - Given an array of numbers, use `filter()` to return numbers that are both greater than 10 and divisible by 3.

numbers = [5, 12, 15, 22, 30, 9, 18, 25, 33, 10];

const filteredNums = numbers.filter(curValue => curValue > 10 && curValue % 3 === 0);

console.log(filteredNums);


// 7. **Modify Array of Objects (map)**
//   - Given an array of objects representing users with a `name` and `age`, use `map()` to return a new array where all users are considered adults (i.e., add a new `isAdult` property based on their age).

const usersArr = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 15 }
];

const newUsersArr = usersArr.map(curValue => {
    if(curValue.age >= 18) {
        curValue.isAdult = true;
    } else {
        curValue.isAdult = false;
    }
    
    return curValue;
})

console.log(newUsersArr);

// 8. **Chaining map and filter**
//   - Create an array of numbers. First, use `filter()` to return numbers greater than 50. Then, use `map()` to halve those numbers.

numbers = [10, 55, 72, 34, 90, 45, 60, 12, 100];

const filteredNumbers = numbers.filter(curValue => curValue > 50);
const result = filteredNumbers.map(curValue => curValue / 2);

console.log(filteredNumbers);
console.log(result);


// 9. **Log Word Frequencies (forEach)**
//   - Create an array of words. Use `forEach()` to create an object that tracks how many times each word appears in the array.

const wordsArray = ["apple", "banana", "apple", "orange", "banana", "kiwi", "apple"];

const words = {};

wordsArray.forEach(curValue => {
    if(!(curValue in words)) {
        words[curValue] = 1;
    } else {
        words[curValue]++;
    }
})

console.log(words);


// 10. **Filter Objects by Nested Property**
//   - Given an array of objects representing cars (with nested objects for `brand` and `model`), use `filter()` to return only cars of a specific brand.

const sportsCars = [
  { brand: { name: "Ferrari" }, model: "F8 Tributo" },
  { brand: { name: "Porsche" }, model: "911 Turbo" },
  { brand: { name: "Lamborghini" }, model: "Aventador" },
  { brand: { name: "Audi" }, model: "R8" }
];

const newSportCars = sportsCars.filter(curValue => curValue.brand.name === "Ferrari");

console.log(newSportCars);