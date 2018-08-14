//-------------------------------------------------------------
//     Created by Matthew Halpenny for Art Matters 2019
//-------------------------------------------------------------


//-------------------------------------------------------------
//     VARIABLES
//-------------------------------------------------------------


var offset;
var logoSpin = 0;
var logoY = 50;
var animateR, animateA, animateCO, animateGI, animateAr, animateE, animateCU, mainOff = false;
var fadeR, fadeA, fadeCO, fadeE, fadeAr, fadeCU, fadeGI, fadeMain;
var linkOffset, linkBuffer;
var fadeIncr = 35;
// var cpuPause = false;

//-------------------------------------------------------------
//     PRELOAD
//-------------------------------------------------------------

function preload() {
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
//     SETUP
//-------------------------------------------------------------

function setup() {

  frameRate(12);
  //retrieve div id
  var bodyH = document.getElementById('gallery');
  //use id to get div height for canvas scrolling length
  var canvasH = bodyH.scrollHeight;
  //create canvas at appropriate length for page
  canvas = createCanvas(windowWidth, canvasH);
  //basic canvas formatting
  canvas.style("z-index", "-1");
  canvas.position(0, 0);

  //-------------------------------------------------------------
  //     LINKS (SETUP)
  //-------------------------------------------------------------

  linkR = createA('#', 'RESOURCES');

  linkA = createA('#', 'ABOUT');

  linkCU = createA('#', 'CONTACT US');

  linkAr = createA('#', 'ARCHIVE');

  linkGI = createA('#', 'GET INVOLVED');

  linkE = createA('#', 'EVENTS');

  linkCO = createA('#', 'CALL-OUTS');

  // linkAO = createA('pdf/AM_AntiO.pdf', 'ANTI-OPPRESSION STATEMENT');

  linkEN = createA('index.html', 'EN');
  linkFR = createA('indexFR.html', 'FR');

  //---EVENTS---

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

}

//-------------------------------------------------------------
//     DRAW
//-------------------------------------------------------------


function draw() {

  noStroke();
  background(255, 50);

  var top = window.pageYOffset;

  if (windowWidth > 650){
    //variable math
    linkOffset = 50;
    linkBuffer = top + 80;
    var linkMargin = 29;
  } else {
    //variable math
    linkOffset = 50;
    linkBuffer = top + 80;
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

  //---R---
  if (animateR == true) {
  tint(255, fadeR);
  image(iconR, linkMargin, (linkBuffer + linkOffset), 50, 50);
  fadeR += fadeIncr;
  }

  //---A---
  if (animateA == true) {
  tint(255, fadeA);
  image(iconA, linkMargin, (linkBuffer + linkOffset*2), 50, 50);
  fadeA += fadeIncr;
  }

  //---CO---
  if (animateCO == true) {
  tint(255, fadeCO);
  image(iconCO, linkMargin, (linkBuffer + linkOffset*6), 50, 50);
  fadeCO += fadeIncr;
  }

  //---GI---
  if (animateGI == true) {
  tint(255, fadeGI);
  image(iconGI, linkMargin, (linkBuffer + linkOffset*5), 50, 50);
  fadeGI += fadeIncr;
  }

  //---Ar---
  if (animateAr == true) {
  tint(255, fadeAr);
  image(iconAr, linkMargin, (linkBuffer + linkOffset*7), 50, 50);
  fadeAr += fadeIncr;
  }

  //---CU---
  if (animateCU == true) {
  tint(255, fadeCU);
  image(iconCU, linkMargin, (linkBuffer + linkOffset*3), 50, 50);
  fadeCU += fadeIncr;
  }

  //---E---
  if (animateE == true) {
  tint(255, fadeE);
  image(iconE, linkMargin, (linkBuffer + linkOffset*4), 50, 50);
  fadeE += fadeIncr;
  }

  //-------------------------------------------------------------
  //     LOGO ANIMATIONS (DRAW)
  //-------------------------------------------------------------


  angleMode(DEGREES);
  imageMode(CENTER);
  tint(255, 255);
  var wOffset = windowWidth/800;
  var sizeOffset = windowWidth/1000;
  var topNew = top + 62;
  push();
    if (windowWidth > 650){
  translate(linkMargin*2.5, topNew);
  rotate(logoSpin);
  background(255);
  image(amLogo, 0, 0, 100, 100);
} else{
  translate(linkMargin*1.5, topNew);
  rotate(logoSpin);
  image(amLogo, 0, 0, 70, 70);
}
  pop();

}


//-------------------------------------------------------------
//     FUNCTIONS
//-------------------------------------------------------------

//---HOVER---

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

//---MOUSEWHEEL---

function mouseWheel(event) {
  print(event.delta);
  //smoothen delta

  //move the square according to the vertical scroll amount
  logoSpin += (event.delta);

  // background(255);
  //uncomment to block page scrolling
  // return false;
}


function windowResized() {

  var bodyH = document.getElementById('gallery');
  //use id to get div height for canvas scrolling length
  var canvasH = bodyH.scrollHeight;

  resizeCanvas(windowWidth, (canvasH));

}
