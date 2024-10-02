const interval = function(num1, num2){
    let intervalArray = [];
    if(num1 > num2){
        for (i = num2; i <= num1; i++){
            intervalArray.push(i);
        }
    }
    else
        for (i = num1; i <= num2; i++){
            intervalArray.push(i);
        }
    return intervalArray;
};

const cumplenRequisitos = function(num1,num2){
    if(num1 < 0 || num2 < 0){
        return false;
    }
    if(!(Number.isInteger(num1)) || !Number.isInteger(num2)){
        return false;
    }
    
    return true;
    

};

const sumAll = function(num1, num2) {
    if(!(cumplenRequisitos(num1,num2))){
        return "ERROR";
    }
    
    let arrayToSum = interval(num1, num2);
    let i = 0;
    let finalSum = 0;
    while(i< arrayToSum.length){
        finalSum += arrayToSum[i];
        i ++;
    }
    return finalSum;
    
};

// Do not edit below this line
module.exports = sumAll;
