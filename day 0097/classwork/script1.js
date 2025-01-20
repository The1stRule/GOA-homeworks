
// Task 2

// 1. Car Class
// Create a Car class with the following properties: make, model, and year.
// Add a method getInfo() that returns a string describing the car, for example:
// "Toyota Camry, 2020".

// 2. Method to Update the Year in Car
// In the Car class, add a method setYear(newYear) that updates the year property with the new value newYear.

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    getInfo() {
        return `${this.make} ${this.model}, ${this.year}`;
    }
    
    setYear(year) {
        this.year = year;
    }
}

const car = new Car("Toyota", "Camry", 2020);

console.log(car.getInfo());
car.setYear(2022);
console.log(car.getInfo());


// 3. Inheritance in the ElectricCar Class
// Create a class ElectricCar that inherits from the Car class. Add a new property batteryCapacity and a method getRange(),
// which will calculate and return the driving range in kilometers (assume 1 kWh of battery capacity gives 5 km of range).

// 4. Override the getInfo() Method in ElectricCar
// In the ElectricCar class, override the getInfo() method to return a string with information about the car,
// model, year, and battery capacity. For example:
// "Tesla Model S, 2022, 100 kWh battery".

class ElectricCar extends Car {
    constructor(make, model, year, batteryCapacity) {
        super(make, model, year);
        this.batteryCapacity = batteryCapacity;
    }
    
    getInfo() {
        return `${this.make} ${this.model}, ${this.year}, ${this.batteryCapacity} kWh battery`;
    }
    
    getRange() {
        return this.batteryCapacity * 5;
    }
}

const tesla = new ElectricCar("Tesla", "Model S", 2022, 100);

console.log(tesla.getInfo());
console.log(tesla.getRange());

// 5. Constructor in the Person Class
// Create a Person class that takes a name and age in the constructor. Add a method greet() that prints a greeting, for example:
// "Hello, my name is [name], and I am [age] years old.".

// 6. Method to Calculate Age
// In the Person class, add a method calculateAge(birthYear), which calculates the age based on the current year and the birth year.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old`);
    }
    
    calculateAge(birthYear) {
        return new Date().getFullYear() - birthYear;
    }
}

const person = new Person("John", 20)

console.log(person.calculateAge(2004));

// 7. Using super() in the Employee Class
// Create an Employee class that inherits from the Person class. Add a new property position. In the greet() method, print a message:
// "Hello, my name is [name], and I work as a [position].".

class Employee extends Person {
    constructor(name, age, position) {
        super(name, age);
        this.position = position;
    }
    
    greet() {
        console.log(`Hello, my name is ${this.name}, and I work as a ${this.position}`);
    }
}

const employee = new Employee("Nika", 20, "Developer");
employee.greet();

// 8. Rectangle Class
// Write a Rectangle class that takes two parameters: width and height.
// Add methods area() and perimeter() that calculate the area and perimeter of the rectangle.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height;
    }
    
    perimeter() {
        return (this.width + this.height) * 2;
    }
}

const rectangle = new Rectangle(10, 15);

console.log(rectangle.area());
console.log(rectangle.perimeter());

// 9. Private Properties in the BankAccount Class
// Create a BankAccount class that has private properties for the balance and account number.
// Implement methods for depositing money, withdrawing money, and checking the balance.
// Make sure the private properties are protected from direct access.

class BankAccount {
    constructor(balance, accNumber) {
        this.balance = balance;
        this.accNumber = accNumber;
    }
    
    checkAccNumber(accNumber) {
        return this.accNumber === accNumber;
    }
    
    checkBalance() {
        if(this.checkAccNumber(prompt('Please enter a account number: '))) {
            return this.balance;
        } else {
            console.log("Incorrect account number");
        }
    }
    
    replenishment(number) {
        if(this.checkAccNumber(prompt('Please enter a account number: '))) {
            this.balance += number;
        }
    }
    
    withdrawal(number) {
        if(this.checkAccNumber(prompt('Please enter a account number: '))) {
            this.balance -= number;
        }
    }
}

const account = new BankAccount(100, "#1234");

console.log(account);
account.replenishment(1500);
console.log(account.checkBalance());
account.withdrawal(200);
console.log(account.checkBalance());

// 10. Method to Convert to JSON
// Write a Book class with properties title, author, and yearPublished.
// Implement a toJSON() method that converts the book object into a JSON string.


class Book {
    constructor(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }
    
    toJSON() {
        return JSON.stringify({
            title: this.title,
            author: this.author,
            yearPublished: this.yearPublished
        })
    }
}

const book1 = new Book("1984", "George Orwell", 1949);

console.log(book1);
console.log(book1.toJSON());

// კლასი არის ობიექტის კონსტრუქციის შაბლონი, რომელიც გვეხმარებ შევქმნათ ერთი და იგივე ტიპის ობიექტი მარტივად.
// JavaScript-ში კლასები დაამატა ES6-მა.

// კლასის შესაქმნელად გამოიყენება მთავარი სიტყვა class. მას გააჩნია კონსტრუქტორის მეთოდი, რითიც ხდება ობიექტის ინიციალიზება.
// შეგვიძლია დავამატოთ სხვა მეთოდებიც. კლასის შექმნა ხდება new ოპერატორის გამოყენებით. ის ქმნის ცარიელ ობიექტს,
// ხოლო შემდეგ მას ენიჭება კლასი.

// კლასს შეიძლება სხვა კლასისგან მემიკვიდრეობით გადავცეთ მეთოდები, ამისათვის გამოიყენება extends და super().
// ეს ამცირებს კოდის ზომას და გვეხმარება მთავარი კლასიდან, შევქმნათ მისი ქვე კლასი(class Animal >>> class Dog extends Animal).