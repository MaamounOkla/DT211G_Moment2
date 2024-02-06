const t=document.getElementById("inputField"),e=document.getElementById("tableField");async function n(t){t.forEach(t=>{e.innerHTML+=`
   
    <tr>
        <td>${t.code}</td>
        <td>${t.coursename}</td>
        <td>${t.progression}</td>
    </tr>   
 
  
   
 

 
   
  
    
    `})}t.addEventListener("change",()=>searchInput),async function(){try{let t=await fetch("https://dahlgren.miun.se/ramschema_ht23.php"),e=await t.json();n(e),console.table(e)}catch(t){e.innerHTML="misslyckades att nå data, försök igen senare"}}();
//# sourceMappingURL=index.8b1cc118.js.map
