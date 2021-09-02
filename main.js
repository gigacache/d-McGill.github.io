

window.addEventListener("load", typeWriter);


var i = 0;
var speed = 50;

function typeWriter() {
  var txt = 'just remember where on a floating rock in space';
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
