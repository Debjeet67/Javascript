const name = "Debjeet"
const age = 20
//console.log(name + age + " male ");
//console.log(`Hello my name is ${name} and my age is ${age}`);
const gameName = new String("Debjeet")
console.log(gameName)
console.log(gameName[3])
//console.log(gameName[3]) : in this way we can access the kay value
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt('2'))
console.log(gameName.indexOf('b'))
const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,5)
console.log(anotherString)


