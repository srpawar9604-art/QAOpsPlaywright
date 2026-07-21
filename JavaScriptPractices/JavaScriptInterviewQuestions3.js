
function fetchdata(callback){
//fetch data from the derver
setTimeout(() =>
    {


    console.log("Data Fetched");
    const data = "Sample Data"
    callback(data);
}, 2000);

}


function processData(data) 
{
 console.log("Data is processed ", data)
}


function modifyData(data)
{
console.log("Data is modified", data);

}
fetchdata(processData);
fetchdata(modifyData)