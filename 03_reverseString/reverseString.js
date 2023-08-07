const reverseString = function(stringBefore) {
    let stringAfter = "";
    for (let i = stringBefore.length; i >= 0; i--){
        stringAfter += stringBefore.charAt(i);
    }
    return stringAfter;
};

// Do not edit below this line
module.exports = reverseString;
