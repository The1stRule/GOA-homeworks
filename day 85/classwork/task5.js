
// Task 5

// შექმენით ფუნქცია სახელად manualReverse რომესლაც გადმოეცემა სია, და უნდა დააბრუნოთ შემოტრიალებული ვერსია სიის

function manualReverse(array){
    const newArray = [];
    let index = 0;
    for(let i = array.length - 1; i >= 0; i--){
        newArray[index] = array[i];
        index++;
    }
    return newArray;
}

manualReverse([1,2,3,4,5]);