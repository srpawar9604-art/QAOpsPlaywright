
//object - It is a collection of the properties

let person = 
{
    firstName : "Shubham",
    lastName : "Pawar",
    age :25,
    fullName : function()
    {
        console.log(this.firstName+this.lastName)

    }


}
console.log(person.fullName())

console.log(person.firstName)
console.log(person.lastName)

person.firstName = "Shital"
console.log(person.firstName)
person.gender = "Female"
console.log(person)
delete person.gender
console.log(person)

console.log('gender' in person)

console.log("print all the values in javascript object")  // famous interview question
for(let key in person)
{
    console.log(person[key])
}