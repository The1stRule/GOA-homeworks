
// Task 3

// შექმენით ჯეირანის თამაში რომელშიც გექნებათ ქვა, მაკრატელი, ჭა. გექნებათ 3 ღილაკი არჩევანის
// შესაბამისად ღილაკზე ხელის დაჭერსისას უნდა შეინახოს ჩვენი არჩევანი და აწარმოოს კომპიუტერის არჩევანი.
// საბოლოოდ შეადარეთ კომპიუტერისა და მომხმარებლის არჩევანი და დაითვალეთ ქულები, ფრე, მოგება და წაგება

const scores = document.getElementsByTagName('span');
const result = document.getElementById('result');
const mainArray = ['Rock', 'Paper', 'Scissors'];

function presentational(res, scoreIndex) {
    result.textContent = res;
    const number = scores[scoreIndex].textContent;
    scores[scoreIndex].textContent = Number(number) + 1;
}

function container(chois) {
    const pcChois = random()
    let res;
    let scoreIndex;
    if(chois === 'Rock' && pcChois === 'Scissors') {
        res = 'Win!';
        scoreIndex = 0;
    } else if(chois === 'Scissors' && pcChois === 'Paper') {
        res = 'Win!';
        scoreIndex = 0;
    } else if(chois === 'Paper' && pcChois === 'Rock') {
        res = 'Win!';
        scoreIndex = 0;
    } else if(chois === pcChois) {
        res = 'Draw!';
        scoreIndex = 2;
    } else {
        res = 'Lose';
        scoreIndex = 1;
    }
    console.log(chois, pcChois);
    presentational(res, scoreIndex);
}

function random() {
    const random = Math.floor(Math.random() * 3);
    return mainArray[random];
}