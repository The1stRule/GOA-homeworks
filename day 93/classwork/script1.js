
// Task 2

// 1. Basic Arrow Function with a Single Parameter
// Write an arrow function that takes one number as input and returns the cube of that number.

const cube = number => Math.pow(number, 3)

console.log(cube(100));
// 2. Arrow Function with Multiple Parameters
// Create an arrow function that takes two numbers and returns their sum.

const sumOfNums = (a, b) => a + b

console.log(sumOfNums(10, 5));
// 3. Arrow Function Without Parameters
// Write an arrow function that returns the string "Learning JavaScript!"

const printInfo = () => "Learning JavaScript!"

console.log(printInfo());
// 4. Conditional Arrow Function
// Write an arrow function that takes a number and returns "Even" if the number is even and
// "Odd" if the number is odd.

const evenOrOdd = number => {
    if(number % 2 === 0) {
        return "Even"
    }
    return "Odd"
}

console.log(evenOrOdd(100));
// 5. Arrow Function with Default Parameters
// Create an arrow function that takes two numbers and multiplies them. If the second number is not provided, it should default to 1.

const multiplyNums = (num1, num2 = 1) => num1 * num2

console.log(multiplyNums(10));
// 6. Arrow Function Returning an Object
// Write an arrow function that takes two parameters, name and age, and returns an object containing those values.

const person = (name, age) => {
    return {name: name, age: age}
}

console.log(person("Nika", 20));
// 7. Arrow Function for Calculating Factorial
// Create an arrow function that takes a number and returns its factorial.

const claculateFactorial = number => {
    let result = 1;
    for(let i = 2; i < number + 1; i++) {
        result *= i;
    }
    return result;
}

console.log(claculateFactorial(5))
// 8. Arrow Function with Nested Arrow Functions
// Write a function that takes two numbers, and within that function, write another arrow function to return the product of both numbers.

const arrFunc = (num1, num2) => {
    const multiplyNums = (a, b) => a * b
    return multiplyNums(num1, num2);
}

console.log(arrFunc(10, 5));
// 9. Arrow Function for Summing an Array
// Create an arrow function that takes an array of numbers and manually sums them using a loop.

const sumOfNumbers = numbers => {
    let sum = 0;
    for(const i of numbers) {
        sum += i;
    }
    return sum;
}

console.log(sumOfNumbers([1,2,3,4,5,6,7,8,9,10]));

// Arrow ფუნქცია არის ჩვეულებრივი ფუნქციის შემოკლებული სინტაქსი, რომელიც გვაძლევს ფუნქციის ერთ ხაზში დაწერის საშუალებას.
// ფუნქციის შექმნის ეს მეთოდი შემოიტანა ეკმა სკრიპტ 6-მა(ES6) და გამოიყენება კომპლექსური პროგრამების შექმნისას კოდის გასამარტივებლად.
// arrow ფუნქცია ჩვეულებრივისგან განსხვავდება სინტაქსით. ის არ იქმნება function keyword-ით და ინახება ცვლადში ან კონსტანტაში.