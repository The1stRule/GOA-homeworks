
// Task 7

// შექმენით ფუნქცია სახელად manualFilter რომელსაც პირველი გადაეცემა ფუნქცია და მეორე მასივი, ამ ფუნქციაში
// უნდა გამოიყენოთ for ციკლი და გადაუარეთ გადმოცემულ მასივს, გამოიყენეთ if და გამოიძახეთ გადმოცემული
// ფუნქცია ამჟამინდელ ინდექსზე მდგომი მნიშნელობით, თუ დაბრუნებული მნიშნელობა არის true დაამატეთ ახალ
// მასივში და თუ არის false არ დაამატოთ ახალ მასივში, როცა მორჩება for ციკლის მუშაობა დააბრუნეთ ახალი
// მასივი=, გადაცემული ფუნქციიდან აუცილებლად უნდა ბრუნდებოეს boolean მნიშვნელობა, და უნდა იღებდეს ერთ
// მნიშნელობას გადაცემულ ფუნქციაში რას შეამოწმებთ თქვენზეა დამოკიდებული

function ifEven(indexValue){
    return indexValue % 2 === 0;
}

function manualFilter(myFunc, array){
    const newArray = [];
    for(let i = 0; i < array.length; i++){
        if(myFunc(array[i])){
            newArray.push(array[i])
        }
    }
    return newArray;
}

console.log(manualFilter(ifEven,[17,18,20,31,45,50,100]))