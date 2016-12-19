$(document).ready(function(){ //(document).ready只需要apply一次，should be the main entry point to your code
  $("a").click(function(event){ //这个可以是"a"或者"readmore"。根据需要决定
    event.preventDefault();
  });
});

//以下是read more
 $(".readmore").click(function(){
  $("#show-this-on-click").slideDown("slow");
});

$(".readmore").click(function(){
  $(this).hide();
});

$(".readmore").click(function(){
  $(".readless").show();
});

//以下是readless
$(".readless").click(function(){
  $("#show-this-on-click").slideUp("slow");
});

$(".readless").click(function(){
  $(this).hide();
});

$(".readless").click(function(){
  $(".readmore").show();
});

//一下是 Learn More
$(".learnmore").click(function(){
  $("#learnmoretext").slideDown("slow");
});

$(".learnmore").click(function(){
  $(this).hide();
});
