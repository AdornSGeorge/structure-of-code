
var database,position;
var canvas,backgroundImage;
var gameState = 0;
var playerCount;
var player,form,game;


function setup(){
    database = firebase.database();

    createCanvas(400,400);
    game = new Game();
    game.getState();
    game.start();

    
    

}





function draw(){
    
}


