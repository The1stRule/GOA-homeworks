
// Task 1-2

// Dynamic Form Validation
// Objective: Implement real-time validation for a password field. 
// The password should be at least 8 characters long. If the password is 
// too short, display a warning message below the input field.

// accessing HTML Form, button and div
const form = document.getElementById('myForm');
const input = document.getElementById('pass')
const btn = document.getElementById('btn');
const message = document.getElementById('message');

message.style.display = 'none';

// define function to validate password

function passValidation(){
    // accessing input fields from HTML form
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    // checking if all input fields were filled

    if(email == '' || password== ''){
        alert('Please fill in all fields');
        return;
    }

    // checking if the password is too short
    if(password.length < 8){
        message.style.display = 'block';
        return;
    }
    else {
        message.style.display = 'none';
    }

    // logging information
    console.log('Form submitted successfully');

    console.log("Email: " + email);
    console.log("Password: " + password);
}

// calling function
btn.onclick = passValidation;

// Task 2

// Clear Form Fields
// Objective: Create a form with multiple input fields.
// Add a "Clear" button that, when clicked, clears all input fields.

// accessing HTML button

const clear = document.getElementById('clear-bt');

// define a function to clear fields
function inputClear(){
    form.email.value = '';
    form.password.value = '';
}

// calling function
clear.onclick = inputClear;