const sumAll = function(numberInput1, numberInput2) {
    let sumAllResult = 0;
    if (isNaN(numberInput1) || isNaN(numberInput2)) {
        return "ERROR";
    }
    if ((numberInput1 < 0) || (numberInput2 < 0)) {
        return "ERROR";
    }
    if ((typeof numberInput1 !== "number") || (typeof numberInput2 !== "number")) {
        return "ERROR";
    }
    if (numberInput1 < numberInput2){
        numberInputLow = numberInput1;
        numberInputHigh = numberInput2;
    } else {
        numberInputHigh = numberInput1;
        numberInputLow = numberInput2;
    }
    for (let numberInputLow = 0; numberInputLow <= numberInputHigh; numberInputLow++) {
        sumAllResult = (sumAllResult + numberInputLow);
    }
    return sumAllResult;
};

// Do not edit below this line
module.exports = sumAll;
