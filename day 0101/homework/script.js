
// Task 1

// Classes

// 1. **კლასის შექმნა და ინიციალიზაცია**: შექმენი კლასი `User`, რომელსაც ექნება თვისებები `name` და `email`.
// კონსტრუქტორის მეშვეობით ინიციალიზაცია გაუკეთე ამ თვისებებს და შექმენი რამდენიმე `User` ობიექტი.

// 2. **მეთოდის შექმნა და გამოძახება**: დაამატე `User` კლასს მეთოდი `displayInfo()`,
// რომელიც კონსოლში დაბეჭდავს მომხმარებლის სახელს და ელფოსტას. შექმენი რამდენიმე `User` ობიექტი და გამოძახე ეს მეთოდი თითოეულზე.

// 3. **სტატიკური მეთოდების გამოყენება**: დაამატე `User` კლასს სტატიკური მეთოდი `compareUsers(user1, user2)`,
// რომელიც შეადარებს ორ მომხმარებელს მათი `email`-ის მიხედვით. სცადე ამ მეთოდის გამოძახება ორ `User` ობიექტზე.

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
    }
    
    static compareUsers(user1, user2) {
        if(user1.email == user2.email) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

const user1 = new User("Nika", "nika@gmail.com");
const user2 = new User("Luka", "luka@gmail.com");

user1.displayInfo();
user2.displayInfo();

User.compareUsers(user1, user2);

// 4. **Getters და Setters**: შექმენი კლასი `Product`, რომელსაც ექნება `name` და `price` თვისებები.
// გამოიყენე `get` და `set` accessors `price`-ისათვის, რათა დარწმუნდე, რომ ფასი მხოლოდ დადებითი მნიშვნელობაა.

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    get getPrice() {
        return this.price;
    }
    
    set changePrice(value) {
        if(value > 0) {
            this.price = value;
        } else {
            console.log("Price must be a positive number");
        }
    }
}

const product1 = new Product("Product A", 100);

product1.changePrice = 250;
console.log(product1.getPrice);
product1.changePrice = -20;

// 5. **მემკვიდრეობა და კონსტრუქტორების მემკვიდრეობა**: შექმენი მშობელი კლასი `Person` და შვილკლასი `Student`.
// `Person`-ს ექნება `name` და `age`, ხოლო `Student` დაამატებს `studentID` თვისებას. 
// მემკვიდრეობისას გამოიძახე მშობელი კლასის კონსტრუქტორი `super()`-ით.

// 6. **Method Overriding**: იმავე `Person` და `Student` კლასებში, შექმენი მეთოდი `getDetails()`,
// რომელიც `Person` კლასში დაბეჭდავს მხოლოდ სახელს და ასაკს, ხოლო `Student`-ში ასევე სტუდენტის ID-ს. 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    getDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    }
}

class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }
    
    getDetails() {
        super.getDetails();
        console.log(`StudentID: ${this.studentID}`);
    }
}

const student = new Student("John", 20, 1);

console.log(student);
student.getDetails();

// 7. **Static თვისებები და მეთოდები**: შექმენი კლასი `Counter`, რომელსაც ექნება სტატიკური თვისება `count`
// და სტატიკური მეთოდი `increment()`, რომელიც `count`-ს 1-ით გაზრდის.

class Counter {
    static count = 0;
    
    static increment() {
        Counter.count += 1;
    }
}

Counter.increment();
Counter.increment();

console.log(Counter.count);

// 8. **კლასების მასივი**: შექმენი კლასი `Book` და შექმენი ამ კლასის რამდენიმე ობიექტი მასივში.
// შემდეგ გამოიყენე `forEach()` რათა ყველა წიგნის სათაური დაბეჭდო.

class Book {
    static books = [];
    
    constructor(title) {
        this.title = title;
        Book.addBook(this);
    }
    
    static addBook(book) {
        Book.books.push(book);
    }
    
    static printAllBooks() {
        Book.books.forEach((curValue) => {
            console.log(curValue.title);
        });
    }
}

const book1 = new Book("The Great Gatsby");
const book2 = new Book("To Kill a Mockingbird");
const book3 = new Book("The Hobbit");

Book.printAllBooks();