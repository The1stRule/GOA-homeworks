
// Task 3

// გამოიყენეთ თანამედროვე ES6 import export ბრძანებები, ამისათვის დაგჭირდებათ რომ შექმნათ სამართავლი ფაილი,
// ტერმინალში დაწერეთ npm init, package.json ში დაამატეთ ახალი კუთვნილება სახელად "type" და მიანიჭეთ ის ტიპი,
// რომელიც მხარს უჭერს თანამედრეოვე გზის გამოყენებას

import { greet, firstname, lastname } from "./greet.js";

console.log(greet(firstname, lastname));