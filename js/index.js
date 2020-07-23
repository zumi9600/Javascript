document.onload() = generateRandomNumber();
var randomNumber1;
function generateRandomNumber(){
randomNumber1 = Math.floor(Math.random() * 6) + 1;
return randomNumber1;
}
document.querySelector("h1").innerText = "Hello";
// For Player 1
switch(randomNumber1){
  case 1:
  document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
  break;
  case 2:
  document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
  break;
  case 3:
  document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
  break;
  case 4:
  document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
  break;
  case 5:
  document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
  break;
  case 6:
  document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
  break;
}
// if (randomNumber1 === 1) {
//   document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
// }
// else if (randomNumber1 === 2) {
//   document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
// }
// else if (randomNumber1 === 3) {
//   document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
// }
// else if (randomNumber1 === 4) {
//   document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
// }
// else if (randomNumber1 === 5) {
//   document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
// }
// else(randomNumber1 === 6) {
//   document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
// }
// For Player 2
var randomNumber2;
function generateRandomNumber(){
randomNumber2 = Math.floor(Math.random() * 6) + 1;
return randomNumber2;
}
if (randomNumber2 === 1) {
  document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
}
else if (randomNumber2 === 2) {
  document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
}
else if (randomNumber2 === 3) {
  document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
}
else if (randomNumber2 === 4) {
  document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
}
else if (randomNumber2 === 5) {
  document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
}
else if (randomNumber2 === 6) {
  document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
}
// Winner
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player 1 Wins !";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 Wins !";
}
else (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerText = "Draw !";
}
