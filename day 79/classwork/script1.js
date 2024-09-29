
// Task 2

// შექმენით HTML-ში ფორმა სადაც მომხმარებელს შემოატანინებთ თავის სრულ სახელს, ემაილს,
//  პაროლს, საყვარელ ფერს. შემდეგ javascirpt-ის დახმარებით მოახდინეთ form-ის ვალიდაცია,
//  როდესაც sumbit ღილაკზე დაკლიკება მოხდება შეამოწმეთ ყველა ველი შევსებულია თუ არა, შესაბამისად
//  დაუბეჭდეთ რომ ყველა ველი შევსებულია ან არ არის შევსებული. კომენტარებით ახსენით ყველაფერი

// accessing HTML Form and button
const form = document.getElementById('myForm');
const btn = document.getElementById('btn');

// define function to validate form
function validateForm(){
    // accessing input fields from HTML form
    const fullname = form.elements.fullname.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const favColor = form.elements.favColor.value;

    // checking if all input fields were filled

    if(fullname == '' || email == '' || password == ''|| favColor == ''){
        alert('Please fill in all fields');
        return;
    }

    // logging information
    console.log('Form submitted successfully');

    console.log('Fullname:', fullname);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Favorite color:", favColor);
}

// calling function
btn.onclick = validateForm;