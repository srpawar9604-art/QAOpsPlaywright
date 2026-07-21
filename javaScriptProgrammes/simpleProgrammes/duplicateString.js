console.log("Duplicate elements from the programming :")
let str = "programming is intersting ";

let result = "";

for(let i=0;i<str.length;i++)
{
    if(result.includes(str[i]))
    {
        continue;

    }
    for(let j=i+1;j<str.length;j++)
    {
        if(str[i]==str[j])
        {
            result = result + str[i];
            break;
        }
    }
}
console.log(result);

console.log("unique elements from programming : ")

let str1 = "javaScript programming";

let unique = "";

for (let j=0;j<str1.length;j++)
{
    if(unique.includes(str1[j])===false)
    {
        unique = unique + str1[j];
    }
}
console.log(unique);

