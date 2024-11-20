
// Task 1

// Objects

// 1)

const user = new Object();

user.name = "Jhon";
user.surname = "Smith";
console.log(user);

user.name = "Peter";
console.log(user);

delete user.name;
console.log(user);

// 2)

const isEmpty = obj => Object.keys(obj).length === 0;

console.log(isEmpty({})); // true
console.log(isEmpty({name: "Jhon"})); // false

// 3)

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

const sumOfSalaries = (obj) => {
    let sum = 0;
    for(const key in obj) {
        sum += obj[key];
    }
    return sum;
}

console.log(sumOfSalaries(salaries));

// 4)

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

const multiplyNumeric = (obj) => {
    for(const key in obj) {
        if(typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu);

// .this

// 5)

const calculator = {
    sum() {
        return this.a + this.b;
    },
    
    mul() {
        return this.a * this.b;
    },
    
    read() {
        this.a = Number(prompt("Enter first number: ", 0));
        this.b = Number(prompt("Enter second number: ", 0));
    },
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

console.log();

// 6)

const ladder = {
    step: 0,
    
    up() {
        this.step++;
        this.showStep();
    },
    
    down() {
        this.step--;
        this.showStep();
    },
    
    showStep() {
        console.log(this.step);
    }
}

ladder.up();
ladder.down();
ladder.up();


// 7)

// new

// ფუნქცია კონსტრუქტორი

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt("Please enter a number: ", 0);
    }
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

console.log(accumulator.value);

// 8)

function User(name) {
    this.name = name;
    // ფუნქცია კონსტრუქტორში, ობიექტის მეთოდის შექმნა.
    this.sayHi = function() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

const user1 = new User("John");

console.log(user1.name);
user1.sayHi();

// 9)

function Product(title) {
    // ვამოწმებთ, არის თუ არა ფუნქცია გამოძახებული new ოპერატორით,
    // თუ არა დააბრუნებს იგივე ფუნქიცას, გამოძახებულს new-ის მეშვეობით.
    // ეს გვაძლევს საშუალებას გამოვიძახოთ ფუნქცია კონსტრუქტორი new ოპერატორის გამოყენების გარეშე.
    if(!new.target) {
        return new Product(title);
    }
    
    this.title = title;
}

const product1 = Product("Product A");
console.log(product1.title);

const product2 = new Product("Product B");
console.log(product2.title);