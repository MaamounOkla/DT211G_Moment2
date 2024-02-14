const e=document.getElementById("inputField"),t=document.getElementById("tableField"),o=t.querySelector("tbody");async function n(){try{let t=await fetch("https://dahlgren.miun.se/ramschema_ht23.php"),n=await t.json();console.log(n),r(n),e.addEventListener("input",e=>{(function(e,t){o.innerHTML="";let n=t.filter(t=>{let o=t.code.toLowerCase(),n=t.coursename.toLowerCase(),r=t.progression.toLowerCase();return o.includes(e)||n.includes(e)||r.includes(e)});n.forEach(e=>{o.innerHTML+=`
      <tr>
          <td>${e.code}</td>
          <td>${e.coursename}</td>
          <td>${e.progression}</td>
      </tr>   
      `}),console.log(n)})(e.target.value,n)}),document.getElementById("courseCode").addEventListener("click",()=>{d("code",n)}),document.getElementById("courseName").addEventListener("click",()=>{d("coursename",n)}),document.getElementById("courseProgression").addEventListener("click",()=>{d("progression",n)})}catch(e){o.innerHTML="misslyckades att nå data, försök igen senare"}}async function r(e){e.forEach(e=>{o.innerHTML+=`
    <tr>
        <td>${e.code}</td>
        <td>${e.coursename}</td>
        <td>${e.progression}</td>
    </tr>   
    `})}function d(e,t){t.sort((t,o)=>t[e]>o[e]?1:t[e]<o[e]?-1:0),o.innerHTML="",console.log("sorterar efter:",e),t.forEach(e=>{e.code.toLowerCase(),e.coursename.toLowerCase(),e.progression.toLowerCase(),o.innerHTML+=` <tr>
    <td>${e.code}</td>
    <td>${e.coursename}</td>
    <td>${e.progression}</td>
  </tr> `})}t.querySelector("thead"),window.onload=function(){console.log("initierar..."),console.log("Hämtar data från JSON..."),n()};
//# sourceMappingURL=index.4e10bb55.js.map
