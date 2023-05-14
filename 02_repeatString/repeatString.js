let stringToRepeat = "";
let numberOfTimes = 0;
const repeatString = function(stringToRepeat,numberOfTimes) {
    if (numberOfTimes < 0) {
        return 'ERROR';
    }
    let stringMultiplied = "";
    for (let i = 0; i < numberOfTimes; i++){
        stringMultiplied = stringMultiplied.concat(stringToRepeat);
    }
    return stringMultiplied;
};

// Do not edit below this line
module.exports = repeatString;