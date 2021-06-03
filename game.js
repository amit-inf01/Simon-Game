colors = ["green","red","yellow","blue"];
allColors = [];
myColors = [];
level = 1;
started = false;


$(document).keypress(function(){
  if(!started){
  $("h1").text("level "+level);
  started = true;
  twink();
}

})

$(".btn").click(function(){
  key = this.id;
  document.querySelector("#"+key).classList.add("pressed");
  setTimeout(function(){
document.querySelector("#"+key).classList.remove("pressed");
  },100);
  if(started){
  myColors.push(this.id);
  checkAnswer();}
})


function twink(){
  var twinkColor = colors[Math.floor(Math.random()*4)];
  allColors.push(twinkColor);
  $("."+twinkColor).css("background-color","white");
  setTimeout(function () {
    $("."+twinkColor).css("background-color",twinkColor);
  }, 500);
  // var x = new Audio("sounds/"+twinkColor+".mp3")
  // x.play();
}

function checkAnswer(){
  var i = myColors.length-1
  if(myColors.length<=allColors.length&& myColors[i]===allColors[i]){
    if(myColors.length===allColors.length){
      level++;
      myColors=[];
      $("h1").text("level "+level);
      twink();
    }
  }
  else{
    $("h1").text("you Lose!  press any key to start!");
    var x = new Audio("sounds/red.mp3")
    x.play();
    started = false;
    level = 1;
    myColors = [];
    allColors = [];
  }
}
