$(document).ready(function(){
  $("#solve").click(function () {
    var useranswer = $('#useranswer').val().toUpperCase();
    var solution = "DO NOT GO TO THE KITCHENS MIN IS THERE";
    var almostsolution ="DONOTGOTOTHEKITCHENSMINISTHERE";
    if (useranswer == solution) {
      alert("Correct!");
      window.opener.location.href='chapter_one2.html';
      window.close();
    } else if (useranswer == almostsolution){
      alert("Don't forget to put in spaces!");
    } else {
      alert("That's not quite right. Try again.");
    }
  });
  $("#giveup").click(function() {
    window.opener.location.href='chapter_one2.html';
    window.close();
  });
  $("#hint").click(function () {
  alert("What happens when you remove every instance of 'EL' from the message?");
  });
});
