console.log("script loaded");
console.log("CodeHaven V1.2.5 (mobile version V1.2)");

//RESPONSIVE DISPLAY

width = window.innerWidth;

if (width <= 890) {
  console.log("small screen initialized:", width);
  document.getElementById("f3").innerHTML = "Can I Purchase an Individual Service?"
} 

//FAQ
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//REVEAL

window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
          reveals[i].classList.add('activer');
      }
      else {
          reveals[i].classList.remove('activer');
      }
  }
}