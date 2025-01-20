
// Task 4

// HTML-ში შექმენით 1 პარაგრაფი მიანიჭეთ id და onclick, შემდეგ შექმენით 3 ღილაკი, პირველ
//  ღილაკში გეწეროთ yellow, მეორეში black, მესამეში green ღილაკებზე დაკლიკებისას
//  მათი სახელის შესაბამისად უნდა შეიცვალოს ფერი პარაგრაფმა

const p = document.getElementById("my-p");

function colorChange(color){
    p.style.color = color;
}

function bgColorChange(color){
    p.style.backgroundColor = color;
}

document.body.style.textAlign = "center";