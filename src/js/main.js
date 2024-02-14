"use strict";

//Variabler
const url = "https://dahlgren.miun.se/ramschema_ht23.php";
const inputFieldEl = document.getElementById("inputField");
const tableFieldEl = document.getElementById("tableField");
const tableBody = tableFieldEl.querySelector("tbody");
const tableFieldHeadEl = tableFieldEl.querySelector("thead");
//Event listners

//onload anropa getData();
window.onload = init;
function init() {
  console.log("initierar...");
  console.log("Hämtar data från JSON...");
  getData();
}

//funktioner
//Hämta Data från JSON

async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    renderData(data);

    //Sök funktion
    inputFieldEl.addEventListener("input", (e) => {
      searchInput(e.target.value, data);
    });

    //Sorterings eventlyssnare samt att lägga till/passa ner rätt key.
    document.getElementById("courseCode").addEventListener("click", () => {
      sortData("code", data);
    });
    document.getElementById("courseName").addEventListener("click", () => {
      sortData("coursename", data);
    });
    document
      .getElementById("courseProgression")
      .addEventListener("click", () => {
        sortData("progression", data);
      });
  } catch (error) {
    tableBody.innerHTML = "misslyckades att nå data, försök igen senare";
  }
}
//Skriv ut data på skärmen
async function renderData(data) {
  data.forEach((course) => {
    tableBody.innerHTML += `
    <tr>
        <td>${course.code}</td>
        <td>${course.coursename}</td>
        <td>${course.progression}</td>
    </tr>   
    `;
  });
}

//Sök funktionen
function searchInput(e, data) {
  tableBody.innerHTML = "";
  const filteredData = data.filter((course) => {
    const code = course.code.toLowerCase();
    const coursename = course.coursename.toLowerCase();
    const progression = course.progression.toLowerCase();
    return (
      code.includes(e) || coursename.includes(e) || progression.includes(e)
    );
  });
  filteredData.forEach((course) => {
    tableBody.innerHTML += `
      <tr>
          <td>${course.code}</td>
          <td>${course.coursename}</td>
          <td>${course.progression}</td>
      </tr>   
      `;
  });
  console.log(filteredData);
}

// Sorterings-funktion
function sortData(dataKey, data) {
  //Sortera data efter vilken värde man valde.
  const sortedData = data.sort((a, b) => a[dataKey] > b[dataKey]) ? 1 : -1;
  //Rensa tabellinnehållet.
  tableBody.innerHTML = "";

  console.log("sorterar efter:", dataKey);

  data.forEach((course) => {
    const code = course.code.toLowerCase();
    const coursename = course.coursename.toLowerCase();
    const progression = course.progression.toLowerCase();
    tableBody.innerHTML += ` <tr>
    <td>${course.code}</td>
    <td>${course.coursename}</td>
    <td>${course.progression}</td>
  </tr> `;
  });
}
