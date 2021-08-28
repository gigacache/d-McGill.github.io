

window.addEventListener("load", typeWriter);


var i = 0;
var speed = 50;

function typeWriter() {
  var txt = 'No Signal - Dont forget to scroll';
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
