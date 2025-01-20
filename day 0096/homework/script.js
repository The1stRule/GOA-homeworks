
// ### **1. Create an Object**
// Create an object `person` with properties: `name`, `age`, and `city`. Log the object to the console.

const person = {
    name: "Jhon",
    age: 20,
    city: "London"
}

console.log(person);

// ### **2. Access Object Properties**
// Given the `person` object, access and log the `name` and `city` properties.

console.log(person.name);
console.log(person.city);

// ### **3. Destructuring an Object**
// Destructure the `name` and `age` properties from the `person` object and log them.

const {name, age} = person;
console.log(name, age);

// ### **4. Nested Object Destructuring**
// Create an object `student` with a `name`, `age`, and a nested `address` object containing `city` and `country`.
// Use destructuring to extract `city` and `country` from the `address`.

const student = {
    name: "Bob",
    age: 17,
    address: {city: "London", country: "UK"}
}

const {city, country} = student.address;

console.log(city, country);

// ### **5. Default Values in Destructuring**
// Create an object `product` with properties `name` and `price`.
// Destructure `name` and `category` from the object, giving `category` a default value of `"general"`.

const product = {
    name: "Product A",
    price: 15
}

const {name: productName, category = "general"} = product;

console.log(productName, category);

// ### **6. Destructure from Function Parameters**
// Write a function `displayCar` that takes an object with properties `brand`,
// `model`, and `year` as a parameter and logs them using destructuring.

const displayCar = ({brand, model, year}) => {
    console.log(brand, model, year);
}

displayCar({brand: "Ferrari", model: "SF90 Stradale", year: 2024});

// ### **7. Rest Operator with Objects**
// Create an object `book` with properties `title`, `author`, `year`, and `publisher`.
// Use the rest operator to collect the `year` and `publisher` into a new object.

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    publisher: "Charles Scribner's Sons"
}

const {title, author, ...restBook} = book;

console.log(title);
console.log(author);
console.log(restBook);

// ### **8. Spread Operator with Objects**
// Create two objects, `user` with properties `name` and `age`,
// and `location` with properties `city` and `country`. Merge them into a new object using the spread operator.

const user = {
    name: "Bob",
    age: 17,
    location: {city: "London", country: "UK"}
}

const {location: locationInfo, ...rest} = user;
const newObj = {...rest, ...locationInfo};

console.log(newObj);

// ### **9. Rest Operator with Function Arguments**
// Write a function `sumNumbers` that takes any number of arguments using the rest operator and returns the sum of the numbers.

const sumNumbers = (...numbers) => {
    return numbers.reduce((acc, curValue) => acc + curValue, 0);
}

console.log(sumNumbers(1,2,3,4,5));

// ### **10. Spread Operator with Arrays**
// Create two arrays, `numbers1` and `numbers2`. Use the spread operator to combine them into one array.

const numbers1 = [1,2,3];
const numbers2 = [4,5];

const newNumbers = [...numbers1, ...numbers2];

console.log(newNumbers);