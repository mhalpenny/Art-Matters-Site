var bgcolor;
var button;
var slider;
var nameInput;
var nameP;
var animate = false;
var fade = 0;
var offset;
var layerR;

function preload() {
    layerR = loadImage('assets/layerR.png');
}

function setup() {

  //---SETUP---
  frameRate(60);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.position(0,0);
  bgcolor = color(255);


  //---LINKS---
  // nameP = createP('Your name!');
  linkR = createA('#', 'RESOURCES');
  linkR.style('text-decoration', 'none');
  linkR.style('color', 'black');
  linkR.style('letter-spacing', '5');

  linkA = createA('#', 'ABOUT');
  linkA.style('text-decoration', 'none');
  linkA.style('color', 'black');
  linkA.style('letter-spacing', '5');

  linkCU = createA('#', 'CONTACT US');
  linkCU.style('text-decoration', 'none');
  linkCU.style('color', 'black');
  linkCU.style('letter-spacing', '5');

  linkAr = createA('#', 'ARCHIVE');
  linkAr.style('text-decoration', 'none');
  linkAr.style('color', 'black');
  linkAr.style('letter-spacing', '5');

  linkGI = createA('#', 'GET INVOLVED');
  linkGI.style('text-decoration', 'none');
  linkGI.style('color', 'black');
  linkGI.style('letter-spacing', '5');

  linkE = createA('#', 'EVENTS');
  linkE.style('text-decoration', 'none');
  linkE.style('color', 'black');
  linkE.style('letter-spacing', '5');

  linkCO = createA('#', 'CALL-OUTS');
  linkCO.style('text-decoration', 'none');
  linkCO.style('color', 'black');
  linkCO.style('letter-spacing', '5');


  button = createButton("go go go go");
  button.mousePressed(changeColor);
  slider = createSlider(10, 100, 86);

  linkR.mouseOver(overpara);
  linkR.mouseOut(outpara);
  linkA.mouseOver(overpara);
  linkA.mouseOut(outpara);

  //---IMAGES---
//image(layerR, windowWidth/2, windowHeight/2);


}

//---HOVER---

function overpara() {
  linkR.html('RESOURCES');
  animate = true;
}

function outpara() {
  linkR.html('RESOURCES');
  animate = false;
  fade = 0;
}

//---COLOR---

function changeColor() {
  bgcolor = color(random(255))

}

// function mousePressed() {
//   changeColor();
// }

//---***DRAW***-------------------------------------

function draw() {

  noStroke();
  background(bgcolor);
  offset = windowWidth*0.1;
  linkR.position((windowWidth/2)+offset, windowHeight/2);
  linkA.position((windowWidth/2), (windowHeight/2)+offset*1.5);
  linkCU.position((windowWidth/2)-offset, (windowHeight/2)-offset);
  linkE.position((windowWidth/2)-offset*2, (windowHeight/2)+offset*1.2);
  linkGI.position((windowWidth/2)+offset, (windowHeight/2)+offset);
  linkAr.position((windowWidth/2)-offset*2.5, (windowHeight/2)+(offset/2));
  linkCO.position((windowWidth/2)-offset*3, (windowHeight/2)-(offset/3));


  tint(255, fade);
  image(layerR, 70, -100);

//---ANIMATION---

  var c = color( 255, 0, 255, fade);
  fill(c);

  if (animate == true && fade <=255){
    fade += 10;
  }

  ellipse(windowWidth/2, windowHeight/2, slider.value(), slider.value());


}

function windowResized() {
  resizeCanvas(windowWidth, (windowHeight));

}
