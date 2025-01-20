
// Taks 2

// 1. **set() მეთოდის გამოყენება**: შექმენი ცარიელი `Map` და დაამატე მასში რამდენიმე პროდუქტი და მათი ფასები `set()`
// მეთოდის გამოყენებით. შემდეგ თითოეული პროდუქტის დამატებისას კონსოლში დაბეჭდე შეტყობინება, რომ პროდუქტი წარმატებით დაემატა.

const products = new Map();

products.set("Product A", 100);
console.log("Product added successfully");
products.set("Product B", 250)
console.log("Product added successfully");

console.log(products);

// 2. **get() მეთოდის გამოყენება**: უკვე შექმნილი `Map`-დან, გამოიყენე `get()` მეთოდი,
// რათა გარკვეული პროდუქტის ფასი მიიღო და დაბეჭდო კონსოლში.

console.log(products.get("Product A"));
console.log(products.get("Product B"));

// 3. **has() მეთოდის გამოყენება**: შექმენი `Map`, რომელიც ინახავს რამდენიმე ფილმის დასახელებას და მათ გამოშვების წელს.
// გამოიყენე `has()` მეთოდი, რათა შეამოწმო, არის თუ არა `Map`-ში გარკვეული ფილმის დასახელება და შესაბამისად დაბეჭდე შეტყობინება.

const movies = new Map([["The Matrix", "1999-03-31"], ["The Dark Knight", "2008-07-18"]]);

console.log(movies.has("The Dark Knight"));
console.log(movies.has("Fight Club"));

// 4. **delete() მეთოდის გამოყენება**: შექმენი `Map`, რომელიც შეიცავს რამდენიმე სპორტსმენის სახელს და მათ შედეგებს.
// შემდეგ წაშალე ერთ-ერთი სპორტსმენი `delete()` მეთოდის გამოყენებით და დაადასტურე, რომ ის წაშლილია.

const sportsmans = new Map([["Magnus Carlsen", "World Champion, 2021"], ["Garry Kasparov", "Former World Champion, Icon of Chess"]]);

console.log(sportsmans.delete("Magnus Carlsen"));

// 5. **clear() მეთოდის გამოყენება**: შექმენი `Map` რამდენიმე მანქანის ბრენდის და მათი მოდელების შესანახად.
// შემდეგ გამოიყენე `clear()` მეთოდი, რათა მთლიანად დაასუფთავო `Map`. შეამოწმე, რომ `Map` ცარიელია.

const cars = new Map([["Toyota", "Corolla"], ["Honda", "Civic"], ["BMW", "3 Series"], ["Audi", "A4"]]);

cars.clear();

console.log(cars.size);

// 6. **size თვისების გამოყენება**: შექმენი `Map`, რომელიც ინახავს რესტორნების სახელებს და მათი მენიუს პოპულარულ კერძებს.
// გამოიყენე `size` თვისება, რათა კონსოლში დაბეჭდო ამ `Map`-ის ელემენტების რაოდენობა.

const restaurantMenu = new Map([
    ["Italian Bistro", "Pizza Margherita"],
    ["Sushi World", "California Roll"],
    ["Taco Haven", "Tacos al Pastor"],
    ["Steakhouse Prime", "Ribeye Steak"]
]);

console.log(restaurantMenu.size);

// 7. **keys() მეთოდის გამოყენება**: შექმენი `Map`, რომელიც შეიცავს სხვადასხვა ქვეყნის კოდებს და მათ სახელებს.
// გამოიყენე `keys()` მეთოდი, რათა ყველა ქვეყნის კოდი გამოიტანო და დაბეჭდო კონსოლში.

const countries = new Map([["GEO", "Georgia"], ["USA", "America"], ["FRA", "France"]]);

console.log(countries);

console.log(countries.keys());

// 8. **values() მეთოდის გამოყენება**: იმავე `Map`-ში, რომელიც წინა დავალებაში შექმენი, გამოიყენე `values()` მეთოდი,
// რათა ყველა ქვეყნის დასახელება გამოიტანო და დაბეჭდო კონსოლში.

console.log(countries.values());

// 10. **forEach() მეთოდის გამოყენება**: შექმენი `Map`, რომელიც ინახავს სხვადასხვა სასმელის დასახელებას და მათ კალორიებს.
// გამოიყენე `forEach()` მეთოდი, რათა კონსოლში დაბეჭდო თითოეული წყვილი შემდეგი ფორმატით: `"Drink: [name], Calories: [calories]"`.

const drinkCalories = new Map([["Coca Cola", 150], ["Orange Juice", 120], ["Lemonade", 100], ["Water", 0]]);

drinkCalories.forEach((curValue, curKey) => {
    console.log(`Drink: ${curKey}, Calories: ${curValue}`);
});