
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


window.addEventListener("load", typeLogo);
window.addEventListener("load", typeWriter);

var i = 0;
var speed = 50;
var w = 0;
var speed2 = 50;

function typeWriter() {
  var txt = 'Ready To Launch Currently studying BSc (Hons) Software Engineering at Manchester Metropolitan University. Passionate and hard working with a creative twist, looking for an opportunity to develop current skills and grow as an individual in the technology industry. Sociable personality and a keen eye for detail, an effective team player. Willingness to learn and will always take on board feedback to progress. Also I love to eat pizza and skateboard.';
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



function typeLogo() {
  var txt1 = 'dmcgillz.';

  if (w < txt1.length) {
    document.getElementById("logo").innerHTML += txt1.charAt(w);
    w++;
    setTimeout(typeLogo, speed2);
  }
}
