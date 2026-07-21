
const flag = true

if (!flag)
{
console.log("condition satisfied")
}
else
{
console.log("condition not satisfied")
}

//while loop
let i =0
while (i>10)
{
    i++
console.log(i)
}

// do while 
 do 
 {
i++
 }
 while (i>10);
 {
console.log(i)
 }


 for (let k =0;k<=10;k++){
    console.log(k)
 }
 //use for loop when you know how many times you have to run

 // from 1 to 10 give me a common multiple values of the 2 and 10
console.log("*************")
let n =0
 for (let j=1;j<=100;j++)
{
    if(j%2 == 0 && j%5 ==0)
    {
        n++
console.log(j)
if(n==3){
    break;
}
    }


 }