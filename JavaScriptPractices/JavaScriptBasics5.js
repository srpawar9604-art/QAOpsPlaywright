
const Person = require ('./JavaScriptBasics7')
let day = "tuesday "  // collection of the characters
console.log(day.length)
let substr= day.slice(0,5)
console.log(substr)
console.log(day[0])
let splitday =day.split("s")
console.log(splitday)
console.log(splitday[1].trim())
console.log(splitday[0].trim())
console.log(splitday[1].length)

let date = "23"
let nextdate = "28"

let diff = parseInt(nextdate) -parseInt(date)
console.log(diff)
let newstr =diff.toString();
console.log(newstr)
console.log(typeof(diff))
console.log(typeof(newstr))

//concatination 
let newQuote = day + "is funday"
console.log(newQuote)
let val = newQuote.indexOf("day")
console.log(val)
// tuesday is funday

let person = new Person("Rohit", "Pawar")
console.log(person.fullName())


