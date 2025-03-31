const removeFromArray = function(array, ...args) {
    // Create a new array to store the filtered values
    const filteredArray = [];
    // Loop through each element in the original array
    for (let i = 0; i < array.length; i++) {
        // Check if the current element is not in the args
        if (!args.includes(array[i])) {
            // If not, add it to the filtered array
            filteredArray.push(array[i]);
        }
    }
    // Return the filtered array
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
