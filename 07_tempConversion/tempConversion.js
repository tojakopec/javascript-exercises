const convertToCelsius = function(tempInput) {
    if(isNaN(tempInput) == true){
      return "ERROR";
    }

    let number = (5/9)*(tempInput-32);
    return (Math.round(number * 10) / 10);
};

const convertToFahrenheit = function(tempInput) {
    if(isNaN(tempInput) == true){
      return "ERROR";
    }

    let number = tempInput * 9/5 + 32;
    return (Math.round(number * 10) / 10);

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
