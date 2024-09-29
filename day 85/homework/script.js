
// codewars

// 6 kyu

// Multiples of 3 or 5

function solution(number){
    let sum = 0;
    for(let i = 3; i < number; i++){
      if(i % 3 === 0 || i % 5 === 0){
        sum += i;
      }
    }
    return sum;
}

console.log(solution(10));

// Sort the odd

function sortArray(array) {
    const result = [];
    const oddNumbers = [];
    
    for(let i = 0; i < array.length; i++){
      if(array[i] % 2 !== 0){
        oddNumbers.push(array[i]);
      }
    }
    oddNumbers.sort(function(a, b){
      return a - b;
    })
    let index = 0;
    
    for(let i = 0; i < array.length; i++){
      if(array[i] % 2 === 0){
        result.push(array[i]);
      } else {
        result.push(oddNumbers[index]);
        index += 1;
      }
    }
    return result;
}