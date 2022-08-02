const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');

audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function updatedClock(){
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    let per = "PM";
    
    if(hr >= 12){
        per = "PM";
    }else{
        per = "AM";
    }
    
    hr = hr > 12 ? hr % 12 :hr;
    
    if(hr < 10){
        hr = "0" + hr;
    }
    if(min < 10){
        min = "0" + min;
    }
    if(sec < 10){
        sec = "0" + sec;
    }
    
    document.querySelector(".hours").innerHTML = hr;
    document.querySelector(".minutes").innerHTML = min;
    document.querySelector(".seconds").innerHTML = sec;
    document.querySelector(".periods").innerHTML = per;
}

 


var updatedClock = setInterval(updatedClock, 100);

var today = new Date();
const dayNumber = today.getDate();
const year = today.getFullYear();
const monthName = today.toLocaleString("default", {month: "short"});
const dayName = today.toLocaleString("default", {weekday: "long"});

document.querySelector(".month-name").innerHTML = monthName;
document.querySelector(".day-name").innerHTML = dayName;
document.querySelector(".day-number").innerHTML = dayNumber;
document.querySelector(".year").innerHTML = year;



function setAlarmTime(value) {
    alarmTime = value;
    console.log(alarmTime)
}

function setAlarm() {
    if(alarmTime) {
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);

        if (timeToAlarm > current) {
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Hye user your alarm has been set');
        }
    }
}
function clearAlarm(){
    audio.pause();
    if(alarmTimeout){
        clearTimeout(alarmTimeout);
        alert('Hye user your alarm has been cleared')
    }
}