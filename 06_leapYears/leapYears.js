const leapYears = function(inputYear) {
if (Number.isInteger(inputYear/400) || (Number.isInteger((inputYear/4)) && !(Number.isInteger((inputYear/100))))){
    return true;
} else {
    return false;
}
};

// Do not edit below this line
module.exports = leapYears;
