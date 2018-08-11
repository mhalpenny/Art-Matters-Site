//-------------------------------------------------------------
//     Created by Matthew Halpenny for Art Matters 2019
//-------------------------------------------------------------


//-------------------------------------------------------------
//     VARIABLES
//-------------------------------------------------------------

var animateR, animateA, animateCO, mainOff = false;
var fadeR, fadeA, fadeCO, fadeMain;
var linkOffset = 60;
var linkBuffer = 60;
var layerR, layerA, layerCO;
var fadeIncr = 20;


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

  //instantiate animations.
  fadeA = 0;
  fadeCO = 0;
  fadeR = 0;
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
  fadeMain = 0;
  console.log("reload off");
}

function offLinkR() {
  animateR = false;
  fadeR = 0;
  linkR.style('font-style', 'normal');
  mainOff = false;
  console.log("reload on");
}

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

function windowResized() {
  resizeCanvas(windowWidth, (windowHeight));

}
