
var arr = ["red", "blue", "green", "yellow"];
var seqarr = [];
var userClickedPattern = [];
let level=1;
function playsound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatepress(color) {
  $("#" + color).addClass("pressed");
  setTimeout(function() {
      $("#" + color).removeClass("pressed");
  }, 100);
}

$(document).keydown(nextsequence);  // Start game on keypress
$("#start-btn").click(nextsequence);  // Start game on button click

$(".btn").click(function() {  // Ensure click events aren't duplicated

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playsound(userChosenColour);
  animatepress(userChosenColour);

  if (userClickedPattern[userClickedPattern.length - 1] === seqarr[userClickedPattern.length - 1]) {
      if (userClickedPattern.length === seqarr.length) {
          setTimeout(nextsequence, 1000); 
          userClickedPattern = []; 
      }
  } else {
      let username = localStorage.getItem("username") || "Player"; // Get username or default to "Player"

      $("#level-title").text(`❌ Sorry! my love ${username}, yaha aapne galti kar di`);
      level=1;
      seqarr.length = 0; 
      userClickedPattern = [];
      playsound("wrong"); 
      $("body").addClass("game-over");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
  }
});

function nextsequence() {

  userClickedPattern = [];  // ✅ Reset user's choices for the new round
  $("#level-title").text("Level " + level);
  level++;

  var num = Math.floor(Math.random() * 4);
  var randomchoosen = arr[num];
  seqarr.push(randomchoosen);

  $("#" + randomchoosen).fadeIn(100).fadeOut(100).fadeIn(100);
  playsound(randomchoosen);
}



// $(document).keydown(function(event){
//     alert("keypreseed");
// });

// $("#green").click(function(){
//     nextsequence();
// });
// $("#yellow").click(function(){
//     var audio =new Audio("sounds/yellow.mp3");
//     audio.play();
// });
// $("#blue").click(function(){
//     var audio =new Audio("sounds/blue.mp3");
//     audio.play();
// });
// $("#red").click(function(){
//     var audio =new Audio("sounds/red.mp3");
//     audio.play();
// });
// $("#green").click(function(){
//     var audio =new Audio("sounds/green.mp3");
//     audio.play();
// });