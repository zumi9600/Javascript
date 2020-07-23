// For Player 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; //dice1.png, dice2.png
// var randomImageSource = "images/" + randomDiceImage; // images/dice1.png
// var image1 = document.querySelector("img.img1"); //selecting class= img1 from img
// image1.setAttribute("src", randomImageSource1); //setting attribute src to images/dice1.png
document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png"); //Setting the dynamic attribute of the image by using random number

// For Player 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png"); //Setting the dynamic attribute of the image by using random number

// Winner

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "🚩 Player 1 Wins !";
}
if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
}
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerText = "Draw !";
}
