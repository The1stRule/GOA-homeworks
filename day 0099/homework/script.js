
// ### 1. **Create a Class with Public Properties**
//   - Define a `Car` class with public properties `make` and `model`. Create an instance and access these properties.

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

const car1 = new Car("Toyota", "Prado");

console.log(car1.make);
console.log(car1.model);

// ### 2. **Use Private Properties**
//   - Define a `BankAccount` class where `balance` is a private property.
// Implement a public method to deposit and withdraw money from the account.

class BankAccount {
    #balance;
    constructor(balance) {
        this.#balance = balance;
    }
    
    deposit(amount) {
        this.#balance += amount;
    }
    
    withdraw(amount) {
        this.#balance -= amount;
    }
}

const account1 = new BankAccount(10000);

account1.deposit(500);
account1.withdraw(250);

// ### 3. **Static Methods and Properties**
//   - Create a `MathOperations` class with a static method `add()` that adds two numbers. Also,
// define a static property `PI` representing the value of Pi.

class MathOperations {
    static pi = Math.PI;
    
    static add(num1, num2) {
        return num1 + num2;
    }
}

console.log(MathOperations.add(5, 2));

// ### 4. **Use Getters and Setters**
//   - Define a `Rectangle` class with properties `width` and `height`.
// Use a getter to calculate and return the area of the rectangle. Also,
// include a setter that ensures width and height are always positive numbers.

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    get area() {
        return this.width * this.height;
    }
    
    set changeWidth(value) {
        if(value <= 0) {
            return "The number must be positive.";
        }
        
        this.width = value;
    }
    
    set changeHeight(value) {
        if(value <= 0) {
            return "The number must be positive.";
        }
        
        this.height = value;
    }
}

const rectangle = new Rectangle(10, 20);

rectangle.changeWidth = 20;
rectangle.changeHeight = -20;
console.log(rectangle.area);

// ### 5. **Private Methods**
//   - Create a `User` class where a private method `validatePassword()` checks the strength of the password.
// The method should only be used internally when setting a password.

class User {
    constructor(password) {
        this.password = password;
        this.#validatePassword(password);
    }
    
    #validatePassword(pass) {
        if(pass.length < 6) {
            console.log("Easy!");
        } else if(pass.length >= 6 && pass.length < 8) {
            console.log("Medium!");
        } else {
            console.log("Hard!");
        }
    }
}

const user1 = new User("1234");

// ### 6. **Private Properties with Getters and Setters**
//   - Define a `Book` class where the title is public, but the number of pages is private.
// Implement getters and setters to access and modify the number of pages.

class Book {
    #pages;
    
    constructor(title, pages) {
        this.title = title;
        this.#pages = pages;
    }
    
    get pages() {
        return this.#pages;
    }
    
    set changePages(value) {
        this.#pages = value;
    }
}

const book = new Book("The Great Adventure", 350);

book.changePages = 250
console.log(book.pages);

// ### 7. **Static Method for Instance Counting**
//   - Create a `Player` class where each time an instance is created,
// a static method `getPlayerCount()` keeps track of how many players have been created.

class Player {
    static #count = 0;

    constructor(name) {
        this.name = name;
        Player.getPlayerCount();
    }

    static getPlayerCount() {
        Player.#count += 1;
        console.log(Player.#count);
    }
}

const player1 = new Player("Loser1");
const player2 = new Player("Loser2");
const player3 = new Player("Loser3");
const player4 = new Player("Loser4");

// ### 8. **Class Inheritance with Private Properties**
//   - Create a `Vehicle` class with private properties like `speed`. Then, create a `Bike` subclass
// that can access public methods to modify or retrieve the speed.

class Vehicle {
    #speed;

    constructor(speed) {
        this.#speed = speed;
    }

    get speed() {
        return this.#speed;
    }

    set speed(value) {
        if(value < 0) {
            console.log("Speed cannot be negative!");
        } else {
            this.#speed = value;
        }
    }
}

class Bike extends Vehicle {
    constructor(speed) {
        super(speed);
    }
}

const bike = new Bike(20);

bike.speed = 30;
console.log(bike.speed);

bike.speed = -20
console.log(bike.speed)

// ### 9. **Static Method for Comparison**
//   - Define a `Student` class with a static method `compareGrades(student1, student2)` that compares the grades of two student instances.

class Student {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    static compareGrades(student1, student2) {
        if (student1.score > student2.score) {
            console.log(`${student1.name} has a higher grade than ${student2.name}.`);
        } else if (student1.score < student2.score) {
            console.log(`${student2.name} has a higher grade than ${student1.name}.`);
        } else {
            console.log(`${student1.name} and ${student2.name} have the same grade.`);
        } 
    }
}

const student1 = new Student("Alice", 92);
const student2 = new Student("Bob", 100);

Student.compareGrades(student1, student2);