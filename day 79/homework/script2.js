
// Task 4

// Dropdown Selection and Display
// Objective: Create a form with a dropdown menu (select element) that has
// options like "Red," "Blue," and "Green." When the user selects an option,
// display the selected color in a <div> below the form.

// accessing HTML select and div
const color = document.getElementById('colorSelect');
const display = document.getElementById('colorDisplay');

// change div style
display.style.width = '100px';
display.style.height = '100px';
display.style.fontWeight = 'bolder';

// define a function to change color
function colorChange(){
    display.style.backgroundColor = color.value;
    display.textContent = color.value;
}

// calling function
color.onchange = colorChange;