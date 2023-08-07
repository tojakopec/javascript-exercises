const repeatString = function(inputString, repeatTimes) {
    if (repeatTimes < 0) {
        return "ERROR";
    }
    let newString = ""
    for (let i = 0; i < repeatTimes; i++){
        newString += inputString;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
