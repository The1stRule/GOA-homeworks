
// Task 6

// შექმენით ფუნქცია სახელად manualSlice რომელსაც გადაეცემა პირველი მასივი, და ორი რიცხვი
// საწყისის ინდექსი და დასასრულის ინდექსი, თქვენი დავალებაა გადმოცემული ინდექსიდან
// მეორე ინდექსამდე ჩამოაჭრათ სიას ნაწილი და დააბრუნოთ ფუნქციიდან. გამოიყენეთ for ციკლი

function manualSlice(array, startIndex, endIndex){
    const slicedArray = [];
    let index = 0;
    for(let i = startIndex; i < endIndex; i++){
        slicedArray[index] = array[i];
        index++;
    }
    return slicedArray;
}

manualSlice(["apple","banana","orange","pear"], 0, 2);