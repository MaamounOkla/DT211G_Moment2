const n=document.getElementById("inputField"),t=document.getElementById("tableField");async function e(){try{let n=await fetch("https://dahlgren.miun.se/ramschema_ht23.php"),t=await n.json();a(t),console.table(t)}catch(n){t.innerHTML="misslyckades att nå data, försök igen senare"}}async function a(n){n.forEach(n=>{t.innerHTML+=`
   
    <tr>
        <td>${n.code}</td>
        <td>${n.coursename}</td>
        <td>${n.progression}</td>
    </tr>   
    `})}window.onload=function(){console.log("initierar..."),console.log("Hämtar data från JSON..."),e()},n.addEventListener("change",async function(n){console.log("söker..")}),e();
//# sourceMappingURL=index.814cfb19.js.map
