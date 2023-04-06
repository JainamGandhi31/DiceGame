var firstDiceVal = Math.floor(Math.random()*6) + 1;
var secondDiceVal = Math.floor(Math.random()*6) + 1;
console.log(firstDiceVal);
console.log(secondDiceVal);

document.querySelector(".img1").setAttribute("src","images/dice"+firstDiceVal+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+secondDiceVal+".png")

var header = document.querySelector(".heading");

if(firstDiceVal == secondDiceVal){
    header.textContent = "Draw!"
}
else if(firstDiceVal > secondDiceVal){
    header.textContent = "🚩 Player1 Wins!"
}
else{
    header.textContent = "Player2 Wins! 🚩"
}