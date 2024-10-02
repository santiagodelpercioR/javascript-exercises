const palindromes = function (string) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let arr = string
        .toLowerCase()
        .split('')
        .filter(letra => alphanumerical.includes(letra))
        .join('');

    const reversedString = arr.split('').reverse().join('');

    return arr == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
