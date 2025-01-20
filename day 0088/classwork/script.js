
// Task 1

// შექმენით ფორმა და ცხრილი, ფორმის დადასტურებიისას მონეცემები უნდა დაემატოს ცხრილში
// ახალი რიგის სახით, კომენტარებით ახსენით თითოეული ნაბიჯი, როცა დაასრულებთ პროტოტიპს, შემდეგ
// დაყავით კოდი ორ ნაწილად, კონტეინერ და წარმოსადგენ ფუნქციებად რომ გაამარტივოთ თვქენი კოდი

// წამოვიღეთ form და tbody HTML თეგები
const form = document.getElementById('myForm');
const tbody = document.getElementById('tBody');

// ფუნქცია რომელიც დაამატებს შექმნილ tr-ს tbody თეგში
function presentational(tr) {
    tbody.appendChild(tr);
}

// ფუნცქია რომელიც შექმნის ცხრილის ახალ რიგს და ჩაამატებს მომხმარებლის მიერ შემოტანილ ინფორმაციას
function containter(form) {
    const data = [form.name.value, form.email.value, form.tel.value];

    const tr = document.createElement('tr');

    for(let i = 0; i < data.length; i++) {
        const td = document.createElement('td');
        td.textContent = data[i];
        tr.appendChild(td);
    }

    presentational(tr);
}

// ანონიმუს ფუნქცია რომელიც მოვლენის მსენელით 'submit', რომელიც
// არ დაარეფრეშებს საიტს და გაუშვებს container ფუნქციას როდესაც მოვლენა მოხდება
form.addEventListener('submit', function(e) {
    e.preventDefault();

    containter(form);
})