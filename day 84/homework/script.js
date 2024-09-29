
// შექმენით ობიექტის კონსტრუქტორი რომელსაც გადაეცემა 4 მნიშვნელობა
// (თქვენი სურვილით აარჩიეთ თუ რა ტიპის ობიექტს შექმნის კონსტრუქტორი)

const userName = prompt('Enter your name');
const userSurname = prompt('Enter your surname');
const userEmail = prompt('Enter your email');
const userPassword = prompt('Enter your password');

function Account(name, surname, email, password){
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
}

const user = new Account(userName, userSurname, userEmail, userPassword);

console.log(user);