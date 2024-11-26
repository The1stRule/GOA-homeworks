
// Task 2

// Maps

// 1. **Map-ის ინიციალიზაცია მონაცემებით**: შექმენი `Map`, რომელიც ინახავს სამ ქალაქს და მათ მოსახლეობას.

// 2. **Map-ის ელემენტის განახლება**: იმავე `Map`-ში, რაც წინა დავალებაში შექმენი, განაახლე ერთი ქალაქის მოსახლეობა ახალი მნიშვნელობით.

const cityPopulation = new Map([["Tbilisi", 1100000], ["Batumi", 164000], ["Kutaisi", 185000]]);

cityPopulation.set("Tbilisi", 1130000);

console.log(cityPopulation);

// 3. **Map-ის `for...of` ციკლი**: შექმენი `Map`, რომელიც ინახავს ვალუტის კოდებს და მათ სახელებს
// (მაგ., "USD" => "Dollar"). გამოიყენე `for...of` ციკლი, რათა თითოეული წყვილი გამოიტანო.

const valutes = new Map([
    ["USD", "United States Dollar"],
    ["EUR", "Euro"],
    ["GEL", "Georgian Lari"]]);
    
for(const valute of valutes) {
    console.log(`${valute[0]}: ${valute[1]}`);
}

// 4. **მრავალი Map-ის გაერთიანება**: შექმენი ორი `Map`. პირველი `Map` შეიცავდეს პროდუქტებს და მათ ფასებს,
// ხოლო მეორე `Map` - პროდუქტებს და მათი რაოდენობებს. გამოიყენე `forEach()` მეთოდი, რათა ახალი `Map` შექმნა,
// რომელიც ინახავს თითოეული პროდუქტის მთლიან ფასს (ფასი * რაოდენობა).

const productsPrice = new Map([["Laptrop", 2000], ["Headset", 120]]);
const productsQuantity = new Map([["Laptrop", 1], ["Headset", 2]]);

const products1 = new Map();

productsQuantity.forEach((curValue, curKey) => {
    products1.set(curKey, curValue * productsPrice.get(curKey));
});

console.log(products1);

// 5. **Map-ის კლონი**: შექმენი `Map`, რომელიც შეიცავს ქვეყნის სახელებს და მათ დედაქალაქებს.
// შექმენი ახალი `Map`, რომელიც ამ `Map`-ის სრული კლონი იქნება.

const countriesAndCapitals = new Map([
    ["Georgia", "Tbilisi"],
    ["USA", "Washington, D.C."]
]);

const copyCountriesAndCapitals = new Map([...countriesAndCapitals]);

console.log(countriesAndCapitals);
console.log(copyCountriesAndCapitals);

// 6. **Map-ის ელემენტების დათვლა**: შექმენი `Map`, რომელიც ინახავს სხვადასხვა კომპიუტერული
// თამაშის დასახელებებს და მათი რეიტინგებს. გამოიყენე `size` თვისება, რათა დაადგინო რამდენი თამაშია `Map`-ში.

const rating = new Map([["One", 1], ["Two", 2]]);

console.log(rating.size);

// 7. **თითოეული ელემენტის წაშლა Map-იდან**: შექმენი `Map` სამი სხვადასხვა პროდუქტის დასახელებით და ფასით.
// შემდეგ წაშალე თითოეული ელემენტი `delete()` მეთოდის გამოყენებით და დაბეჭდე შეტყობინება, რომ პროდუქტი წაიშალა.

const products2 = new Map([["Laptrop", 2000], ["Headset", 120], ["PC mouse", 50]]);

products2.forEach((_, curKey) => {
    products2.delete(curKey)
    console.log(`${curKey} is deleted`);
});

console.log(products2);


// 8. **Map და მასივის გარდაქმნა**: შექმენი `Map`, რომელიც ინახავს სპორტის სახეობებს და მათთვის
// საჭირო მოთამაშეების რაოდენობას. გამოიყენე `Array.from()` და გარდაქმენი ეს `Map` მასივად.

const sports = new Map([["Chess", 1], ["Football", 11], ["BasketBall", 5]]);

const sportsArray = Array.from(sports);

console.log(sportsArray);

// 9. **Map-ის ძიება მნიშვნელობებით**: შექმენი `Map`, რომელიც ინახავს ცხოველების დასახელებებს
// და მათ საცხოვრებელ გარემოს (მაგ., "Lion" => "Savannah"). მოძებნე ყველა ცხოველი,
// რომელიც ცხოვრობს გარკვეულ გარემოში (მაგალითად, "Savannah").

const animalsMap = new Map([
    ["Lion", "Savannah"],
    ["Elephant", "Savannah"],
    ["Penguin", "Antarctica"],
    ["Kangaroo", "Australia"],
    ["Panda", "China"],
    ["Polar Bear", "Arctic"]
]);

const newAnimals = new Map();

animalsMap.forEach((curValue, curKey) => {
    if(curValue === "Savannah") {
        newAnimals.set(curKey, curValue);
    }
});

console.log(newAnimals);

// 10. **Map-ის დაგროვება Reduce-ით**: შექმენი `Map`, რომელიც ინახავს სტუდენტების დასახელებებს და მათ ქულებს.
// გამოიყენე `Array.from()` და `reduce()` მეთოდი, რათა ამ სტუდენტების საშუალო ქულა გამოთვალო.

const students = new Map([
    ["Alice", 85],
    ["Bob", 90],
    ["Charlie", 78],
    ["David", 92],
    ["Eva", 88]
]);

const scoresSum = Array.from(students).reduce((acc, curValue) => acc + curValue[1], 0);

console.log(scoresSum / students.size);