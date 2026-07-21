
let str = "Shubham is a automation test engineer"
let result = "";

//Shubham is a automation test engineer

let words = str.split();
console.log(words)

for(let i=0;i<words.length;i++){

    let reversedWord = "";

    for(let j=words[i].length-1;j>=0;j--)
    {
        reversedWord = reversedWord + words[i][j];
    }
    result = result+ reversedWord + " " ;
}
console.log(result);

// let str = "Shubham is a automation test engineer"


let output = str.split(" ").map(word => word.split("").reverse().join("")).join(" ");

console.log(output)
