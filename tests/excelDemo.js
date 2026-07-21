const ExcelJS=require('exceljs');

async function excelTest ()
{
let output = {row:-1,column:-1};
const workbook = new ExcelJS.Workbook();
await workbook.xlsx.readFile("C:/Users/rohit/Downloads/excelDownloadTest.xlsx");

const worksheet = workbook.getWorksheet('Sheet1');
worksheet.eachRow((row,rowNumber) =>
     {
      
        row.eachCell((cell,cellNumber) =>
        {
           //console.log(cell.value);   // to get the all data from the excel sheet
           if(cell.value==="Banana"){
            output.row=rowNumber;  // ;to get the co ordinate of the value in the excel sheet
            output.column=cellNumber;
          }
        })
    });
   

const cell = worksheet.getCell(output.row,output.column);
cell.value="Replublic";
await workbook.xlsx.writeFile("C:/Users/rohit/Downloads/excelDownloadTest.xlsx")



}
excelTest();
