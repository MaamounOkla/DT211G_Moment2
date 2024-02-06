"use strict";

//Variabler
const url = "https://dahlgren.miun.se/ramschema_ht23.php";
const inputField = document.getElementById("inputField");
const tableField = document.getElementById("tableField");
//Event listners
inputField.addEventListener("change", () => searchInput);

//functions
//Hämta Data från JSON

async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    renderData(data);
    console.table(data);
  } catch (error) {
    tableField.innerHTML = "misslyckades att nå data, försök igen senare";
  }
}
async function renderData(data) {

    data.forEach(course => {
        tableField.innerHTML  += `
   
    <tr>
        <td>${course.code}</td>
        <td>${course.coursename}</td>
        <td>${course.progression}</td>
    </tr>   
 
  
   
 

 
   
  
    
    `

})};
getData();