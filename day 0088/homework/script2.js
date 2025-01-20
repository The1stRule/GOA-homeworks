
// Task 3

// codewars

// Square Every Digit

function squareDigits(num){
    num = String(num);
    result = '';
    for(let i = 0; i < num.length; i++) {
      result += String(Math.pow(Number(num[i]), 2));
    }
    return Number(result);
}

// Descending Order

function descendingOrder(n) {
    if(String(n).length === 1) {
      return n;
    }
    
    let result = [];
    
    for(let i = 0; i < String(n).length; i++) {
      result.push(String(n)[i]);
    }
    
    result.sort(function(b, a) {
      return a - b;
    })
    return Number(result.join(''));
}

// String ends with?

function solution(str, ending){
    return str.slice(str.length - ending.length,) === ending;
}

// Sum of Digits / Digital Root

function digitalRoot(n) {
    n = String(n);
    if(n.length === 1) {
      return Number(n);
    }
    
    let result;
    while(n.length !== 1) {
      result = 0;
      for(let i = 0; i < n.length; i++) {
        result += Number(n[i]);
      }
      n = String(result)
    }
    return result;
}

// Is a number prime?

function isPrime(num) {
    if(num === 2 || num === 3) {
      return true;
    } else if(num <= 1 || num % 2 === 0) {
      return false;
    }
    
    let divide = 3;
    while(divide <= Math.sqrt(num)) {
      if(num % divide === 0) {
        return false;
      }
      divide += 2;
    }
    return true;
}