//-------------------------------------------------------------
//     Created by Matthew Halpenny for Art Matters 2019
//-------------------------------------------------------------


//-------------------------------------------------------------
//     VARIABLES
//-------------------------------------------------------------

var animateR, animateA, animateCO, animateGI, animateAO, animateE, animateCU, mainOff = false;
var fadeR, fadeA, fadeCO, fadeE, fadeAO, fadeCU, fadeGI, fadeMain;
var linkOffset = 60;
var linkBuffer = 60;
var layerR, layerA, layerCO, layerE, layerAO, layerCU, layerGI;
var fadeIncr = 20;


//-------------------------------------------------------------
//     PRELOAD
//-------------------------------------------------------------

function preload() {

  layerR = loadImage('assets/RedLayer.png');
  layerA = loadImage('assets/BlueLayer.png');
  layerE = loadImage('assets/VioletLayer.png');
  layerGI = loadImage('assets/GrayLayer.png');
  layerCO = loadImage('assets/OrangeLayer.png');
  layerAO = loadImage('assets/GreenLayer.png');
  layerCU = loadImage('assets/YellowLayer.png');
  layerMain = loadImage('assets/LayerAll.png')
  amLogo = loadImage('assets/amlogo.png');
}

//-------------------------------------------------------------
//     SETUP
//-------------------------------------------------------------

function setup() {

  frameRate(10);
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
  linkGI.mouseOver(overLinkGI);
  linkGI.mouseOut(offLinkGI);
  linkE.mouseOver(overLinkE);
  linkE.mouseOut(offLinkE);
  linkCU.mouseOver(overLinkCU);
  linkCU.mouseOut(offLinkCU);
  linkAO.mouseOver(overLinkAO);
  linkAO.mouseOut(offLinkAO);

  //instantiate animations.
  fadeA = 0;
  fadeCO = 0;
  fadeR = 0;
  fadeAO = 0;
  fadeCU = 0;
  fadeE = 0;
  fadeGI = 0;
  fadeMain = 255;

}

//-------------------------------------------------------------
//     DRAW
//-------------------------------------------------------------


function draw() {

  noStroke();
  background(255, 50);

  //positioning
  linkR.position(20, linkBuffer + linkOffset);
  linkA.position(20, linkBuffer + linkOffset*2);
  linkCU.position(20, linkBuffer + linkOffset*3);
  linkE.position(20, linkBuffer + linkOffset*4);
  linkGI.position(20, linkBuffer + linkOffset*5);
  linkCO.position(20, linkBuffer + linkOffset*6);
  linkAO.position(20, linkBuffer + linkOffset*7);
  linkAr.position(20, linkBuffer + linkOffset*8);
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
  if (mainOff == false){
  tint(255, fadeMain);
  image(layerMain, windowWidth/2, height/2, windowWidth, windowHeight);
  fadeMain += fadeIncr;
  console.log("increase");
  }

  //---R---
  if (animateR == true) {
  tint(255, fadeR);
  image(layerR, windowWidth/2, height/2, windowWidth, windowHeight);
  fadeR += fadeIncr;
  }

  //---A---
  if (animateA == true) {
  tint(255, fadeA);
  image(layerA, windowWidth/2, height/2, windowWidth, windowHeight);
  fadeA += fadeIncr;
  }

  //---CO---
  if (animateCO == true) {
  tint(255, fadeCO);
  image(layerCO, windowWidth/2, height/2, windowWidth, windowHeight);
  fadeCO += fadeIncr;
  }

  //---GI---
  if (animateGI == true) {
  tint(255, fadeGI);
  image(layerGI, windowWidth/2, height/2, windowWidth, windowHeight);
  fadeGI += fadeIncr;
  }

  //---AO---
  if (animateAO == true) {
  tint(255, fadeAO);
  image(layerAO, windowWidth/2, height/2, windowWidth, windowHeight);
  fadeAO += fadeIncr;
  }

  //---CU---
  if (animateCU == true) {
  tint(255, fadeCU);
  image(layerCU, windowWidth/2, height/2, windowWidth, windowHeight);
  fadeCU += fadeIncr;
  }

  //---E---
  if (animateE == true) {
  tint(255, fadeE);
  image(layerE, windowWidth/2, height/2, windowWidth, windowHeight);
  fadeE += fadeIncr;
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

//---R---

function overLinkR() {
  animateR = true;
  linkR.style('font-style', 'italic');
  mainOff = true;
  fadeMain = 0;
}

function offLinkR() {
  animateR = false;
  fadeR = 0;
  linkR.style('font-style', 'normal');
  mainOff = false;
}

//---A---

function overLinkA() {
  animateA = true;
  linkA.style('font-style', 'italic');
  mainOff = true;
  fadeMain = 0;
}

function offLinkA() {
  animateA = false;
  fadeA = 0;
  linkA.style('font-style', 'normal');
  mainOff = false;
}

//---CO---

function overLinkCO() {
  animateCO = true;
  linkCO.style('font-style', 'italic');
  mainOff = true;
  fadeMain = 0;
}

function offLinkCO() {
  animateCO = false;
  fadeCO = 0;
  linkCO.style('font-style', 'normal');
  mainOff = false;
}

//---CU---

function overLinkCU() {
  animateCU = true;
  linkCU.style('font-style', 'italic');
  mainOff = true;
  fadeMain = 0;
}

function offLinkCU() {
  animateCU = false;
  fadeCU = 0;
  linkCU.style('font-style', 'normal');
  mainOff = false;
}

//---GI---

function overLinkGI() {
  animateGI = true;
  linkGI.style('font-style', 'italic');
  mainOff = true;
  fadeMain = 0;
}

function offLinkGI() {
  animateGI = false;
  fadeGI = 0;
  linkGI.style('font-style', 'normal');
  mainOff = false;
}

//---AO---

function overLinkAO() {
  animateAO = true;
  linkAO.style('font-style', 'italic');
  mainOff = true;
  fadeMain = 0;
}

function offLinkAO() {
  animateAO = false;
  fadeAO = 0;
  linkAO.style('font-style', 'normal');
  mainOff = false;
}

//---E---

function overLinkE() {
  animateE = true;
  linkE.style('font-style', 'italic');
  mainOff = true;
  fadeMain = 0;
}

function offLinkE() {
  animateE = false;
  fadeE = 0;
  linkE.style('font-style', 'normal');
  mainOff = false;
}

function windowResized() {
  resizeCanvas(windowWidth, (windowHeight));

}
