var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImageSource = "./images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImageSource);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImageSource1 = "./images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImageSource1);
if(randomNumber1>randomNumber2){
    var audio1 = new Audio('./audio/player-1-wins.mp3');
    audio1.play();
    document.querySelector("h1").innerHTML = "player 1 won!! ";

}
else if(randomNumber1<randomNumber2){
    var audio2 = new Audio('./audio/player-2-wins.mp3');
    audio2.play();
    document.querySelector("h1").innerHTML = "player 2 won!!";

}
else{
    var audio3 = new Audio('./audio/draw.wav');
    audio3.play();
    document.querySelector("h1").innerHTML = "draw :("
}

function ClickMe(){
   
    window.location.reload();
     
}
