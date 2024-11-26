
// Task 3

// Classes & Maps

// 1. **კლასი `Map`-ით და მეთოდით**: შექმენი კლასი `Library`, რომელსაც ექნება `Map`,
// რომელიც ინახავს წიგნის სახელებს და ავტორებს. დაამატე მეთოდი `addBook(title, author)`, რომელიც დაამატებს ახალ წყვილს `Map`-ში.

class Library {
    static books = new Map();
    constructor(title, author) {
        this.title = title;
        this.author = author;
        Library.addBook(title, author);
    }
    
    static addBook(title, author) {
        Library.books.set(title, author);
        console.log(Library.books);
    }
}

const book1 = new Library("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Library("To Kill a Mockingbird", "Harper Lee");

// 2. **Map კლასის თვისებად**: შექმენი კლასი `Store`, რომელსაც ექნება `Map`,
// რომელიც ინახავს პროდუქტის სახელს და ფასს. დაამატე მეთოდი `getPrice(product)`, რომელიც დააბრუნებს პროდუქტის ფასს.

class Store {
    static products = new Map([["Product A", 100], ["Product B", 250]]);
    
    static getPrice(product) {
        return Store.products.get(product);
    }
}

console.log(Store.getPrice("Product A"));
console.log(Store.getPrice("Product B"));

// 3. **Map-თან მუშაობის მეთოდების შექმნა**: შექმენი კლასი `PhoneBook`, რომელსაც ექნება `Map`,
// რომელიც ინახავს ტელეფონის ნომრებს და ადამიანების სახელებს.
// დაამატე მეთოდი `addContact(name, phone)` და `getContact(phone)`, რომელიც დააბრუნებს ნომრის პატრონს.

class PhoneBook {
    constructor() {
        this.contacts = new Map();
    }
  
    addContact(name, phone) {
        this.contacts.set(phone, name);
    }

    getContact(phone) {
        return this.contacts.get(phone);
        
    }
}

const phoneBook = new PhoneBook();


phoneBook.addContact("John", "11223");
phoneBook.addContact("Alice", "12345");
phoneBook.addContact("Bob", "67890");

console.log(phoneBook.getContact("11223"));
console.log(phoneBook.getContact("12345"));
console.log(phoneBook.getContact("67890"));

// 4. **კლასი `Map`-ის ელემენტების ჩამონათვალით**: შექმენი კლასი `Zoo`, რომელსაც ექნება `Map`
// ცხოველების სახელებით და მათი რაოდენობებით. დაამატე მეთოდი `listAnimals()`,
// რომელიც დააბრუნებს `Map`-ში არსებულ ყველა ცხოველის ჩამონათვალს.

class Zoo {
    static animals = new Map([["Lion", 2], ["Elephant", 3], ["Deer", 4]]);
    
    static listAnimals() {
        return Array.from(Zoo.animals.keys());
    }
}

console.log(Zoo.listAnimals());

// 5. **Map და მემკვიდრეობა**: შექმენი მშობელი კლასი `Inventory`, რომელსაც ექნება `Map` ნივთების სახელებით და რაოდენობებით.
// მემკვიდრეობით მიიღე კლასი `StoreInventory`, რომელიც დაამატებს დამატებით მეთოდს `getStock(item)`.

class Inventory {
    static items = new Map([["Apple", 50], ["Banana", 100], ["Orange", 75]]);
}

class StoreInventory extends Inventory {
    static getStock(item) {
        return StoreInventory.items.get(item);
    }
}

console.log(StoreInventory.getStock("Apple"));
console.log(StoreInventory.getStock("Banana"));
console.log(StoreInventory.getStock("Orange"));

// 6. **Map-ის დამუშავება კლასის მეთოდებით**: შექმენი კლასი `Classroom`, რომელსაც ექნება `Map`,
// რომელიც ინახავს სტუდენტების ID-ებს და მათ ქულებს. დაამატე მეთოდები `addStudent(id, score)`
// და `getAverageScore()`, რომელიც გამოთვლის ყველა სტუდენტის საშუალო ქულას.

class Classroom {
    constructor() {
        this.score = new Map();
    }
    
    addStudent(id, score) {
        this.score.set(id, score);
    }
    
    getAverageScore() {
        const sum = Array.from(this.score).reduce((acc, curValue) => acc + curValue[1], 0);
        return Math.round(sum / this.score.size);
    }
}

const studentsScore = new Classroom();

studentsScore.addStudent("1", 100);
studentsScore.addStudent("2", 97);
studentsScore.addStudent("3", 95);

console.log(studentsScore.getAverageScore());


// 7. **Map და კონსტრუქტორის ინიციალიზაცია**: შექმენი კლასი `CountryDirectory`,
// რომელსაც კონსტრუქტორში `Map`-ად გადაეცემა ქვეყნების სახელები და დედაქალაქები.
// დაამატე მეთოდი `getCapital(country)`, რომელიც დააბრუნებს ქვეყნის დედაქალაქს.

class CountryDirectory {
    constructor() {
        this.capitals = new Map([["Georgia", "Tbilisi"], ["France", "Paris"]]);
    }
    
    getCapital(country) {
        return this.capitals.get(country);
    }
}

const capitals = new CountryDirectory();

console.log(capitals.getCapital("Georgia"));
console.log(capitals.getCapital("France")); 

// 8. **Map-ის გამოყენება კლასის ინტერაქტიულობისთვის**: შექმენი კლასი `ShoppingCart`,
// რომელსაც ექნება `Map`, რომელიც ინახავს პროდუქტებს და მათ რაოდენობას. დაამატე მეთოდები
// `addItem(product, quantity)` და `getTotalItems()`, რომელიც დააბრუნებს ყველა პროდუქტების რაოდენობას.

class ShoppingCart {
    constructor() {
        this.products = new Map();
    }
    
    addItem(product, quantity) {
        this.products.set(product, quantity);
    }
    
    getTotalItems() {
        return Array.from(this.products.values()).reduce((acc, curValue) => acc + curValue);
    }
}

const cart = new ShoppingCart();

cart.addItem("Product A", 2);
cart.addItem("Product B", 3);
cart.addItem("Product C", 5);

console.log(cart.getTotalItems());

// 9. **Map-თან მუშაობა კონსტრუქტორის მეშვეობით**: შექმენი კლასი `RestaurantMenu`,
// რომელსაც კონსტრუქტორის მეშვეობით გადაეცემა `Map`-ად კერძების სახელები და მათი ფასები.
// დაამატე მეთოდი `getItemPrice(item)`, რომელიც დააბრუნებს შესაბამის კერძის ფასს.

class RestaurantMenu {
    constructor(...menu) {
        this.menu = new Map(menu);
    }
    
    getItemPrice(item) {
        return this.menu.get(item);
    }
}

const menu = new RestaurantMenu(["Pizza", 20], ["Tacos al Pastor", 50], ["Ribeye Steak", 35]);

console.log(menu.getItemPrice("Pizza"));
console.log(menu.getItemPrice("Tacos al Pastor"));
console.log(menu.getItemPrice("Ribeye Steak"));

// 10. **Map-ის გაერთიანება კლასში და ინფორმაციის დალაგება**: შექმენი კლასი `StudentGrades`,
// რომელიც მიიღებს `Map`-ს სტუდენტების სახელებით და ქულებით. დაამატე მეთოდი `getTopStudent()`,
// რომელიც დააბრუნებს საუკეთესო ქულის მქონე სტუდენტის სახელს.

class StudentGrades {
    constructor() {
        this.students = new Map([["John", 100], ["Alice", 95], ["Bob", 97]]);
    }
    
    getTopStudent() {
        return Array.from(this.students).reduce((acc, curValue) => {
            if(curValue[1] > acc[1]) {
                return curValue;
            }
            return acc;
        }, ["", 0])[0];
    }
}

const students = new StudentGrades();

console.log(students.getTopStudent());