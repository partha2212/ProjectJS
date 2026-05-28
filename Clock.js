let is24Hour = true;
let period=""
function showTime(){
    let time = new Date();
    let hour = time.getHours();
    period = "";
    if(!is24Hour){
    period = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    if(hour === 0){
        hour = 12;
    }
}
    let minute = time.getMinutes();
    let second = time.getSeconds();
    hour = hour.toString().padStart(2,"0");
    minute = minute.toString().padStart(2,"0");
    second = second.toString().padStart(2,"0");
    let clockText= hour + ":" + minute + ":" + second;
    if(!is24Hour){
        clockText += '<span id="period">' + period + '</span>';
    }
    document.getElementById("clock").innerHTML= clockText;
}
showTime();
setInterval(showTime,1000);
document.getElementById("btn-24").addEventListener("click", function(){
    is24Hour = true;
    showTime();
});
document.getElementById("btn-12").addEventListener("click", function(){
    is24Hour = false;
    showTime();
});