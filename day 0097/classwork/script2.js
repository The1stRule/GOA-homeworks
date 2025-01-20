
// Task 3

// შექმენით ერთი სარეგისტრაციო ფორმა, სადაც გექნებათ მინიმუმ 5 შესატანი ველი, სახელი, გვარი, იმეილი პაროლი და საცხვორებელი ქალაქი,
// როდესაც ფორმა დადასტურდება მიღებუილი მონაცემებით უნდა იქმნდებოდეს ახალი ობიექტი კლასსის დახმარებით რომლის სახელიც
// არის Account შექმნილი ობიექტი კი უნდა ემატებოდეს მასივში სახელად accounts, დაამატეთ კლასს მეთოდი სახელად
//  printDetails რომელიც დაბეჭდავს კონკრეული ობიექტის ინფორმაციას რომელზეც გამოვიძახეთ

const form = document.getElementById('myForm');

const accounts = [];

class Account {
    constructor(firstname, lastname, email, password, city) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.city = city;
    }

    printDetails() {
        console.log(`Firstname: ${this.firstname}`);
        console.log(`Lastname: ${this.lastname}`);
        console.log(`Email: ${this.email}`);
        console.log(`Password: ${this.password}`);
        console.log(`City: ${this.city}`)
    }
}

const printAllAccounts = () => accounts;

const validateForm = (...rest) => {
    for(const value of rest) {
        if(value === '') {
            return false;
        }
    }
    return true;
}

const formSubmit = () => {
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const email = form.email.value;
    const pass = form.password.value;
    const city = form.city.value;

    if(!validateForm(firstname, lastname, email, pass, city)) {
        alert('Please fill out all fields');
        return;
    }

    const acc = new Account(firstname, lastname, email, pass, city);

    accounts.push(acc);
    
    acc.printDetails();
    console.log(printAllAccounts());

    form.reset();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    formSubmit();
})