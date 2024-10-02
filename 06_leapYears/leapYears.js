const isDivisibleBy = function(variable, num){
    if (variable % num === 0){
        return true;
    }
    else{
        return false;
    }
};


const leapYears = function(year) {
    if (isDivisibleBy(year, 4) && !isDivisibleBy(year,100)){
        return true;
    }
    else if (isDivisibleBy(year,100) && !isDivisibleBy(year,400)){
        return false;
    }
    else if (isDivisibleBy(year,100) && isDivisibleBy(year,400)){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
