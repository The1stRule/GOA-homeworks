const caluclatorObj = {
    "+": function(a, b) {
        return a + b;
    },

    "-": function(a, b) {
        return a - b;
    },

    "*": function(a, b) {
        return a * b;
    },

    "/": function(a, b) {
        return a / b;
    }
}

const calculator = (num1, num2, operation) => {
    return caluclatorObj[`${operation}`](num1, num2);
}

const filter = (numbers, func) => {
    const result = [];
    numbers.forEach((curValue) => {
        if(func(curValue)) {
            result.push(curValue);
        }
    })

    return result;
}

// module.exports არის ობიექტი, რომელიც გვეხმარება node-ის გამშვებ გარემოში დავაექსპორტოთ(გადავიტანოთ) ნებისმიერი კოდი
module.exports.calculator = calculator;
module.exports.filter = filter;