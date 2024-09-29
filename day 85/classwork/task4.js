
// Task 4

// შექმენით ფუნქცია სახელად manualIndexOf რომელსაც გადაეცემა მნიშნელობა და სია, თქვენი დავალებაა
// ფუნქციიდან დააბრუნოთ ნაპოვნი მნბიშნელობის ინდექსი, თუ გადმოცემული მნიშნელობა სიაში არ მოიძებნა დააბრუნეთ -1

function manualIndexOf(element, array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === element){
            return i;
        }
    }
    return -1;
}

manualIndexOf(5, [1,2,3,4,5]);