/*const score = 500
console.log(score);

const newScore = new Number(80)
console.log(newScore);

console.log(newScore.toString().length);*/
//Now the number has converted to string and we know that in string we can check the length of the number

const number = 98.3695
console.log(number.toPrecision(4));
//Gives a precise value and the number in the bracket is used for after how many digits it will give a precise value

const hundreds = 10000000000
console.log(hundreds.toLocaleString('en-In'));
//It is used to give commas between large numbers to identify them easily