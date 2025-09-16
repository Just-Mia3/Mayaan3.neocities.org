const mySound = new Audio("https://files.catbox.moe/pfgfy2.mp3");
const myImage = document.getElementById("autism");

myImage.addEventListener("click", () => {
  mySound.currentTime = 0; 
  mySound.play();
});
