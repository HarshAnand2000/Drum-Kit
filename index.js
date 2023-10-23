let allButtons = document.querySelectorAll(".drum");
for (i of allButtons) {
  i.addEventListener("click", function () {
    //if i do i.buttonInnerHTML then it will always be executed for key "l" because loop is already executed before click event
    let buttonInnerHTML = this.innerHTML; //or this.textContent
    //this points to the element on which event handler is attached to
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

//Detecting keyboard press
document.addEventListener("keypress", function (e) {
  //e.key is the key which is pressed
  makeSound(e.key);
  buttonAnimation(e.key);
});

function makeSound(key) {
  //   let audio = new Audio("sounds/tom-1.mp3");
  //   audio.play();

  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(key);
  }
}

function buttonAnimation(key) {
  const currentKey = document.querySelector("." + key);
  currentKey.classList.add("pressed");
  setTimeout(function () {
    currentKey.classList.remove("pressed");
  }, 100);
}
