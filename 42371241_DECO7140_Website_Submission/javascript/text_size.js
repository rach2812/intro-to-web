$(document).ready(function(){
  $("#bigger-text").click(function () {
    $("article.default-text p").css('font-size', '1.3em');
  });
  $("#smaller-text").click(function () {
    $("article.default-text p").css('font-size', '1em');
  });
});
