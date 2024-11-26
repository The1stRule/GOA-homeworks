
// Task 1

// 1. **ძირითადი კლასი და შვილები**: შექმენი ძირითადი კლასი `Animal`,
// რომელსაც ექნება `name` და `age` თვისებები და მეთოდი `speak()`,
// რომელიც გამოაქვეყნებს ტექსტს: "This animal makes a sound."
// შემდეგ შექმენი ორი შვილკლასი `Dog` და `Cat`, რომლებიც მემკვიდრეობით მიიღებენ `Animal`-ს და გააფართოვებენ `speak()`
// მეთოდს ისე, რომ `Dog` კლასი გამოაქვეყნებს "Bark!" და `Cat` - "Meow!".

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    
    speak() {
        super.speak();
        console.log(`Bark!`);
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    
    speak() {
        super.speak();
        console.log(`Meow!`);
    }
}

let dog = new Dog('Rex', 5);
dog.speak();

let cat = new Cat('Whiskers', 3);
cat.speak();

// 2. **მშობლის მეთოდის გამოყენება შვილიდან**: შექმენი კლასი `Vehicle`,
// რომელსაც ექნება თვისებები `make`, `model`, და მეთოდი `displayInfo()`,
// რომელიც კონსოლში დაბეჭდავს მანქანის ინფორმაციას. შემდეგ შექმენი შვილი კლასი `Car`,
// რომელიც მემკვიდრეობით მიიღებს `Vehicle`-ს და დაამატებს თვისებას `fuelType`. გააფართოვე `displayInfo()` მეთოდი ისე,
// რომ ის გამოძახებულ იქნას მშობელი კლასიდან და შემდეგ დაემატოს ახალი ინფორმაცია `fuelType`-ზე.

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    
    displayInfo() {
        console.log(`${this.make} ${this.model}`);
    }
}

class Car extends Vehicle {
    constructor(make, model, fuelType) {
        super(make, model);
        this.fuelType = fuelType;
    }
    
    displayInfo() {
        super.displayInfo();
        console.log(`Fuel Type: ${this.fuelType}`);
    }
}

let myCar = new Car('Toyota', 'Corolla', 'Petrol');
myCar.displayInfo(); 

// 3. **მემკვიდრეობის გამოყენება კონსტრუქტორის მეშვეობით**: შექმენი კლასი `Shape`,
// რომელსაც ექნება კონსტრუქტორი, რომელიც იღებს ორ პარამეტრს: `name` და `sides`.
// შემდეგ შექმენი შვილი კლასი `Triangle`, რომელიც მემკვიდრეობით მიიღებს `Shape`-ს,
// დაამატებს ახალ თვისებას `base` და `height` და შექმნის მეთოდს `calculateArea()`, რომელიც გამოთვლის სამკუთხედის ფართობს.

class Shape {
    constructor(name, sides) {
        this.name = name;
        this.sides = sides;
    }
}

class Triangle extends Shape {
    constructor(name, sides, base, height) {
        super(name, sides);
        this.base = base;
        this.height = height;
    }
    
    calculateArea() {
        return this.base * this.height / 2;
    }
}

const triangle = new Triangle('Triangle', 3, 5, 10);

console.log(triangle.calculateArea());

// 4. **მემკვიდრეობა და მრავალჯერადი გამართვა**: შექმენი ძირითადი კლასი `Appliance`,
// რომელსაც ექნება თვისებები `brand` და `power`, და მეთოდი `turnOn()`,
// რომელიც კონსოლში დაბეჭდავს "The appliance is now on." შემდეგ შექმენი ორი შვილი კლასი `WashingMachine` და `Microwave`.
// `WashingMachine` დაამატებს მეთოდს `washClothes()`, ხოლო `Microwave` დაამატებს მეთოდს `heatFood()`.
// თითოეულ შვილკლასში შეამოწმე მშობლის `turnOn()` მეთოდის მუშაობა.

class Appliance {
    constructor(brand, power) {
        this.brand = brand;
        this.power = power;
    }
    
    turnOn() {
        console.log("The appliance is now on.");
    }
}

class WashingMachine extends Appliance {
    constructor(brand, power) {
        super(brand, power);
    }
    
    washClothes() {
        console.log("The washing machine is washing clothes.");
    }
}

class Microwave extends Appliance {
    constructor(brand, power) {
        super(brand, power);
    }
    
    heatFood() {
        console.log("The microwave is heating food.");
    }
}

let myWashingMachine = new WashingMachine("LG", 1500);
myWashingMachine.turnOn();
myWashingMachine.washClothes();

let myMicrowave = new Microwave("Samsung", 800);
myMicrowave.turnOn();
myMicrowave.heatFood();