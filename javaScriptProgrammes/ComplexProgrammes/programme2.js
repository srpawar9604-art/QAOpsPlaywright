/*
How do you segregate words from the string String s1 = "Javascript playwright Testing Interview"
*/

let s1 = "Javascript playwright Testing Interview"

let result = s1.split(" ");

console.log(result);

let words = [];

let word = "";

for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== " ") {
        word = word + s1[i];
    }
    else {
        words.push(word);
        word = "";
    }
}

words.push(word);

console.log(words);


