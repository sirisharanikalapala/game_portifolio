alert("Start again?");
var randomNumber= Math.floor(Math.random()*6)+1;
var imageSource="./dice"+randomNumber +".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource);

var randomNumber2= Math.floor(Math.random()*7)+1;
var imageSource2="./dice"+randomNumber2 +".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",imageSource2);
if(randomNumber===randomNumber2){
    document.querySelector("h1").innerHTML="It's a tie!";
}

if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
    
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins!";
   
}



