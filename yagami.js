
// document.querySelector("button").addEventListener("click", handleclick);
//
// function handleclick() {
//   alert("clicked");
// }

// ALTERNATIVE

for(var i=0; i<7 /*i<documentquerySelectorAll(".drum").length*/ ; i++){

document.querySelectorAll("button")[i].addEventListener("click",  function () {

   var buttonHtml = this.innerHTML;
   makesound(buttonHtml);
  });

}//for loop

// *****************************KEY PRESS*********************************
document.addEventListener("keypress", function(event){

  makesound(event.key);
});

// ******************************MOUSE PRESS************************************
function makesound(key){

  if(key=='w'){
  var audio = new Audio ("sounds/tom-1.mp3");
  audio.play();
}else if(key=='a'){
  var audio = new Audio ("sounds/tom-2.mp3");
  audio.play();
}else if(key=='s'){
  var audio = new Audio ("sounds/tom-3.mp3");
  audio.play();
}else if(key=='d'){
  var audio = new Audio ("sounds/tom-4.mp3");
  audio.play();
}else if(key=='j'){
  var audio = new Audio ("sounds/snare.mp3");
  audio.play();
}else if(key=='k'){
  var audio = new Audio ("sounds/crash.mp3");
  audio.play();
}else if(key=='l'){
  var audio = new Audio ("sounds/kick-bass.mp3");
  audio.play();
}

}
