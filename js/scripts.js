//Back End Logic
function PlayerOne(score){
  this.score = score
};
function PlayerTwo(score){
  this.score = score
};
playerOne = new PlayerOne (0);
playerTwo = new PlayerTwo (0);

PlayerOne.prototype.saveTurn = function(amount){
  this.score += amount};
PlayerTwo.prototype.saveTurn2 = function(amount){
  this.score += amount};

function add(a, b) {
    return a + b;
};
var currentRoll = [0];

//Front End Logic
$(document).ready(function() {
  $("#roll").click(function() {
    var rollDice = Math.floor(Math.random() * 6) + 1;
    if (rollDice === 1){
      currentRoll = [0]
    } else {
      currentRoll.push(rollDice);
    }
    $("span#currentRoll").show();
    $("span#rollTotal").show();
    $("span#currentRoll").text(rollDice);
    // var save = currentRoll.reduce(add, 0);
    $("span#rollTotal").text(currentRoll.reduce(add, 0));

  });
  $("button#reset").click(function(event) {
    event.preventDefault();
    currentRoll = [];
    // save = [];
    // rollDice = [];
    $("span#currentRoll").hide();
    $("span#rollTotal").hide();
  });
 //
   $("button#playerOneSave").click(function(event) {
     event.preventDefault();
     var playerOneAdd = playerOne.saveTurn(currentRoll.reduce(add, 0));
     $("span#playerOneTotal").text(playerOne.score);
   });

   $("button#playerTwoSave").click(function(event) {
     event.preventDefault();
     var playerTwoAdd = playerTwo.saveTurn2(currentRoll.reduce(add, 0));
     $("span#playerTwoTotal").text(playerTwo.score);
   });

});
