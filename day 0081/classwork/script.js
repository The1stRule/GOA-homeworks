
// შექმენით ფორმა სადაც გექნებათ სახელი, გვარი და ემაილი. როდესაც დადასრტურდება
// ფორმა ეს მონაცემები უნდა შეინახოთ ახალ ობიექტში, ხოლო ახალი შექმნილი ობიექტი
// უნდა წამოიღოთ მასივში, გამოიყენეთ external js, კოდი ახსენით კომენტარების საშვალებით

// accessing HTML Form and button
const form = document.getElementById('myForm');
const btn = document.getElementById('btn');

const users = [];

// define a function to add a new object to the array

function addUser(){
    // accessing input fields from HTML form
    const userName = form.elements.name.value;
    const userSurname = form.elements.surname.value;
    const userEmail = form.elements.email.value;

    // checking if all input fields were filled

    if(userName == '' || userSurname == '' || userEmail == ''){
        alert('Please fill in all fields');
        return;
    }

    // adding an object to an array

    users.push({
        name: userName,
        surname: userSurname,
        email: userEmail
    })

    // displaying username in console
    console.log(users);
}

// calling function
btn.onclick = addUser;