
// Task 1

// გააკეთეთ 5-5 მაგალითი while, for and if-else ზე

// while loop

let number = 0;

while(number <= 10){
    console.log(number);
    number += 1;
}

number = 10;

while(number >= 0){
    console.log(number);
    number -= 1;
}

number = 0;

while(number <= 20){
    if(number % 2 === 0){
        console.log(String(number) + " is Even");
    } else {
        console.log(String(number) + " is Odd");
    }
    number += 1;
}

let isAgree = false;

while(isAgree !== true){
    isAgree = confirm('Do you agree to the terms?');
}

let pass;

while(pass !== "nika1234"){
    pass = prompt("Please enter password");
    if(pass === "nika1234"){
        alert("Password is correct");
        break;
    } else {
        alert("Invalid password");
    }
}

// for loop

for(let num = 0; num <= 10; num++){
    console.log(num);
}

number = 0;

for(let num = 0; num < 5; num ++){
    number += Number(prompt("Please enter a number", 10));
}

console.log(number)

let evenNums = []
for(let num = 0; num <= 20; num+=2){
    evenNums.push(num);
}

console.log(evenNums);

let oddNums = []
for(let num = 1; num <= 20; num +=2){
    oddNums.push(num);
}

console.log(oddNums);

let multipliedEven = 1;
for(let i = 1; i < evenNums.length; i++){
    multipliedEven *= evenNums[i];
}

console.log(multipliedEven);

// if/else

if(true || false){
    console.log("True");
}

let boolean = true

if(5 > 10 && boolean){
    console.log("True");
}

const age = 17;
const istudent = true

if(age > 17){
    console.log('Regular price');
} else if(istudent){
    console.log('Discount');
} else{
    console.log('Discount');
}

if(true || false && false){
    console.log("False");
}

let temp = 32;

if(temp > 40){
    console.log("High");
}

// Task 2

// შექმენით ფუნქცია რომელსაც გადაეცემა 2 რიცხვი, start - end, თქვენი მოვალეობაა ამ
// რიცხვებს შორის ყველა რიცხვის გაგება და მასივში შეტანა, საბოლოოდ დააბრუნეთ მასივი

function printNumList(start, end){
    let numbers = [];
    for(let num = start + 1; num < end; num++){
        numbers.push(num);
    }
    return numbers;
}

console.log(printNumList(10, 15));

// Task 3

// დაბრუნებული მასივი გადაეცით ფუნქციას რომელსაც დაარქმევთ calculateAverage ამ ფუნქციაში გამოითვლით
// იმ რიცხვების საშუალოს რომელიც მოთავსებულია სიაში, მიღებული საშულა დააბრუნეთ ფუნქციიდან

function calculateAverage(array){
    const length = array.length;
    let sum = 0;
    for(let i = 0; i < length; i++){
        sum += array[i];
    }
    return sum / length;
}

console.log(calculateAverage(printNumList(0, 4)));

// Task 4

// შექმენით form სადაც გექნებათ 3 შესატანი ველი, სახელი, ემაილი და პაროლი, თქვენი დავალეება როდესაც ფორმა
// დადასტურდება წამოიღთ ჯავასკრიპტში დადასტურებული მნიშნელობები ინფუთებიდან, შექმენით მასივი სახელად dataBase
// ხოლო ყოველი დადასტურებული ინფორმაცია შეინახეთ ამ მასივში ობიექტის სახით, დააუმატეთ უსაფრთხოების ფუნქციონალი
// სადაც გამოიყენებთ for ციკლს, სანამ დაემატება მასივში ობიექტი იქამდე შეამოწმეთ არსებობს თუ არა ისეთი ობიექტი მასივში
// რომელიც ტოლია ახლად დადასტურებული ფორმის ემაილის, თუ ტოლია ალერტით გამოუტანეთ რომ ექაუნთი არსებობს, თუ
// არაა ტოლი მაშინ ალერტით გამოუტანეთ რომ ექაუნთი წარმატებით შექიმნა

const form = document.getElementById('myForm');
const btn = document.getElementById('btn');

let dataBase = [];

function authorization(){
    const userName = form.elements.name.value;
    const userEmail = form.elements.email.value;
    const userPass = form.elements.password.value;

    for(let i = 0; i < dataBase.length; i++){
        if(dataBase[i].email === userEmail){
            alert('This account exists');
            return;
        }
    }

    let user = {
        name: userName,
        email: userEmail,
        passwrod: userPass
    }

    dataBase.push(user);
    console.log(dataBase);
}

btn.onclick = authorization;