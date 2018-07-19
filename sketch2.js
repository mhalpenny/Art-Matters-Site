// https://vimeo.com/channels/learningp5js/142698161

var bgcolor;
var button;
var slider;
var nameInput;
var nameP;
var animate = false;
var timer = 500;
var fade = 1;

function setup() {
  frameRate(1);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.position(0,0);
  canvas.mouseOver(overpara);
  // canvas.mouseOut(outpara);
  // canvas.mousePressed(changeColor);

  bgcolor = color(200);
  nameP = createP('Your name!');

  button = createButton("go go go go");
  button.mousePressed(changeColor);
  slider = createSlider(10, 100, 86);
  nameInput = createInput('type your name');

  nameP.mouseOver(overpara);
  nameP.mouseOut(outpara);

  nameInput.changed(updateText);
}

function updateText() {
  nameP.html(nameInput.value());
}

function overpara() {
  nameP.html('your moues is over me');
  animate = true;

}

function outpara() {
  nameP.html('your mouse is out');
  animate = false;
}
function changeColor() {
  bgcolor = color(random(255))

}

// function mousePressed() {
//   changeColor();
// }


function draw() {
  background(bgcolor);
  fill(255, 0, 175);
  if (animate == true){
    for (var i = 0; i<1000; i++){
  fill(255, 0, 255);
  ellipse(100+i, 100+i, slider.value(), slider.value());
}
}
  //nameP.html(input.value());
  text(nameInput.value(), 10, 20);

}
