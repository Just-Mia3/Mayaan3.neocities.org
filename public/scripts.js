const mySound = new Audio("duck.mp3");
const myImage = document.getElementById("autism");

myImage.addEventListener("click" ,() => {mySound.currentTime = 0; mySound.play}();
});
