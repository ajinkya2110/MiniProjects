async function getUser(place){
const url = `https://timezone.abstractapi.com/v1/current_time/?api_key=59578f2357e04a81b6b1e0caafa8abbb&location=${place}`
const res = await fetch(url);
const data = await res.json();
time = await data.datetime;

document.getElementById("time").innerText = `${place}'s time = ${time} ${data.timezone_abbreviaton}`
}
document.querySelectorAll(".allPaths").forEach(e=>{

    e.setAttribute('class',`allPaths ${e.id}`);
     e.addEventListener("mouseover",function(){
        window.onmousemove=function(j){
            x=j.clientX;
            y=j.clientY;
            document.getElementById("name").style.top=y-60+"px";
            document.getElementById("name").style.left=x+10+"px";
        }
        const classes=e.className.baseVal.replace(/ /g, '.')
        document.querySelectorAll(`.${classes}`).forEach(country=>{
            country.style.fill = "pink"
        })
    
        document.getElementById("name").style.opacity=1
        document.getElementById("namep").innerText=e.id
       
     })
     e.addEventListener("mouseleave",function(){
        const classes=e.className.baseVal.replace(/ /g, '.')
        document.querySelectorAll(`.${classes}`).forEach(country=>{
            country.style.fill = "#ececec"
        })
        document.getElementById("name").style.opacity=0;
    })

    e.addEventListener("click",function(){
        getUser(e.id)
    }) 
})