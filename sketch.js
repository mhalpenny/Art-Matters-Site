//-------------------------------------------------------------
//     Created by Matthew Halpenny for Art Matters 2019
//-------------------------------------------------------------


//-------------------------------------------------------------
//     VARIABLES
//-------------------------------------------------------------

var animateR, animateA, animateCO = false;
var fadeR, fadeA, fadeCO;
var linkOffset = 60;
var linkBuffer = 60;
var layerR, layerA, layerCO;


//-------------------------------------------------------------
//     PRELOAD
//-------------------------------------------------------------

function preload() {

  layerR = loadImage('assets/layerR.png');
  layerA = loadImage('assets/layerA.png');
  layerCO = loadImage('assets/layerCO.png');
  amLogo = loadImage('assets/amlogo.png');
}

//-------------------------------------------------------------
//     SETUP
//-------------------------------------------------------------

function setup() {

  frameRate(60);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.position(0, 0);

  //-------------------------------------------------------------
  //     LINKS (SETUP)
  //-------------------------------------------------------------

  // optionally migrate to CSS for all links

  linkR = createA('#', 'RESOURCES');

  linkA = createA('#', 'ABOUT');

  linkCU = createA('#', 'CONTACT US');

  linkAr = createA('#', 'ARCHIVE');

  linkGI = createA('#', 'GET INVOLVED');

  linkE = createA('#', 'EVENTS');

  linkCO = createA('#', 'CALL-OUTS');


  linkAO = createA('pdf/AM_AntiO.pdf', 'ANTI-OPPRESSION STATEMENT');

  linkEN = createA('index.html', 'EN');
  linkFR = createA('indexFR.html', 'FR');


  //-------------------------------------------------------------
  //     EVENTS (SETUP)
  //-------------------------------------------------------------


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

//-------------------------------------------------------------
//     DRAW
//-------------------------------------------------------------


function draw() {

  noStroke();
  background(255, 30);

  //positioning
  linkR.position(20, linkBuffer + linkOffset);
  linkA.position(20, linkBuffer + linkOffset*2);
  linkCU.position(20, linkBuffer + linkOffset*3);
  linkE.position(20, linkBuffer + linkOffset*4);
  linkGI.position(20, linkBuffer + linkOffset*5);
  linkAr.position(20, linkBuffer + linkOffset*6);
  linkCO.position(20, linkBuffer + linkOffset*7);
  linkAO.position(20, linkBuffer + linkOffset*8);
  // fill(0);
  // rect(windowWidth-60, 10, 60, 20);
  linkEN.position(windowWidth - 60, 15);
  linkFR.position(windowWidth - 35, 15);




  //-------------------------------------------------------------
  //     PNG ANIMATIONS (DRAW)
  //-------------------------------------------------------------

  //---R---
  tint(255, fadeR);
  image(layerR, 70, -100);

  var c = color(255, 0, 255, fadeR);
  fill(c);

  if (animateR == true && fadeR <= 255) {
    fadeR += 10;
  }
  //---A---
  tint(255, fadeA);
  image(layerA, 70, -100);

  var c = color(255, 0, 255, fadeA);
  fill(c);

  if (animateA == true && fadeA <= 255) {
    fadeA += 10;
  }
  //---CO---
  tint(255, fadeCO);
  image(layerCO, 70, -100);

  var c = color(255, 0, 255, fadeCO);
  fill(c);

  if (animateCO == true && fadeCO <= 255) {
    fadeCO += 10;
  }

  //-------------------------------------------------------------
  //     LOGO ANIMATION (DRAW)
  //-------------------------------------------------------------

  imageMode(CENTER);
  tint(255, 255);
  image(amLogo, 60, 50, 95, 95);

}


//-------------------------------------------------------------
//     FUNCTIONS
//-------------------------------------------------------------


function overLinkR() {
  animateR = true;
  linkR.style('font-style', 'italic');
}

function offLinkR() {
  animateR = false;
  fadeR = 0;
  linkR.style('font-style', 'normal');
}

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

function windowResized() {
  resizeCanvas(windowWidth, (windowHeight));

}
