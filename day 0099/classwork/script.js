
// Task 1

const form = document.querySelector('form');

class UserRegistration {
    static #usersDataBase = [];
    static count = 0;
    #email;
    #password;

    constructor(fullname, email, password) {
        this.fullname = fullname;
        this.#email = email;
        this.#password = password;
        UserRegistration.#addUser(this);
        UserRegistration.userCounter();
    }

    get getPass() {
        return this.#password;
    }

    get getEmail() {
        return this.#email;
    }

    static get users() {
        return this.#usersDataBase;
    }

    set changePassword(value) {
        this.#password = value;
    }

    set changeEmail(value) {
        this.#email = value;
    }

    static validateForm(fullname, email, password) {
        if(fullname === '' || email === '' || password === '') {
            return "Please fill out all fields!";
        }

        if(password.length < 8) {
            return "Password is too short!";
        }

        return true;
    }

    static userCounter() {
        UserRegistration.count += 1;
        console.log(`Users count: ${UserRegistration.count}`);
    }

    static #addUser(user) {
        UserRegistration.users.push(user);
        console.log(UserRegistration.#usersDataBase);
    }

    printDetails() {
        console.log(`Fullname: ${this.fullname}`);
        console.log(`Email: ${this.getEmail}`);
        console.log(`Password: ${this.getPass}`);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullname = form.fullname.value;
    const email = form.email.value;
    const pass = form.password.value;

    const validateResult = UserRegistration.validateForm(fullname, email, pass);

    if(validateResult === true) {
        const user = new UserRegistration(fullname, email, pass);
        
        alert("Registration completed successfully!");

        user.printDetails();
    } else {
        alert(validateResult);
    }

    form.reset();
})