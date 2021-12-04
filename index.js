// dice 1
var number1 = Math.floor(Math.random()*6)+1;
var imageSource1 = "images/dice" + number1 +".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , imageSource1);

// dice 2
var number2 = Math.floor(Math.random()*6)+1;
var imageSource2 = "images/dice" + number2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , imageSource2);

// player 1
if (number1 > number2){
  document.querySelector("h1").innerHTML="PLAYER 1 WINS";
}
else if(number2 > number1){
  document.querySelector("h1").innerHTML="PLAYER 2 WINS";
}
else{
  document.querySelector("h1").innerHTML="DRAW";
}
