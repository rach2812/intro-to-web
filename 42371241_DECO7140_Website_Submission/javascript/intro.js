$(document).ready(function(){
  var animation = $("#introanimation").flicker();
  //Flicker method sourced from GitHub, developed by Hunzaker, N. (2012).

  var timer = window.setTimeout(function() {
      location.href='home.html';
  }, 15000);
});
