          // random image 1 geration
var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;//range 1-6
// alert(randomNumber1);
var randomDiceImage="dice" +randomNumber1+ ".png";//dice1.png-dic6.png
var randomImageSorce="images/"+randomDiceImage;//images/dice1.png-images/dice6.png
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSorce);

          // random image 2 geration
var randomNumber2=Math.floor(Math.random()*6)+1;//range 1-6
var randomImageSorce="images/dice"+randomNumber2+".png";//images/dice1.png-images/dice6.png
document.querySelectorAll("img")[1].setAttribute("src",randomImageSorce);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
