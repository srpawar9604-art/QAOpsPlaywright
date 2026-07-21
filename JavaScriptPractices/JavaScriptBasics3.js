

var marks = Array[6]

var marks = new Array(20,40,35,12,37,100)

var marks = [20,40,35,12,37,100]
console.log(marks.slice(2,5))   // separate array using index

console.log(marks[1])
marks[3] = 12
console.log(marks)
console.log(marks.length);
marks.push(65);  // add value in the end
console.log(marks)
marks.pop();  // delete the last value in the array
console.log(marks)
marks.unshift(12);  // add value at the first
console.log(marks)

console.log(marks.indexOf(100));  // check index of the value
console.log(marks.includes(120));   //check value present or not

var sum = 0
for (let i=0;i<marks.length;i++)
{
    sum = sum + marks[i]
    
}
console.log(sum)


// reduce map filter 
let total = marks.reduce((sum,Mark) => sum+Mark)
console.log(total)

var scores = [12,40,30,33,45]

var evenscores = []
for (let i =0;i<scores.length;i++)
{
    if(scores[i]%2==0)
    {
       evenscores.push(scores[i])
    }    
}
console.log(evenscores)

// filter method 
let newfilterevenscores =scores.filter(score=>score%2==0)
console.log(newfilterevenscores)

//map = modify the function & give new value to the array

let mappedarray = newfilterevenscores.map(score=>score*3)
console.log(mappedarray)

var scores1 = [12,13,14,16]

let sumValue =scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0);
console.log(sumValue)

//sorting of array

let fruits = ["banana", "mango", "apple", "pomgranede"]
fruits.sort();
console.log(fruits)

var scores1 = [12,20,13,14, 18,16,3,4]
scores1.sort();
console.log(scores1)

scores1.sort((a,b)=>a-b)
console.log(scores1)