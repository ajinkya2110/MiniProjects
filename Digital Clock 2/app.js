setInterval(()=>{
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let ampm = document.getElementById("ampm");

    let hh = document.getElementById("hh")
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h>=12 ? "PM" : "AM";
    
    
    //Convert 24 hours clock to 12 hours clock
    if(h>12){
        h = h - 12;
    }
    //Add zero before single digit number
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    ampm.innerHTML = am;
})






