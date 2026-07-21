let arr  = [1, 1, 2, 3, 4, 5, 5, 5, 1]

let unique = [];
let duplicate = [];


for(let i=0;i<arr.length;i++)
{
    if(!unique.includes(arr[i]))
    {
        unique.push(arr[i]);
    }
    else if(!duplicate.includes(arr[i]))
    {
        duplicate.push(arr[i]);
    }
}

console.log(duplicate);
console.log(unique);
