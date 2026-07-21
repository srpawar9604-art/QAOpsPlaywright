console.log("Hello Java");

//Variables - Variables can hold values with any type

/*
from ES6 version js introduced 2 new variables i.e. let & const earlier it was only var
Difference between var let & const - 

let c = a+b did not work because We cannot redeclare variable with the let keyword but it is possible with the var variable.


let a = 5 

*/

let a = 4
console.log(a)
console.log(typeof(a))

let b = 32.7
console.log(typeof(b));

var c = "Shubham Pawar"
let required = true
console.log(typeof(c));
console.log(typeof(required));
console.log(!required);
console.log(required);  
// Differenec between null & undefined are 

 c = a+b   // we are reassigning here, reassigning is allowed in let variable
 //var c= a+b this is also allowed
 // scope - 
 //var - Global Scope/ function scope
 //let - Global Level / block level { }
 //const - almost same as let, but we cannot reintialized
console.log(c)

// in const variable we cannot reassign & redeclare

