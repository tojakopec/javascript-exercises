const removeFromArray = function(arrayToClean, ...args) {
   return arrayToClean.filter(x => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
