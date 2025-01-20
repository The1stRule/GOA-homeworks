
// შექმენით სარეგისტრაციო ფორმა, სადაც მომხმარებელი შემოიტანს 3 მნიშვნელობას, პირველი სახელი,
// მეორე გვარი და მესამე ემაილი, ჯავასკრიპტის დახმარებით ეს მნიშვნელობები დადასტურებს შემდეგ უნდა
// წამოიღოთ და შექმნათ ობიექტი რომელსაც დაამატებთ database მასივში, ობიექტი უნდა შეიქმნასს კონსტრუქტორის
// დახმარებით, კონსტრუქტორს დააქრვით Account, შემდეგ კი კომენტარებით ახსენით რას აკეთებს new და this

const form = document.getElementById('myForm');
const btn = document.getElementById('btn');

let database = [];

function Account(name, surname, email){
    this.name = name,
    this.surname = surname,
    this.email = email;
}

function signUp(){
    const name = form.elements.name.value;
    const surname = form.elements.surname.value;
    const email = form.elements.email.value;

    if(name === '' || surname === '' || email === ''){
        alert('Please fill in all fields');
        return;
    }

    // new არის ქეივორდი, რომელიც ქმნის ცარიელ ობიექტს. ეს ობიექტი გადაეცემა Account კონსტრუქტორს, ხოლო
    // this ქეივორდი გადმოცემულ ცარიელ ობიექტში ჩაამატებს საჭირო კუთვნილებებს(მოახდენს ობიექტის ინიციალიზებას).
    
    const user = new Account(name, surname, email)
    database.push(user);
    console.log(database);

    // clearing all fields

    form.name.value = '';
    form.surname.value = '';
    form.email.value = '';

    // form.reset();
}

// calling function
btn.onclick = signUp;