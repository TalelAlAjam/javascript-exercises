const removeFromArray = function(arrayInput,...arrayToRemove) {
    let arrayOutput = arrayInput.filter(arrayValue => !arrayToRemove.includes(arrayValue))
    return arrayOutput;
};
// Do not edit below this line
module.exports = removeFromArray;
