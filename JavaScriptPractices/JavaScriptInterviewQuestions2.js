
// array Example & Operation 

const fruits = ["apple", "banana", "Cherry", "Date"];

//access elements by index
console.log(fruits[1]);
console.log(fruits[2])

//add an element to end of an array
fruits.push("guava")
console.log(fruits)

//remove the last element from the array
const lastfruit = fruits.pop()
console.log(lastfruit)   // returns the last fruit
console.log(fruits)  // original array after removing the last element 

// add an element in the begining of the array
fruits.unshift("papaya")
console.log(fruits)   // add at the first position

// remove the first element from array 
const firstfruit = fruits.shift()
console.log(firstfruit)
console.log(fruits)

//find the index of the array
const index = fruits.indexOf("Cherry")
console.log(index)

//remove an element by index 
const removefruit = fruits.splice(2,1);
console.log(removefruit)
console.log(fruits)

// iterate over an array
fruits.forEach((fruit,index) =>
    {
        console.log(`${index}:${fruit}`);

})

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }

//for of 
for(fruit of fruits){
    console.log(fruit)
}