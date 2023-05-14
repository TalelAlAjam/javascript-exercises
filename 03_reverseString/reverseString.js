let stringToBeReversed = "";
const reverseString = function(stringToBeReversed) {
    let stringAsArray = stringToBeReversed.split("");
    stringAsArray.reverse();
    return stringAsArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
