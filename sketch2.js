// https://vimeo.com/channels/learningp5js/142698161

var bgcolor;
var button;
var slider;
var nameInput;
var nameP;
var animate = false;
var fade = 0;

function setup() {
  frameRate(60);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.position(0,0);
  canvas.mouseOver(overpara);
  // canvas.mouseOut(outpara);
  // canvas.mousePressed(changeColor);

  bgcolor = color(200);
  // nameP = createP('Your name!');
  linkR = createA('#', 'RESOURCES');

  button = createButton("go go go go");
  button.mousePressed(changeColor);
  slider = createSlider(10, 100, 86);
  nameInput = createInput('type your name');

  linkR.mouseOver(overpara);
  linkR.mouseOut(outpara);

  nameInput.changed(updateText);
}

function updateText() {
  nameP.html(nameInput.value());
}

function overpara() {
  linkR.html('RESOURCES');
  animate = true;
}

function outpara() {
  linkR.html('RESOURCES');
  animate = false;
  fade = 0;
}
function changeColor() {
  bgcolor = color(random(255))

}

// function mousePressed() {
//   changeColor();
// }


function draw() {
  noStroke();
  background(bgcolor);

  // var c = color('rgb(0, 0 255)');
  var c = color( 255, 0, 255, fade);
  fill(c);

  if (animate == true && fade <=255){
    fade += 10;
  }

  ellipse(windowWidth/2, windowHeight/2, slider.value(), slider.value());
  //nameP.html(input.value());
}
