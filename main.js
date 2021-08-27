

window.addEventListener("load", typeWriter);


var i = 0;
var speed = 50;

function typeWriter() {
  var txt = 'In my final year of studying BSc (Hons) Software Engineering at Manchester Metropolitan University. Passionate and hard working with a creative twist, looking for an opportunity to develop current skills and grow as an individual in the technology industry. Sociable personality and a keen eye for detail, an effective team player. Willingness to learn and will always take on board feedback to progress. Also I love to eat pizza and skateboard.';
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
