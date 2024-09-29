
// Task 3

// Counting Character Input
// Objective: Create a form with a textarea input. Display a character counter 
// below the textarea that updates in real-time as the user types. The counter 
// should show the number of characters entered out of a maximum limit (e.g., "50/200 characters").

// accessing HTML textarea and span
const textarea = document.getElementById('txtArea');
const span = document.getElementById('counter');

// define a function to count characters
function charCounting(){
    const currentLength = textarea.value.length;
    span.textContent = currentLength + "/200 characters";
}

// calling function
textarea.oninput = charCounting;
// textarea.onchange = countingChar;