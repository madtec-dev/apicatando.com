
var info = document.getElementsByClassName("info");
var close = document.getElementsByClassName("close");
for(var i=0;i<info.length;i++){
    info[i].addEventListener('click', overlay, true);
}
for(var i=0;i<close.length;i++){
    close[i].addEventListener('click', overlay, true);
}

function overlay(e) {
  e.preventDefault();
  var attribute = this.getAttribute("data-info");
  el = document.getElementById("overlay" + attribute);
  console.log(attribute);
  el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}
