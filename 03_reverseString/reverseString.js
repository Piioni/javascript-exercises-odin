const reverseString = function(string) {
    // Split the string into an array of characters
    const charArray = string.split('');

    // Reverse the array of characters
    const reversedArray = charArray.reverse();

    // Join the reversed array back into a string
    return reversedArray.join('');



};

// Do not edit below this line
module.exports = reverseString;
