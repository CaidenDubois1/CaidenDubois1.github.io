/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  var walker = {
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 0,
  }

  var walker2 = {
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 0,
  }
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    redrawGameItem()
    wall()                                                                
    playerColisions()
  }
  function wall() {
    if (walker.positionX <= 0){
      walker.positionX = 0;
    }
    if (walker.positionX >= 850){
      walker.positionX = 850;
    }
    if (walker.positionY <= 0){
      walker.positionY = 0
    }
    if (walker.positionY >= 850){
      walker.positionY = 850
    }

    if (walker2.positionX <= 0){
      walker2.positionX = 0;
    }
    if (walker2.positionX >= 850){
      walker2.positionX = 850;
    }
    if (walker2.positionY <= 0){
      walker2.positionY = 0
    }
    if (walker2.positionY >= 850){
      walker2.positionY = 850
    }
 }
  /* 
  Called in response to events.
  */
 function handleKeyUp(event) {

   if (event.which === KEY.UP) {
    walker.speedY = 0;
   
  }
   if (event.which === KEY.DOWN) {
    walker.speedY = 0;
   
  }
   if (event.which === KEY.LEFT) {
    walker.speedX = 0;
  }
   if (event.which === KEY.RIGHT) {
    walker.speedX = 0;  }
    
     if (event.which === KEY.W) {
      walker2.speedY = 0;
     
    }
     if (event.which === KEY.S) {
      walker2.speedY = 0;
     
    }
     if (event.which === KEY.A) {
      walker2.speedX = 0;
    }
     if (event.which === KEY.D) {
      walker2.speedX = 0;  }
 }
 var KEY = {
"ENTER": 13,
"UP": 38,
"DOWN": 40,
"LEFT": 37,
"RIGHT": 39, 
"W": 87,
"A": 65,
"S": 83,
"D": 68,
 };
  
 
 
 function handleKeyDown(event) {
         if (event.which === KEY.UP) {
          walker.speedY = -10;
        }
         if (event.which === KEY.DOWN) {
          walker.speedY = 10;
         
        }
         if (event.which === KEY.LEFT) {
          walker.speedX = 10;
        }
         if (event.which === KEY.RIGHT) {
          walker.speedX = -10;
        }
        
         if (event.which === KEY.W) {
          walker2.speedY = -10;
         
        }
         if (event.which === KEY.S) {
          walker2.speedY = 10;
         
        }
         if (event.which === KEY.A) {
          walker2.speedX = -10;
          
        }
         if (event.which === KEY.D) {
          walker2.speedX = 10;  }
    
  }
  function playerColisions (walker){
    if (walker.positionX === walker2.postionX && walker.positionY === walker2.postionY)  {
      endGame()
    }
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem (){
    walker.positionX += walker.speedX;
    walker.positionY += walker.speedY;
    walker2.positionX += walker2.speedX;
    walker2.positionY += walker2.speedY;

  } 
  function redrawGameItem (){
    $("#walker").css("top", walker.positionY);
    $("#walker").css("right", walker.positionX);
    $("#walker2").css("top", walker2.positionY);
    $("#walker2").css("left", walker2.positionX);
  }
  
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}