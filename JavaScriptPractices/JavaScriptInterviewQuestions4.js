
const students = [
{name : "Akshay", score : 40},
{name : "Salman", score : 50},
{name : "Aamir", score : 30},
{name : "Hritik", score : 25},
{name : "Varun", score : 40},
{name : "Ranveer", score : 25}
];

const passstudents = students.filter(student => student.score>=36);
console.log(passstudents);

const upperstd = passstudents.map(student => student.name.toUpperCase());
console.log(upperstd);

const totalscr = passstudents.reduce(function(acc,student)
{
acc = acc + student.score;
return acc;
},0)
console.log(totalscr)

const passedStudents = [];
const upperStudents = [];
let total = 0;

for (let i=0;i<students.length;i++)
{
if(students[i].score>=36)
{
    passedStudents.push(students[i]);
    upperStudents.push(students[i].name.toUpperCase());
    total = total + students[i].score;
}


}

console.log(passedStudents);
console.log(upperStudents);
console.log(total);


    

