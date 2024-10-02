const removeFromArray = function(array, ...theArgs) {
    console.log(`Array inicial: ${array}`);
    const toRemove = Array.from(theArgs);
    console.log(`toRemove: ${toRemove}`);
    let k = 0;
    while(k < toRemove.length){
        for(let i = 0 ; i <= array.length ; i++){
            if (array[i] === toRemove[k]){
                array.splice(i,1);
                i--;
            }
        }
        k++;
    }
    console.log(`Array Final: ${array}`);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
