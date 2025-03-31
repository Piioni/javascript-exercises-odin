const sumAll = function(num1, num2) {
    // Check if both inputs are numbers
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }
    // Check if both inputs are integers
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    }
    // Check if both inputs are positive
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    // Swap numbers if num1 is greater than num2
    if (num1 > num2) {
        [num1, num2] = [num2, num1];
    }
    // Calculate the sum of all integers between num1 and num2 (inclusive)
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
