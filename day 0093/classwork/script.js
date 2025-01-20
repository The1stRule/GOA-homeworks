
// Task 1

// შექმენით მაგალითები var, let, const ახსენით მათ შორის სრული განსხვავება,
// აგრეთვე ახსენით რა არის გლობალური, ლოკალური(ანუ ფუნქციის) და ბლოკის ფარგლები,
// რა განსხვავებაა მათ შორის, აგრეთვე დაწერეთ მაგალითუი სადაც მუშაობს ლექსიკური ფარგლები და ახსენით რა არის ის

// for(let i = 0; i < 5; i++) {
//     var number = 10;
//     let city = "London";
//     const country = "UK";
// }

// console.log(number); // არ გამოიტანს შეცდომას რადგან var-ს არ აქვს ბლოკური ფარგლები(No block scopes).
// ორვიე გამოიტანს შეცდომას, რადგან let-ს და const-ს აქვთ ბოკუი ფარგლები(Have block scopes).
// console.log(city);
// console.log(country);

// შეიძლება თუ არა რეინიციალიზება(can be reassigned).

// var number = 10
// let city = "London";
// const country = "UK";

// let და var keyword-ით შექმნილი ცვლადების რეინიციალიზება შეიძლება.
// number = 20; 
// city = "Paris";
// country = "France"; // კონსტანტის რეინიციალიზება არ შეიძლება.

// let-ს, var-ს და const keyword-ებს გააჩნიათ function scope, ამიტომაც ფუნქციაში შექმნილი ცვლადების გარეთ გამოყენება არ შეიძლება.

// function printInfo() {
//     var number = 10
//     let city = "London";
//     const country = "UK";
// }

// სამივე გამოიტანს შეცდომას
// console.log(number);
// console.log(city);
// console.log(country);

// var keyword-ს გააჩნია global scope, რაც მის გამოყენებას ხდის არაეფექტურს,
// რადგან var-ით შექმნილი ცვლადი ამატებს window ობიექტში კუთვნილებას,
// რის შედეგადაც ის ხელმისაწვდომი ხდება ნებისმიერ ადგილას, ფუნქციის გარეთაც კი თუ მასში არის შექმნილი.
// ესეთი მანიპუაცია window ობიექტზე ძალიან ცუდი პრაქტიკაა და ის ხშირშემთხვევაში ძვირად გვიჯდება.

// var number = 10;
// console.log(window);

// let და const keyword-ებს global scope არ გააჩნიათ

// var keyword-ის ერთ-ერთი მინუსი ის არის, რომ ჩვენ შეგვიძლია მისი რედეკლარაცია, რამაც შეიძლება ხელი შეგვიშალოს

// var number = 10;
// var number = 20;
// console.log(number); // output >>> 20

// let და const keyword-ების რედეკლარაცია არ შეიძლება

// hoisting

// var keyword-ს გააჩნია ჰოისტინგი, რაც ასევე ხდის მის გამოყენებას პრობლემურს,
// რადგან var-ით შექმნილი ცვლადების დეკლარაცია ხდება პირველივე ხაზებზე,
// მაგრამ არ ხდება მათთვის მნიშვნელობების მინიჭება(ინიციალიზება).

// ეს მაგალითი არ გამოიტანს შეცდომას(Error), არამედ underfined-ს, რაც არის ხელის შემშელელი
// console.log(number);

// var number = 10;

// ეს არის იმის მაგალითი თუ, როგორ ხდება var-keyword-ით ცვლადის დეკლარაცია და შემდეგ მისი ინიციალიზება.

// var number;

// console.log(number); // output >>> underfined

// number = 10;

// ჰოისტინგი გვხვდება ასევე ფუნქციებში, რაც იმას ნიშნავს, რომ ფუნცქიის გამოძახება შიძლება მის შექმნამდე,
// მაგრამ var keyword-ისგან განსხვავებით პასუხი დაბრუნდება ჩვულებრივ

// printInfo() // output >>> JavaScript 

// function printInfo() {
//     console.log("JavaScript");
// }


// lexical scope

// ლექსიკური ფარგლები არის ხილვადობა JavaScript-ში, რაც ნიშნავს,
// რომ ცვლადების ხილვადობა დამოკიდებულია იმაზე, თუ სად არიან ისინი შექმნილი.
// ეს ეხმარება ჩაშენებულ ფუნქციებს მიიღონ წვდომა მის გარეთ შექმნილ ცვლადებზე.

// var number = 10;

// function printInfro() {
//     console.log(number);
//     const country = "France";
//     function city() {
//         let city = "London";
//         const country = "UK";
//         console.log(city);
//         console.log(country);
//     }
    
//     city()
// }

// printInfro()