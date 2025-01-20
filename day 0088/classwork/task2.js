
// Task 2

// გექნებათ 1 ღილაკი, ღილაკზე დაჭერისას უნდა დაემატოს ახალი პარაგრაფი
// შემთხვევითი რიცხვით 0-იდან 1000-მდე დიაპაზონში, body თეგში

const btn = document.getElementById('btn');

btn.addEventListener('click', function() {    
    const random = Math.ceil(Math.random() * 1000);

    const p = document.createElement('p');
    p.textContent= random;

    document.body.appendChild(p);
})