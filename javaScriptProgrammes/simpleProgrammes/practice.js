let str = "My name is Shubham";



let words = str.split(" ");

let result = "";

console.log(words);   // [ 'My', 'name', 'is', 'Shubham' ]

for (let i=0;i<words.length;i++)
{

    let reversedWord = "";

    for(let j=words[i].length-1;j>=0;j--)
    
    {

        reversedWord = reversedWord + words[i][j];
    }

    result = result + reversedWord + " ";


   
}
console.log(result);
