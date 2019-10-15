$(function(){
  $("#js-show-btn").on("click", function() {
    $("#js-target-element").fadeIn(1000);
  });

   $("#js-hide-btn").on("click", function() {
     $("#js-target-element").fadeOut(2000);
   });


 });