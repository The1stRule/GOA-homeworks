
// Task 2

// შექმენით კლასი გამოიყენეთ ყველა ნასწავლი მასალა და ახსენით კომენტარებით,
// საჯარო და პირადული ველები, set and get methods, static methods, static private fields or methods

// შევქმენი კლასი Account(კლასის სახელი იწერება დიდი ასოთი)

class Account {
    // შევქმენი სტატიკურ-პირადული ველი, რაც იმას ნიშნავს, რომ ამ ველის გამოყენება არ შეიძლება
    // კლასის გარეთ და მასსზე წვდომა ხდება კლასის სახელით
    static #users = [];

    // შევქმენი პირადული ველი, #password, რაც იმასნიშნავს, რომ მასზე ვერ მივიღებ წვდომას კლასის გარეთ
    #password;

    // შევქმენი მეთოდი კონსტრუქტორი(ის აუცილებლად უნდა გააჩნდეს ყველა კლასს), რომლითაც ვახდენ ობიექტის ინიციალიზებას
    constructor(email, password, fullname) {
        // საჯარო ველის კუთვნილებები(email/fullname, მათთან წვდომა შეგვიძლია მივიღოთ კლასის გარეთ)
        this.email = email;
        this.#password = password;
        this.fullname = fullname;
        Account.#addUser(this);
    }

    // get - კლასის მეთოდის ერთ-ერთი ტიპი, რომელიც ნიშნავს მიღებას. მას არ გადაეცემა არგუმენტად არაფერი,
    // მისი ძირითადი დანიშნულებაა უსაფრთხოდ დააბრუნოს სასურველი კუთვნილება
    get password() {
        return this.#password;
    }

    // set - კლასის მეთოდის ერთ-ერთი ტიპი, რომელიც ნიშნავს გაწერას, მას გადაეცემა მხოლოდ ერთი არგუმენტი, 
    // რომლითაც შეცვლის სასურველი კუთვნილების მნიშვნელობას
    set password(value) {
        this.password = value;
    }

    // შევქმენი სტატიკური get(კუთვნილების წამოღების) მეთოდი, რაც ნიშნავს იმას, 
    // რომ ის ეკუთვნის მხოლოდ კლასს და მისი გამოძახება შეიძლება კლასის სახელით
    static get users() {
        return Account.#users;
    }

    static #addUser(user) {
        Account.users.push(user);
    }

    // საჯარო მეთოდი. შეგვიძლია გამოვიძახოთ კლასის გარეთ(ეს მეთოდი Account კლასით შექმნილ ყველა ობიექტს ექნება პროტოტიპში)
    printDetails() {
        console.log(`Fullname: ${this.fullname}`);
        console.log(`Email: ${this.email}`);
    }
}