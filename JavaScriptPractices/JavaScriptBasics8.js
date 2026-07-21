
// Inheritance is the main piller of the OOPS
//one class can inherit/acquire properties, methods of another class
//The class which inherits the properties of other class is known as subclass or childclass
//The class whose properties are inherited are known as superclass or parentclass

const Person = require("./JavaScriptBasics7");

class Pet extends Person
{
//    get location()
//    {
// return "BlueCross"
//    }

   constructor(firstName, lastName)   // Rule 1 - constructor should be same from both the class
   {
      super(firstName,lastName)

   }
}
let pet =new Pet("Sam","San")
console.log(pet.fullName())
console.log(pet.location)