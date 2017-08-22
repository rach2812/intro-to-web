$(document).ready(function(){
  $('.gem_fix').mouseenter(function() {
    $(this).hide();
  if ($(".gem_fix:visible").length == 0) {
    setTimeout(function() {
      alert("Well done! You found all the gems!");
      location.href='game_won.html';
    }, 500);
          }
        });
});
