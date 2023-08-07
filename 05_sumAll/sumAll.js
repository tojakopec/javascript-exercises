const sumAll = function(lowerBound, upperBound) {
    let totalSum = 0;
    let arrayRange = [];
    if (!(Number.isInteger(lowerBound) && Number.isInteger(upperBound))){
        return "ERROR";
    }
    if (lowerBound < 0 || upperBound < 0){
        return "ERROR";
        }
    if (lowerBound > upperBound){
        for (let i = lowerBound; i >= upperBound; i--){
            arrayRange.push(i);
            totalSum += i;
        }
    }
    else if (lowerBound < upperBound){
        for (let i = lowerBound; i <= upperBound; i++){
            arrayRange.push(i);
            totalSum += i;
        }
    }
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
