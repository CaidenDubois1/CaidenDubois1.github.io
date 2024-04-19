var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    var levelNum = 1;
    
    // BEGIN EDITING YOUR CODE HERE
    reward()
    saw()
    enemy()
    
    function createSawBlade(x, y) { 
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
sawBladeHitZone.y = y;
game.addGameItem(sawBladeHitZone);
var obstacleImage = draw.bitmap("img/sawblade.png");
sawBladeHitZone.addChild(obstacleImage);
obstacleImage.x = -25;
obstacleImage.y = -25;
}
function saw(){
for (var i = 0; i < 10; i++){
  var num1 = Math.random() * 2300;
  var num2 = Math.random() * 700;
  createSawBlade(num1, num2)
  }
}
function createEnemy(x, y) {
  var enemy = game.createGameItem("enemy", 25);
var redSquare = draw.rect(50, 50, "red");
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = x;
enemy.y = y;
game.addGameItem(enemy);
enemy.velocityX = -1;
enemy.rotationalVelocity = 50;


enemy.onPlayerCollision = function (){
  game.changeIntegrity(-100)
};
enemy.onProjectileCollision =  function (){
  game.increaseScore(100);
  enemy.flyTo(1000,300)
  enemy.fadeOut();
}

}
function enemy(){

for (var i = 1; i < 5; i++) {
  createEnemy(400 * i, groundY - 50);
}
}
 function createReward (x, y){
  var reward = game.createGameItem("reward", 25);
  var blueSquare = draw.rect(50, 50, "blue");
  blueSquare.x = -25;
  blueSquare.y = -25;
  reward.addChild(blueSquare);
  reward.x = x;
  reward.y = y;
  game.addGameItem(reward);
  reward.velocityX = -1;
  reward.rotationalVelocity = 50;


  reward.onPlayerCollision = function (){
    game.changeIntegrity(+100)
    game.increaseScore(100);
    reward.flyTo(1000,-300)
    reward.fadeOut();
  };
  reward.onProjectileCollision =  function (){
    game.changeIntegrity(+100)
    game.increaseScore(100);
    reward.fadeOut();
    reward.flyTo(1000,-300)
  }
  
} 

function reward (){ 
for (var i = 1; i < 4; i++) {
  createReward(600 * i, groundY - 50);
}

}
function createMarker(x, y){
  var marker = game.createGameItem("marker", 25);
 var whiteSquare = draw.rect(50, 50, "white");
 whiteSquare.x = -25;
 whiteSquare.y = -25;
 marker.addChild(whiteSquare);
 marker.x = x;
 marker.y = y;
 game.addGameItem(marker);
 marker.velocityX = -1;
 marker.rotationalVelocity = 25;




  marker.onPlayerCollision = function (){
    startLevel()
    marker.fadeOut();
}
marker.onProjectileCollision =  function (){
  
  marker.fadeOut();
  levelNum = levelNum + 1;
  createMarker(2400, groundY - 50)
  reward()
  enemy()
  saw()
}
}
createMarker(2200, groundY - 50)
    function startLevel() {
      // TODO 13 goes below here
var level = levelData[currentLevel]
var levelObjects = level.gameItems

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
