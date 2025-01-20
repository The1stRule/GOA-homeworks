
// Task 3

// შექმენით დივ ბლოკი, რომლის ზომა იქნება 400x400px. ცალკე შექმენით 5 ღილაკი - პირველს
//  დაუწერეთ red, მეორეს blue, მესამეს pink, მეოთხეს black, მეხუთეს კი green. ღილაკების ტექსტის
//  შესაბამისად, მათ დაკლიკებაზე უნდა იცვლებოდეს დივ ბლოკის backgroung ფერი. მაგალითად, თუ
//  დააკლიკებთ ღილაკზე, რომელსაც უწერია green, დივ ბლოკის ფერი უნდა გახდეს მწვანე

const div = document.getElementById("main-div");

div.style.width = "400px";
div.style.height = "400px";
div.style.border = "1px solid black";

function colorChange(color){
    div.style.backgroundColor = color;
}