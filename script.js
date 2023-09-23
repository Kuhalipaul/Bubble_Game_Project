//lets make the  Bubble
function makeBubble(){
var clutter="";
//make bubble
for(let i=1;i<= 70;i++){
    var rn=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
}
var hitrn=0;
//lets make the hit work
function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

//lets make the timer work
var timer=60//global variable
function runTimer(){
var timerint=setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
    }else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML=`<h1>game over</h1>`;//jokhon time 0 hobe pbtm theke sob bubble vanish hoye jabe
   
    }
},1000);
}

var score=0;
//lets make the score work
function increaseScore(){
score+=10;
document.querySelector("#scoreval").textContent=score;
}

//jispe click karoge wo particular element par event raise hoga,aur event listener naa milne par event element ke parent par listener dhundhuega,waha bhi naa milne par event parent ke parent ke perent par listener dhundega
document.querySelector("#pbtm").addEventListener("click",function(dets){
var clickedNum=Number(dets.target.textContent);
if(clickedNum===hitrn){
   increaseScore(); 
   makeBubble();
   getNewHit();
}
});

runTimer();//timer function work
getNewHit();//hit function work
makeBubble();//makeBubble function work
increaseScore();//score function work