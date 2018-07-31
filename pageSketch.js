var animateR, animateE, animateCO = false;
var fadeR, fadeE, fadeCO = 0;
var offset;
var layerR, layerE, layerCO;

function preload() {

  layerR = loadImage('assets/layerR.png');
  layerE = loadImage('assets/layerA.png');
  layerCO = loadImage('assets/layerCO.png');
  amLogo = loadImage('assets/amlogo.png');
}

function setup() {

  //---SETUP---
  frameRate(60);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.position(0, 0);

  //---LINKS---
  // optionally migrate to CSS for all links

  linkR = createA('#', 'RESOURCES');
  linkR.style('text-decoration', 'none');
  linkR.style('color', 'black');
  linkR.style('letter-spacing', '5');
  linkR.style('font-size', '11');

  linkAr = createA('#', 'ARCHIVE');
  linkAr.style('text-decoration', 'none');
  linkAr.style('color', 'black');
  linkAr.style('letter-spacing', '5');
  linkAr.style('font-size', '11');

  linkE = createA('#', 'EVENTS');
  linkE.style('text-decoration', 'none');
  linkE.style('color', 'black');
  linkE.style('letter-spacing', '5');
  linkE.style('font-size', '11');

  linkCO = createA('#', 'CALL-OUTS');
  linkCO.style('text-decoration', 'none');
  linkCO.style('color', 'black');
  linkCO.style('letter-spacing', '5');
  linkCO.style('font-size', '11');

  linkEN = createA('index.html', 'EN');
  linkEN.style('font-size', '11');
  linkEN.style('letter-spacing', '5');
  linkFR = createA('indexFR.html', 'FR');
  linkFR.style('font-size', '11');
  linkFR.style('letter-spacing', '5');

  //moved to html
  // linkAO = createA('pdf/AM_AntiO.pdf', 'ANTI-OPPRESSION STATEMENT');
  // linkAO.style('letter-spacing', '2');
  //
  // linkGI = createA('#', 'GET INVOLVED');
  // linkGI.style('text-decoration', 'none');
  // linkGI.style('color', 'black');
  // linkGI.style('letter-spacing', '5');
  // linkGI.style('font-size', '8');
  //
  // linkA = createA('#', 'ABOUT');
  // linkA.style('text-decoration', 'none');
  // linkA.style('color', 'black');
  // linkA.style('letter-spacing', '5');
  // linkA.style('font-size', '8');
  //
  // linkCU = createA('#', 'CONTACT US');
  // linkCU.style('text-decoration', 'none');
  // linkCU.style('color', 'black');
  // linkCU.style('letter-spacing', '5');
  // linkCU.style('font-size', '8');


  //---EVENTS---

  linkR.mouseOver(overLinkR);
  linkR.mouseOut(offLinkR);
  linkE.mouseOver(overLinkE);
  linkE.mouseOut(offLinkE);
  linkCO.mouseOver(overLinkCO);
  linkCO.mouseOut(offLinkCO);

  //instantiate animations.
  fadeE = 0;
  fadeCO = 0;
  fadeR = 0;
}

//---HOVER---

function overLinkR() {
  animateR = true;
  linkR.style('font-style', 'oblique');
}

function offLinkR() {
  animateR = false;
  fadeR = 0;
  linkR.style('font-style', 'normal');
}

function overLinkE() {
  animateE = true;
  linkE.style('font-style', 'oblique');
}

function offLinkE() {
  animateE = false;
  fadeE = 0;
  linkE.style('font-style', 'normal');
}

function overLinkCO() {
  animateCO = true;
  linkCO.style('font-style', 'oblique');
}

function offLinkCO() {
  linkCO.style('font-style', 'normal');
  animateCO = false;
  fadeCO = 0;
}


//---***DRAW***-------------------------------------

function draw() {

  noStroke();
  background(255, 30);

  //positioning
  offsetX = windowWidth / 5.5;
  offsetY = windowHeight / 5;
  linkCO.position(offsetX * 2, 40);
  linkR.position(offsetX, 40);
  linkE.position(offsetX * 3, 40);
  linkAr.position((offsetX * 4) - 20, 40);

  // fill(0);
  // rect(windowWidth-60, 10, 60, 20);
  linkEN.position(windowWidth - 80, 15);
  linkFR.position(windowWidth - 50, 15);

//moved to html
  // linkA.position(25, windowHeight - 15);
  // linkCU.position(25, windowHeight - 15);
  // linkAO.position(25, windowHeight - 15);
  // linkGI.position(25, windowHeight - 15);

  //---ANIMATION---

  //---R---
  tint(255, fadeR);
  image(layerR, offsetX-20, 0, 50, 100);

  var c = color(255, 0, 255, fadeR);
  fill(c);

  if (animateR == true && fadeR <= 255) {
    fadeR += 10;
  }
  //---E---
  tint(255, fadeE);
  image(layerE, (offsetX*3)-20, 0, 50, 100);

  var c = color(255, 0, 255, fadeE);
  fill(c);

  if (animateE == true && fadeE <= 255) {
    fadeE += 10;
  }
  //---CO---
  tint(255, fadeCO);
  image(layerCO, (offsetX*2)-20, 0, 50, 100);

  var c = color(255, 0, 255, fadeCO);
  fill(c);

  if (animateCO == true && fadeCO <= 255) {
    fadeCO += 10;
  }

  tint(255, 255);
  image(amLogo, 25, 5, 80, 80);

}

function windowResized() {
  resizeCanvas(windowWidth, (windowHeight));

}
