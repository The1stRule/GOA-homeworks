
// Task 1-2

// შექმენით ობიექტი და შეინახეთ ცვლადში, ობიექტში საჭირო იქნება
//  კუთვნილებები სახელი, საცხოვრებელი ადგილი, აკადემია

const myInfo = {
    name: "Nika",
    surname: "Kvaratskhelia",
    place: "Georgia",
    academy: "Goal-Oriented-Academy"
};
        
console.log(myInfo);

// HTML-ში შექმენით 2 პარაგრაფი თითოეულს მიანიჭეთ განსხვავებული
//  id, შემდეგ js გამოყენებით წამოიღეთ dom-ის გამოყენებით და შეინახეთ
//  ცვლადში, შემდეგ შეუცვალეთ ტექსტის შიგთავსის კუთვნილება

const p1 = document.getElementById("name");
const p2 = document.getElementById("surname");

p1.textContent = p1.textContent + myInfo.name;
p2.textContent = p2.textContent + myInfo.surname;

console.log(p1.textContent);
console.log(p2.textContent);