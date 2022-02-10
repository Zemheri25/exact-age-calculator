// let years = document.getElementById("years");
// let months = document.getElementById("months");
// let days = document.getElementById("days");
// let hours = document.getElementById("hours");
// let minutes = document.getElementById("minutes");
// let seconds = document.getElementById("seconds");
// let input = document.querySelector("input[name = birthday]");
// let countdown = document.getElementById("countdown");
// let loading = document.getElementById("loading");








// input.addEventListener("change", starttime)
// function starttime() {    
//     countdown.style.display = "flex"
//     let calcyear = new Date().getFullYear() - new Date(input.value).getFullYear();
//     let calcMonths = new Date().getMonth() - new Date(input.value).getMonth();
//     let calcDays = new Date().getDate() - new Date(input.value).getDate();
//     let calcHours = new Date().getHours() - new Date(input.value).getHours();
//     let calcMinutes = new Date().getMinutes() - new Date(input.value).getMinutes();
//     let calcSeconds = new Date().getSeconds() - new Date(input.value).getSeconds();
    
//     if(calcMonths < 0) {
//         calcMonths += 12;
//         calcyear -- 
//     }

//     if(calcDays < 0) {
//         calcDays += 30;
//         calcMonths --
//     }
    
//     if(calcHours < 0) {
//         calcHours += 24;
//         calcDays --;
//     }
//     years.innerHTML = calcyear;
//     months.innerHTML = calcMonths;
//     days.innerHTML = calcDays;
//     hours.innerHTML = calcHours;
//     minutes.innerHTML = calcMinutes;
//     seconds.innerHTML = calcSeconds

//     setInterval(starttime, 1000)
    
//     loading.style.visibility = "hidden"
   
    

    
    
// }


// ----------------------------------------------------------------------------------------

// ANOTHER SOLUTİON

let years = document.getElementById("years");
let months = document.getElementById("months");
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let loading = document.getElementById("loading");
let countdown = document.getElementById("countdown");


window.addEventListener("load", ()=> {
    loading.style.display = "block";
    setTimeout(() => {
        loading.style.display = "none"
        countdown.style.display = "flex"
    },1000);


    
    

    // let H2Elements = document.getElementsByTagName("h2");
    // console.log(H2Elements)

    // for (let index = 0; index < H2Elements.length; index++) {
    //     H2Elements[index].innerHTML = "00";
        
    // }


    let H2Elements2 = countdown.querySelectorAll("h2");
    console.log(H2Elements2);


    //nodelist.forEach()

    //Array.forEach()

    H2Elements2.forEach(item => {
        item.innerHTML = "00"
    })
});


let now;
let selectedBirthday;
let birthdayInput = document.querySelector("input[name = birthday]");

birthdayInput.addEventListener("change", (e) => {
    console.log(e.target);
    selectedBirthday = new Date(e.target.value);
    if(selectedBirthday > new Date()) {
        alert("You have entered wrong value");
        return;
    }

    loading.style.display = "block"
    document.body.style.backgroundImage = "url(./images/background.jpg)";
    setInterval(updateCountdown, 1000);
    setTimeout(() => {
        loading.style.display = "none"
        countdown.style.display = "flex"
    },1000);
})

const updateCountdown = () => {
    let dobYear = selectedBirthday.getFullYear();
    let dobMonth = selectedBirthday.getMonth();
    let dobDay = selectedBirthday.getDate();
    let dobHours = selectedBirthday.getHours();
    let dobMinutes = selectedBirthday.getMinutes();
    let dobSeconds = selectedBirthday.getSeconds();


    let now = new Date();

    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    let currentDay = now.getDate();
    let currentHours = now.getHours();
    let currentMinutes = now.getMinutes();
    let currentSeconds = now.getSeconds();

    let yearOfAge = currentYear - dobYear;
    let monthOfAge = currentMonth - dobMonth;
    let dayOfAge = currentDay - dobDay;
    let HourOfAge = currentHours - dobHours;
    let minutesOfAge = currentMinutes - dobMinutes;
    let secondsOfAge = currentSeconds - dobSeconds;

    if(monthOfAge < 0) {
        monthOfAge += 12
        yearOfAge --;
    }

    if (dayOfAge < 0) {
        dayOfAge += 30;
        monthOfAge --;
    }

    if(HourOfAge < 0) {
        HourOfAge += 24;
        dayOfAge --;
    }

    if(minutesOfAge < 0) {
        minutesOfAge += 60;
        HourOfAge --;
    }

    //Add values to Dom
    years.innerHTML = yearOfAge.toString().padStart(2, "0");
    months.innerHTML = monthOfAge.toString().padStart(2, "0");
    days.innerHTML = dayOfAge.toString().padStart(2, "0");
    hours.innerHTML = HourOfAge.toString().padStart(2, "0");
    minutes.innerHTML = minutesOfAge.toString().padStart(2, "0");
    seconds.innerHTML = secondsOfAge.toString().padStart(2, "0");


}

  
    
    







