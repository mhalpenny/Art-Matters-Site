var animateR, animateA, animateCO = false;
var fadeR, fadeA, fadeCO;
var offset;
var layerR, layerA, layerCO;
// var xoff = 0.0;
// var perlin = 0;
// var paraR, ppR = 400;


function preload() {

    layerR = loadImage('assets/layerR.png');
    layerA = loadImage('assets/layerA.png');
    layerCO = loadImage('assets/layerCO.png');
    amLogo = loadImage('assets/amlogo.png');
}

function setup() {

  //---SETUP---
  frameRate(60);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.position(0,0);

  //---LINKS---
  // optionally migrate to CSS for all links

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

  linkAO = createA('pdf/AM_AntiO.pdf', 'ANTI-OPPRESSION STATEMENT');
  linkAO.style('letter-spacing', '2');

  linkEN = createA('index.html', 'EN');
  linkFR = createA('indexFR.html', 'FR');


//---EVENTS---

  linkR.mouseOver(overLinkR);
  linkR.mouseOut(offLinkR);
  linkA.mouseOver(overLinkA);
  linkA.mouseOut(offLinkA);
  linkCO.mouseOver(overLinkCO);
  linkCO.mouseOut(offLinkCO);

  //instantiate animations.
  fadeA = 0;
  fadeCO = 0;
  fadeR = 0;

}

//---HOVER---

function overLinkR() {
  animateR = true;
  linkR.style('font-style', 'italic');
}

function offLinkR() {
  animateR = false;
  fadeR = 0;
  linkR.style('font-style', 'normal');
}

// function cascadeR(){
//   paraR = createP('RESOURCES');
//   paraR.position(ppR, ppR);
//   ppR = ppR - 20;
// }

function overLinkA() {
  animateA = true;
}

function offLinkA() {
  animateA = false;
  fadeA = 0;
}

function overLinkCO() {
  animateCO = true;
}

function offLinkCO() {
  animateCO = false;
  fadeCO = 0;
}


//---***DRAW***-------------------------------------

function draw() {

  noStroke();
  background(255, 30);

  //positioning

  offset = (windowWidth*0.1);
  // perlinX = noise((xoff*3));
  // perlinY = noise((xoff*2));
  // xoff = xoff + 0.01;
  linkR.position((windowWidth/2)+(offset*1.4), (windowHeight/2)-(20));
  linkA.position((windowWidth/2), (windowHeight/2)+offset*1.3);
  linkCU.position((windowWidth/2)-offset, (windowHeight/2)-offset*1.3);
  linkE.position((windowWidth/2)-offset*2, (windowHeight/2)+offset*1.2);
  linkGI.position((windowWidth/2)+(offset*1.1), (windowHeight/2)+(offset/2));
  linkAr.position((windowWidth/2)-offset*2.5, (windowHeight/2)+(offset/2));
  linkCO.position((windowWidth/2)-offset*3, (windowHeight/2)-(offset/3));
  linkAO.position(15, 15);
  // fill(0);
  // rect(windowWidth-60, 10, 60, 20);
  linkEN.position(windowWidth-60, 15);
  linkFR.position(windowWidth-35, 15);

//---LINK ANIMATION---


//---ANIMATION---
//---R---
  tint(255, fadeR);
  image(layerR, 70, -100);

  var c = color( 255, 0, 255, fadeR);
  fill(c);

  if (animateR == true && fadeR <=255){
    fadeR += 10;
  }
  //---A---
  tint(255, fadeA);
  image(layerA, 70, -100);

  var c = color( 255, 0, 255, fadeA);
  fill(c);

  if (animateA == true && fadeA <=255){
    fadeA += 10;
  }
  //---CO---
  tint(255, fadeCO);
  image(layerCO, 70, -100);

  var c = color( 255, 0, 255, fadeCO);
  fill(c);

  if (animateCO == true && fadeCO <=255){
    fadeCO += 10;
  }

  tint(255, 255);
  image(amLogo, (width/2)-60, (height/2)-60);

}

function windowResized() {
  resizeCanvas(windowWidth, (windowHeight));

}
