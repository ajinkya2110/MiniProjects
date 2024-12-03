const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const closed = document.getElementById("closed");
if(bar){
    bar.addEventListener("click",()=>{
         nav.classList.add("active");
    });
} ;
if(closed){
    closed.addEventListener("click",()=>{
         nav.classList.remove("active");
    })
} 