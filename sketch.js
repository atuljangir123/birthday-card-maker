var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;

function preload() {
  backgroundImage = loadImage("assets/background.jpg");
  backgroundImg = loadImage("background.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();


}

function draw() {
  background(backgroundImg);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
