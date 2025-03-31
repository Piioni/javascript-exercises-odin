const leapYears = function(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // Check if the year is divisible by 100
        if (year % 100 === 0) {
        // Check if the year is divisible by 400
        return year % 400 === 0;
        }
        return true; // Year is a leap year
    }
    return false; // Year is not a leap year

};

// Do not edit below this line
module.exports = leapYears;
