
// Task 1

// შექმენით ფუნქცია რომელსაც დაარქმევთ even_sum, ამ ფუნქციას ექნება 1 პარამეტრი
// სახელად border (ზღვარი), ფუნქციამ 0-იდან border-ის ჩათვლით უნდა გაიგოს ყველა
// რიცხვი if პირობითი განცხადების საშვალებით, ეს ყველა ლუწი რიცხვი უნდა შეკრიბოთ და დააბრუნოთ

function evenSum(border){
    let result = 0;
    for(let num = 0; num <= border; num++){
        if(num % 2 === 0){
            result += num;
        }
    }
    return result;
}

evenSum(10);

// Task 2

// შექმენით for ციკლი რომლითან 20-იდან 0-ის ჩათვლით ყველა რიცხვს დაბეჭდავთ

for(let num = 20; num >= 0; num--){
    console.log(num);
}

// Task 3

// შექმენით for ციკლი რომელიც 0-იდან 10-ის ჩათვლით ყველა ლუწ რიცხვს დაბეჭდავს, if-ის გამოყენების გარეშე

for(let num = 0; num <= 10; num += 2){
    console.log(num);
}

// Task 4

// შექმენით ფუნქცია რომელსაც დაარქმევთ generate even ამ ფუნქციას უნდა გადაეცემოდეს border, ჩვენი
// დავალებაა რომ შევქმნათ ახალი მასივი შემდეგ მასივში დავამატოთ 0-იდან border-ის ჩათვლით რიცხვები
// და დავაბრუნოთ მასივი, ხოლო დაბუნებული მასივი უნდა გადავცეთ შემდეგ ფუნქციას calculateSum, თქვენი
// დავალებაა რომ for ციკლის საშვალებით გამოიანგარიშოთ ყველა რიცხვის ჯამი და დააბრუნოთ

function generateEven(border){
    let numbers = [];
    for(let num = 0; num <=border; num++){
        if(num % 2 === 0){
            numbers.push(num)
        }
    }
    return numbers;
}

function calculateSum(numArray){
    let sum = 0;
    for(let i = 0; i <= numArray.length - 1; i++){
        sum += numArray[i]
    }
    return sum;
}

console.log(calculateSum(generateEven(50)));

// Task 5

// შექმენით for ციკლი რომლითაც გაიგებთ რიცხვებს 0-იდან 10-ის ჩათვლით, თქვენი
// დავალებაა მასივში დაამატოთ ობიექტი, ობიექტში უნდა გქონდეთ 2 კუთვნილება
// პირველი value (რიცხვი), მეორე type (აქ გაუწერთ ლუწია თუ კენტი)

let array = [];

for(let num = 0; num <= 10; num++){
    const numType = {
        value: num,
        type: ''
    }
    if(num % 2 === 0){
        numType.type = 'Even';
    } else {
        numType.type = 'Odd';
    }
    array.push(numType);
}

console.log(array)

// Task 6

// შექმენით ლოგიკა რომლის მიხედვითაც მომხმარებელს უნდა შემოატანინოთ პაროლი თუ პაროლი სწორია alert-ის
// საშვალებით გამოიტანეთ რომ მას მიეცა წვდომა, ხოლო თუ არასწორია თავიდან შეეკითხეთ პაროლი და მოაკელით
// პაროლის მცდელობა, თავიდან მცდელობები არის 3 თუ მცდელობები ამოიწურა ითიშება while ციკლი, ყოველ ცდაზე
// უნდა გამოუტანოთ მცდელობების რაოდენობა (დაგჭირდებათ while ციკლი და if პირობითი განცხადება)

let attemps = 3;
const password = "nika1234";
let pass;

while(pass !== password){
    pass = prompt("Please enter password")
    if(pass === password){
        alert('Access granted')
        break;
    }

    attemps--;

    if(attemps === 0){
        alert('Access blocked')
        break;
    }

    alert('Invalid password. Attempts: ' + String(attemps))
}