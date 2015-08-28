  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-49334654-4', 'auto');
  ga('send', 'pageview', { 'page': location.pathname + location.search + location.hash});

function sendLocation() {
    var match = this.getAttribute('href').match(/#\S+/);
    ga('send', 'pageview', location.pathname + match[0]);   
 }

var menu = document.getElementById("nav");
var link = menu.querySelectorAll('a');
for(var i=0;i<link.length;i++){
  link[i].addEventListener('click', sendLocation);
}
