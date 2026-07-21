
let arr = [20, 30,10,50];

let min = arr[0]

for(let i =0;i<arr.length;i++)
{
    if(arr[i]<min)
    {
        min = arr[i];
    }
}
console.log(min)