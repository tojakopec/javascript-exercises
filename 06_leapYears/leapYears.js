const leapYears = function(yearInput) {
    let isLeapYear = false;
    if (yearInput % 4 == 0){
        isLeapYear = true;
        if(yearInput % 100 == 0){
            isLeapYear = false;
            if(yearInput % 400 == 0){
                isLeapYear = true;
            }
        }
    }

    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
