//-------------------------------------------------------------
//     Created by Matthew Halpenny for Art Matters 2019
//-------------------------------------------------------------


//-------------------------------------------------------------
//     VARIABLES
//-------------------------------------------------------------

var animateR, animateA, animateCO, mainOff, erase = false;
var fadeR, fadeA, fadeCO, fadeMain;
var linkOffset = 60;
var linkBuffer = 60;
var layerR, layerA, layerCO;


//-------------------------------------------------------------
//     PRELOAD
//-------------------------------------------------------------

function preload() {

  layerR = loadImage('assets/RedLayer.png');
  layerA = loadImage('assets/BlueLayer.png');
  layerCO = loadImage('assets/VioletLayer.png');
  layerMain = loadImage('assets/LayerAll.png')
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

  //draw main image
  imageMode(CENTER);
  tint(255, 255);
  image(layerMain, windowWidth/2, height/2, windowWidth, windowHeight);

}

//-------------------------------------------------------------
//     DRAW
//-------------------------------------------------------------


function draw() {

  noStroke();
  //only draw the background if needed
  if (erase == true){
  background(255, 100);
 }

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

  //align with the cnter of the page
  imageMode(CENTER);

  //---MAIN---
  tint(255, fadeMain);
  if (fadeMain < 255){
  image(layerMain, windowWidth/2, height/2, windowWidth, windowHeight);
  }
  var c = color(255, 0, 255, fadeMain);
  fill(c);

  if (mainOff == true) {
    fadeMain -= 50;
  } else if (mainOff == false){
    fadeMain += 10;
  }

  //---R---
  tint(255, fadeR);
  if (fadeR < 255){
  image(layerR, windowWidth/2, height/2, windowWidth, windowHeight);
}

  if (animateR == true && fadeR <= 255) {
    fadeR += 10;
  }

  //---A---
  tint(255, fadeA);
  if (fadeA < 255){
  image(layerA, windowWidth/2, height/2, windowWidth, windowHeight);
}
  if (animateA == true && fadeA <= 255) {
    fadeA += 10;
  }

  //---CO---
  tint(255, fadeCO);
  if (fadeCO < 255){
  image(layerCO, windowWidth/2, height/2, windowWidth, windowHeight);
}
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
  mainOff = true;
  if (fadeR < 200){
  erase = true;
} else{
  erase = false;
}
}

function offLinkR() {
  animateR = false;
  fadeR = 0;
  linkR.style('font-style', 'normal');
  mainOff = false;
  erase = false;
}

function overLinkA() {
  animateA = true;
  linkA.style('font-style', 'italic');
  mainOff = true;
  erase = true;
}

function offLinkA() {
  animateA = false;
  fadeA = 0;
  linkA.style('font-style', 'normal');
  mainOff = false;
  erase = false;
}

function overLinkCO() {
  animateCO = true;
  linkCO.style('font-style', 'italic');
  mainOff = true;
  erase = true;
}

function offLinkCO() {
  animateCO = false;
  fadeCO = 0;
  linkCO.style('font-style', 'normal');
  mainOff = false;
  erase = false;
}

function windowResized() {
  resizeCanvas(windowWidth, (windowHeight));

}
