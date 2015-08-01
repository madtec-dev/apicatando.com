
var info = document.getElementsByClassName("info");
var close = document.getElementsByClassName("close");
for(var i=0;i<info.length;i++){
    info[i].addEventListener('click', overlay, true);
}
for(var i=0;i<close.length;i++){
    close[i].addEventListener('click', overlay, true);
}

function overlay(e) {
  this.className == "close" ? enableScroll() : disableScroll();
  e.preventDefault();
  var attribute = this.getAttribute("data-info");
  el = document.getElementById("overlay" + attribute);
  el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
  el.style.visibility == "visible" ? el.className = "overlay animated fadeIn" : el.className = "overlay";
}

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}
