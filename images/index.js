var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImageSource = "dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImageSource);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImageSource1 = "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImageSource1);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "playerr 1 won!! ";

}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "player 2 won!!";

}
else{
    document.querySelector("h1").innerHTML = "draw the match :("
}