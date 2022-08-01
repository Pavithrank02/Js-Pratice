// function calcAge(birthYear) {
//     const age = 2022 - birthYear;
//     return age
// }

// const firstName = 'Pavi';
// calcAge(1997); 
'use strict'
console.log(this);
const calcAge = function (birthYear) {
   console.log(2022 - birthYear)
    console.log(this);
};
calcAge(1997);