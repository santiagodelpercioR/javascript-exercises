function edad(persona){
    const yearOfDeath = persona.yearOfDeath || new Date().getFullYear();
    return yearOfDeath - persona.yearOfBirth;
}

const findTheOldest = function(array) {
    return array.reduce((acumulador,valorActual) => {        
        if (edad(valorActual) > edad(acumulador)){
            return valorActual;
        }
        else{
            return acumulador;
        }
    },array[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
