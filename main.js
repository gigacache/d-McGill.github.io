

let project = document.getElementById('projects');
let commercial =  document.getElementById('commercial');


let wordpressCard = document.getElementById('wordpressCard');
let lrcCard = document.getElementById('lrcCard');

project.addEventListener('click' , allProjects);
commercial.addEventListener('click', commercialProjects);

function allProjects(){

}

function commercialProjects(){

}

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
