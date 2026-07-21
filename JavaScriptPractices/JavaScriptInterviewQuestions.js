// var is the function scoped or globally scoped and can be redeclared and updated 
// function varExample() {
//     var X = 1;
//     if (true) {
//         console.log(X);}
//     var X = 2;
//     console.log(X); }
//varExample();
// let is block scoped & can be updated but not redeclared witin the same scope
function varExample2(){
    let x = 11;  // as we declared this outside the block so this will not execute    
    if(true)        
    {        let x =21;  // this is inside block so only this will execute
        let y = 22        
        console.log(x)    }
    console.log(x)  // this will also run with output as 11
    //console.log(y)  // y will only print if its inside the block }
//varExample2();   // it is used to call the function it tells the JS execute the code inside this function
}// // const is block scoped and cannot be redeclared & reupdated 
function varExample3(){
//const x = 31;
if(true)
{    const x = 32;
    console.log(x)
}
const x = 35;
console.log(x)
}
varExample3();
//const cannot be redeclared in the same scope, but it can be declared again in a different scope
