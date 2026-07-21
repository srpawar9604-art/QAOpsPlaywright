
module.exports = class Person 
{

age = 25
get location()
{
return "India"
}
// constructor - it is method which executes by default when we create a obkect of the class

constructor(firstName, lastName)
{
this.firstName = firstName
this.lastName = lastName
}
fullName(){
   return this.firstName+ " "+ this.lastName
}

}

// let person = new Person("Shubham", "Pawar")
// let person1 = new Person ("Shital", "Nawal")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName());
// console.log(person1.fullName());


