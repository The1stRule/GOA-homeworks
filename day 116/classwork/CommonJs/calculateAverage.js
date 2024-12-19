const calculateAverage = (numbers) => {
    const sum = numbers.reduce((acc, curValue) => {
        return acc + curValue;
    }, 0)

    return sum / numbers.length;
}

module.exports = calculateAverage;