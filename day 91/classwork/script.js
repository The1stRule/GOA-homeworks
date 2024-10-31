
// Task 1

// შექმენით ელექტრონული მაღაზია სადაც გექნებათ პროდუქტების სექცია, თქვენი დავალებაა
// გქონდეთ დამატების ღილაკი "add to cart" ამ ღილაკზე დაჭერისას უნდა გქონდეთ კალათის
// სექცია სადაც დაემატება კონკრეტული პროდუქტი

const childsArray = document.getElementsByClassName('child');
const cartDiv = document.getElementById('cart');
const totalPrice = document.getElementById('total-p');

function presentational(finalArray, newDiv) {
    for (let i of finalArray) {
        newDiv.appendChild(i);
    }

    newDiv.className = 'section';
    cartDiv.appendChild(newDiv);
}

let total = 0;

function addCart(index) {
    const child = childsArray[index];

    const newDiv = document.createElement('div');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');

    img.src = child.children[0].src;
    h3.textContent = child.children[1].children[0].textContent;
    p1.textContent = child.children[1].children[1].textContent;
    p2.textContent = child.children[2].textContent;

    const finalArray = [img, h3, p1, p2];

    presentational(finalArray, newDiv);

    calculateTotal(p2);
}

function calculateTotal(p2) {
    total += Number(p2.textContent.slice(7,p2.textContent.length - 1));
    totalPrice.textContent = `Total: ${Math.floor(total)}$`;
}