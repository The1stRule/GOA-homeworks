
// Task 2

// გამოიყენეთ კუთვნილებები რომელიც ვისწავლეთ, ამ კუთვნილებების დახმარებით მანიპულაცია მოახდინეთ სხვადასხვა
// ელემენტებზე აგრეთვე ახსენით რას ემსახურება ყველა კუთვნილება + გამოიყენეთ getElementsByTagname and
// getElementsByClassname და ახსენით მათი დანიშნულება, რას აბრუნებს და რისგან განსხვავდება სხვა მეთოდებისგან
// კუთვნილებები: parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling 

// getElementById - წამოიღებს ელემენტს id-ის მეშვეობით
const div = document.getElementById('myDiv');

// getElementsByClassName - წამოიღებს ელემენტს ერთნაირი კლასით და ჩასვამს მასივში
const hArray = document.getElementsByClassName('myH');

// getElementsByTagName - წამოიღებს ყველა ელემენტს გადმოცემული თეგით და ჩასვამს მასივში
const pArray = document.getElementsByTagName('p');

// გადაუვლის pArray მასივს და შეცვლის მისი თითოეული ელემენტის ტექსტის კონტენტს
for(let i = 0; i < pArray.length; i++){
    pArray[i].textContent = "Hello";
}

// შეცვლის div-ის მეორე შვილი ელემენტის ტექსტის კონტენტს
div.children[1].textContent = "CSS";

// შეცვლის div-ის პირველი შვილი ელემენტის ტექსტის კონტენტს
div.firstElementChild.textContent = "HTML";

// შეცვლის div-ის ბოლო შვილი ელემენტის ტექსტის კონტენტს
div.lastElementChild.textContent = "JavaScript";

// კონსოლში გამოიტანს div-ის მშობელი ელემენტის ობიექტს
console.log(div.parentElement);

// შეცვლის hArray მასივში არსებული მეორე ელემენტის ზედა დედ-მამიშვილი თეგის ტექსტის კონტენტს
hArray[1].previousElementSibling.textContent = "Main Page";

// შეცვლის div-ის ქვედა  ქვედა დედ-მამიშვილი თეგის ტექსტის კონტენტს
div.nextElementSibling.textContent = "btn";