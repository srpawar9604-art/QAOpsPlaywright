
let str = "peep";

let rev = "";

for (let i=str.length-1;i>=0;i--)
{
    rev = rev + str[i];
}
console.log(rev);

if(str==rev)
{
    console.log("string is palindrome")
}
else
{
    console.log("string is not palindrome")
}

let num = 121;
let originalNum = num;
let revnum = 0;


while(num>0)
{
    revnum = revnum*10 + (num%10);
    num = Math.floor(num/10);
}
console.log(revnum);

if (originalNum==revnum)
{
    console.log("num is palindrome")
}
else 
{
    console.log("number is not palindrome")
}

