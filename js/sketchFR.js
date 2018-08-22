//-------------------------------------------------------------
//     Created by Matthew Halpenny for Art Matters 2019
//-------------------------------------------------------------


//-------------------------------------------------------------
//     VARIABLES
//-------------------------------------------------------------

var animateR, animateA, animateCO, animateGI, animateAr, animateE, animateCU, mainOff = false;
var fadeR, fadeA, fadeCO, fadeE, fadeAr, fadeCU, fadeGI, fadeMain;
var linkOffset, linkBuffer;
var layerR, layerA, layerCO, layerE, layerAr, layerCU, layerGI;
var iconR, iconA, iconCO, iconE, iconAr, iconCU, iconGI;
var fadeIncr = 35;
// var cpuPause = false;


//-------------------------------------------------------------
//     PRELOAD
//-------------------------------------------------------------

function preload() {

//layers
  layerR = loadImage('assets/RedLayer.png');
  layerA = loadImage('assets/BlueLayer.png');
  layerE = loadImage('assets/VioletLayer.png');
  layerGI = loadImage('assets/GrayLayer.png');
  layerCO = loadImage('assets/GreenLayer.png');
  layerAr = loadImage('assets/OrangeLayer.png');
  layerCU = loadImage('assets/YellowLayer.png');
  layerMain = loadImage('assets/LayerAll80.png');
  //icons
  iconR = loadImage('assets/rIcon.png');
  iconA = loadImage('assets/bIcon.png');
  iconE = loadImage('assets/vIcon.png');
  iconGI = loadImage('assets/gyIcon.png');
  iconCO = loadImage('assets/gIcon.png');
  iconAr = loadImage('assets/oIcon.png');
  iconCU = loadImage('assets/yIcon.png');
  //logo
  amLogo = loadImage('assets/amlogo.png');
}

//-------------------------------------------------------------
//-------------------------------------------------------------
//     SETUP
//-------------------------------------------------------------

