arr1 = [92,85,45,74,85,25,74,15,96]
arr2 = [8,9,7,5,4,6,3,5,1,7,8,9,1,7]
//arr1.push(arr2)
//console.log(arr1);
//console.log(arr2);
/*const allNumbers = arr1.concat(arr2)
console.log( allNumbers)*/
//The concat method is used to combine the arrays and print a new array
const allNewNumbers = [...arr1 , ...arr2]
console.log(allNewNumbers);
//The spread operator is similar to concat operator but we should always prefer spread operator because concat opeator can only merge two arrays but a spread operator can merge more than two arrays.




