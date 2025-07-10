const hourhand=document.getElementById("hour-hand");
const minthand=document.getElementById("mint-hand");
const secondhand=document.getElementById("sec-hand");

function tickclock(){
    const date = new Date();
    const seconds = date.getSeconds()/60;
    const minutes = (seconds + date.getMinutes())/60;
    const hours = (minutes + date.getHours())/12;

    rotateClockHand(hourhand,hours);
    rotateClockHand(minthand,minutes);
    rotateClockHand(secondhand,seconds);


}

function rotateClockHand(element, rotation){
    element.style.setProperty('--rotate', rotation *360);

}
setInterval(tickclock,1000)