function setup() {

  frameRate(12);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.position(0, 0);

  //-------------------------------------------------------------
  //     LINKS (SETUP)
  //-------------------------------------------------------------

  // optionally migrate to CSS for all links

  linkR = createA('#', 'RESSOURCES');

  linkA = createA('about.html', 'À PROPOS');

  linkCU = createA('#', 'NOUS JOINDRE');

  linkAr = createA('#', 'ARCHIVE');

  linkGI = createA('#', 'DEVENIR LE ENGAGE');

  linkE = createA('#', 'ÉVÉNEMENTS');

  linkCO = createA('#', 'APPELS EN COURS');

  // linkAO = createA('pdf/AM_AntiO.pdf', 'ANTI-OPPRESSION STATEMENT');

  linkEN = createA('index.html', 'EN');
  linkEN.id('lang');
  linkFR = createA('indexFR.html', 'FR');
  linkFR.id('lang');



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
  linkAr.mouseOver(overLinkAr);
  linkAr.mouseOut(offLinkAr);

  //instantiate animations.
  fadeA = 0;
  fadeCO = 0;
  fadeR = 0;
  fadeAr = 0;
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
  // background(255, 251, 242, 50);
  // background(255, 234, 234, 50);

  // if (cpuPause == false){
  //   background(255, 50);
  // }

  if (windowWidth > 650){
    //variable math
    linkOffset = 90 - (windowHeight)*0.02
    linkBuffer = 80 - (windowHeight)*0.015
    var linkMargin = 29;
  } else {
    //variable math
    linkOffset = 75 - (windowHeight)*0.01
    linkBuffer = 80 - (windowHeight)*0.015
    var linkMargin = 29;
  }

  //positioning
  linkR.position(linkMargin, linkBuffer + linkOffset);
  linkA.position(linkMargin, linkBuffer + linkOffset*2);
  linkCU.position(linkMargin, linkBuffer + linkOffset*3);
  linkE.position(linkMargin, linkBuffer + linkOffset*4);
  linkGI.position(linkMargin, linkBuffer + linkOffset*5);
  linkCO.position(linkMargin, linkBuffer + linkOffset*6);
  // linkAO.position(linkMargin, linkBuffer + linkOffset*7);
  linkAr.position(linkMargin, linkBuffer + linkOffset*7);

  linkEN.position(windowWidth - 65, 15);
  linkFR.position(windowWidth - 35, 15);



  //-------------------------------------------------------------
  //     PNG ANIMATIONS (DRAW)
  //-------------------------------------------------------------

  //align with the cnter of the page
  imageMode(CENTER);

  //---MAIN---
  // if (mainOff == false && cpuPause == false){
  if (mainOff == false){
  tint(255, fadeMain);
  image(layerMain, windowWidth/2, height/2, windowWidth, windowHeight);
  // fadeMain += fadeIncr;
  fadeMain += fadeIncr;
  }

  //pause animation if already at max
  // if (fadeMain <= 20){
  //   cpuPause = false;
  // } else if (fadeMain == 500){
  //   cpuPause = true;
  // }

//debugging
  // fill(0);
  // textSize(14);
  // text(fadeMain, 200, 20);
  // text(fadeR, 250, 20);

  //---R---
  if (animateR == true) {
  tint(255, fadeR);
  image(layerR, windowWidth/2, height/2, windowWidth, windowHeight);
  image(iconR, linkMargin, (linkBuffer + linkOffset), 50, 50);
  fadeR += fadeIncr;
  }

  //---A---
  if (animateA == true) {
  tint(255, fadeA);
  image(layerA, windowWidth/2, height/2, windowWidth, windowHeight);
  image(iconA, linkMargin, (linkBuffer + linkOffset*2), 50, 50);
  fadeA += fadeIncr;
  }

  //---CO---
  if (animateCO == true) {
  tint(255, fadeCO);
  image(layerCO, windowWidth/2, height/2, windowWidth, windowHeight);
  image(iconCO, linkMargin, (linkBuffer + linkOffset*6), 50, 50);
  fadeCO += fadeIncr;
  }

  //---GI---
  if (animateGI == true) {
  tint(255, fadeGI);
  image(layerGI, windowWidth/2, height/2, windowWidth, windowHeight);
  image(iconGI, linkMargin, (linkBuffer + linkOffset*5), 50, 50);
  fadeGI += fadeIncr;
  }

  //---Ar---
  if (animateAr == true) {
  tint(255, fadeAr);
  image(layerAr, windowWidth/2, height/2, windowWidth, windowHeight);
  image(iconAr, linkMargin, (linkBuffer + linkOffset*7), 50, 50);
  fadeAr += fadeIncr;
  }

  //---CU---
  if (animateCU == true) {
  tint(255, fadeCU);
  image(layerCU, windowWidth/2, height/2, windowWidth, windowHeight);
  image(iconCU, linkMargin, (linkBuffer + linkOffset*3), 50, 50);
  fadeCU += fadeIncr;
  }

  //---E---
  if (animateE == true) {
  tint(255, fadeE);
  image(layerE, windowWidth/2, height/2, windowWidth, windowHeight);
  image(iconE, linkMargin, (linkBuffer + linkOffset*4), 50, 50);
  fadeE += fadeIncr;
  }

  //-------------------------------------------------------------
  //     LOGO ANIMATION (DRAW)
  //-------------------------------------------------------------

  if (windowWidth > 650){
    imageMode(CENTER);
    tint(255, 255);
    image(amLogo, 70, 50, 105, 105);
  } else {
    imageMode(CENTER);
    tint(255, 255);
    image(amLogo, 65, 50, 90, 90);
  }

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

function overLinkAr() {
  animateAr = true;
  linkAr.style('font-style', 'italic');
  mainOff = true;
  fadeMain = 0;
}

function offLinkAr() {
  animateAr = false;
  fadeAr = 0;
  linkAr.style('font-style', 'normal');
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
  background(239, 251, 252);
}
