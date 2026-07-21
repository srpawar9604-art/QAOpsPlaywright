/*
input = 58697 
output = [50000, 8000,600,90,7]
*/

let num = 58697;
let result = [];

let divisor = 10000;


while(divisor>0)
{
    let digit =Math.floor(num/divisor);

    if(digit>0)
    {
result.push(digit*divisor);
    }

    num = num%divisor;
    divisor = divisor/10;
}

console.log(result);
