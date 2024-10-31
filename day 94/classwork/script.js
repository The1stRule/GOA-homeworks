
// Array Iteration Methods

// Task 1

// გამოიყენეთ forEach მეთოდი და გააკეთეთ 2 მაგალითი, ამის შემდეგ თქვენი ხელით შექმენით forEach მეთოდის კლონი


// forEach

const numbers = [1,2,3,4,5];

let sum = 0;

numbers.forEach((curValue) => sum += curValue);

console.log(sum);

const fruits = ["apple", "banana", "cherry"];

fruits.forEach((curValue, index, arr) => {
    if(index % 2 === 0) {
        console.log(`${curValue} value is on Even index`);
    } else {
        console.log(`${curValue} value is on Odd index in arr`);
    }
    
    console.log(arr);
})

// manualForEach
const manualForEach = (arr, func) => {
    for(let i = 0; i < arr.length; i++) {
        func(arr[i], i, arr);
    }
}

manualForEach(fruits, (curValue, index, arr) => {
    if(index % 2 === 0) {
        console.log(`${curValue} value is in Even index`);
    } else {
        console.log(`${curValue} value is in Odd index`);
    }
    
    console.log(arr);
})

// Task 2

// შექმენით მასივი სადაც გექნებათ მინიმუმ 5 სახელი, გამოიყენეთ map მეთოდი და შეამოწმეთ შემდეგი პირობა,
// თუ ინდექსი არის ლუწი მაშინ ახალ მასივში სახელი დაამატეთ დიდი ასოებით სხვა შემთხვევაში თუ კენტია
// დაამატეთ პატარა ასოებით, როცა ამას დაასრულებთ შექმენით  map მეთოდის კლონი და გააკეთეთ იგივე დავალება
// თქვენი კლონით, აუცილებალდ ახსენით რა განსხვავებაა forEach სა და map მეთოდს შორი

// Map

const names = ["Nika", "Luka", "Zuka", "Vano", "Giorgi"];

const newNames = names.map((curValue, index) => {
    if(index % 2 === 0) {
        return curValue.toUpperCase();
    } else {
        return curValue.toLowerCase();
    }
})

console.log(newNames);

// manualMap
const manualMap = (arr, func) => {
    const newNames = [];
    for(let i = 0; i < arr.length; i++) {
        newNames.push(func(arr[i], i));
    }
    return newNames;
}

console.log(manualMap(names, (curValue, index) => {
    if(index % 2 === 0) {
        return curValue.toUpperCase();
    } else {
        return curValue.toLowerCase();
    }
}))

// forEach და map მეთოდები ერთმანეთს ჰგვანან, ორივე მათგანი სიის საიტერაციო მეთოდა, მაგრამ მათ შორის განსხვავება ისაა,
// რომ map მეთოდი აბრუნებს ახალ სიას, ხოლო forEach-ი არა, ის უბრალოდ გადაუცლის მას

// Task 3

// შექმენით მასივი სადაც გექნებათ 5 ობვიექტი, ამ ობიექტებში უნდა იყოს სახელის კუთვნილება და ასაკის კუთვნილება
// რომელშიც შეინახება რიცხვი, თვქენი დავალეება გააკეთით ფილტრაციუა და შექმნათ ორი ახალი მასივი filter iს დახმარებით,
// პირველ მასივში უნდა იყოს მხოლოდ ის ობიექტები რომლები  არიან 18ის ან 18 მეტი ასაკის, ხოლო მეორეში კი 18 ზე ნაკლებიუ,
// ამის გაკეთების შემდეგ შექმენით თვქნეი საკუთარი filter მეთოდის კლონი და იგივე დავალებაა გააკეთეთ კლონის დახმარებით,
// აგრეთვე ახსენით რა განსხვავებაა map სა და filters შორის

const persons = [];

// Object consturctor
function Person(name, age) {
    this.name = name;
    this.age = age;
    persons.push(this)
}

const person1 = new Person("Jhon", 20);
const person2 = new Person("Tom", 17);
const person3 = new Person("Elen", 18);
const person4 = new Person("Kate", 16);
const person5 = new Person("Mark", 21);

// Filter
const adults = persons.filter((curValue) => curValue.age >= 18);
const kids = persons.filter((curValue) => curValue.age < 18);
console.log(adults);
console.log(kids);

// manualFilter
const manualFilter = (arr, func) => {
    newPersons = [];
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i])) {
            newPersons.push(arr[i]);
        }
    }
    
    return newPersons;
}

const adults1 = manualFilter(persons, (curValue) => curValue.age >= 18)
const kids1 = manualFilter(persons, (curValue) => curValue.age < 18);

console.log(adults1);
console.log(kids1);

// Map-ი და filter-ი არიან სიის საიტერაციო მეთოდები, ორივე აბრუნებს ახალ სიას,
// მაგრამ მათ შორის განსხვავება ისაა, რომ ძირითადად map-ი გამოიყენება სიის ელემენტების შესაცვლელად,
// ხოლო filter-ს გადაეცემა პირობა, რომლის მიხედვითაც ის ფილტრავს სიას