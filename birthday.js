let years = document.getElementById("years");
let months = document.getElementById("months");
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let input = document.querySelector("input[name = birthday]");
let countdown = document.getElementById("countdown");
let loading = document.getElementById("loading");








input.addEventListener("change", function starttime() {
    
    countdown.style.display = "flex"
    let calcyear = new Date().getFullYear() - new Date(input.value).getFullYear();
    let calcMonths = new Date().getMonth() - new Date(input.value).getMonth();
    let calcDays = new Date().getDate() - new Date(input.value).getDate();
    let calcHours = new Date().getHours() - new Date(input.value).getHours();
    let calcMinutes = new Date().getMinutes() - new Date(input.value).getMinutes();
    let calcSeconds = new Date().getSeconds() - new Date(input.value).getSeconds();
    
    if(calcMonths <0) {
        calcMonths += 12;
        calcyear -- 
    }

    if(calcDays < 0) {
        calcDays += 30;
        calcMonths --
    }
    
    years.innerHTML = calcyear;
    months.innerHTML = calcMonths;
    days.innerHTML = calcDays;
    hours.innerHTML = calcHours;
    minutes.innerHTML = calcMinutes;
    seconds.innerHTML = calcSeconds

    setInterval(starttime, 1000)
    
    loading.style.visibility = "hidden"
    body.style.backgroundİmage = "url(./images/background.jpg)"
    

    
    
})

  
    
    







