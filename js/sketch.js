//-------------------------------------------------------------
//     Created by Matthew Halpenny for Art Matters 2019
//-------------------------------------------------------------


//-------------------------------------------------------------
//     VARIABLES
//-------------------------------------------------------------

var animateR = false, animateA = false, animateM = false, animateGI = false, animateAr = false, animateE = false, animateC = false, mainOff = false, animateCSM = false, animateCSC = false, animateCSE = false;
var fadeR = 0, fadeA = 0, fadeM = 0, fadeE = 0, fadeAr = 0, fadeC = 0, fadeGI = 0, fadeMain = 255;
var linkOffset, linkBuffer;
var layerR, layerA, layerM, layerE, layerAr, layerC, layerGI;
var iconR, iconA, iconM, iconE, iconAr, iconC, iconGI;
var fadeIncr = 35;
var valueM = 0, valueC = 0, valueE = 0;
// var cpuPause = false;


//-------------------------------------------------------------
//     PRELOAD
//-------------------------------------------------------------

function preload() {

  //layers
  layerA = loadImage('assets/RedLayer.png');
  layerR = loadImage('assets/BlueLayer.png');
  layerM = loadImage('assets/VioletLayer.png');
  layerE = loadImage('assets/GrayLayer.png');
  layerC = loadImage('assets/GreenLayer.png');
  layerAr = loadImage('assets/OrangeLayer.png');
  layerGI = loadImage('assets/YellowLayer.png');
  layerMain = loadImage('assets/LayerAll80.png');
  //icons
  iconA = loadImage('assets/rrIcon.png');
  iconR = loadImage('assets/bIcon.png');
  iconM = loadImage('assets/vIcon.png');
  iconE = loadImage('assets/rIcon.png');
  iconC = loadImage('assets/gIcon.png');
  iconAr = loadImage('assets/oIcon.png');
  iconGI = loadImage('assets/yIcon.png');
  //logo
  amLogo = loadImage('assets/amlogo.png');
}

//-------------------------------------------------------------
//-------------------------------------------------------------
//     SETUP
//-------------------------------------------------------------

function setup() {

  frameRate(15);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.position(0, 0);

  //-------------------------------------------------------------
  //     LINKS (SETUP)
  //-------------------------------------------------------------

  // optionally migrate to CSS for all links

  linkR = createA('resources.html', 'RESOURCES');

  linkA = createA('about.html', 'ABOUT');

  linkC = createA('#', 'CALENDER');

  linkAr = createA('#', 'ARCHIVE');

  linkGI = createA('#', 'GET INVOLVED');

  linkE = createA('#', 'EVENTS');

  linkM = createA('#', 'MAP');

  // linkAO = createA('pdf/AM_AntiO.pdf', 'ANTI-OPPRESSION STATEMENT');

  linkEN = createA('index.html', 'EN');
  linkEN.id('lang');
  linkFR = createA('indexFR.html', 'FR');
  linkFR.id('lang');

  linkCSM = createA('#', 'COMING SOON');
  linkCSM.style('opacity', '0');
  linkCSM.style('z-index', '-1');

  linkCSC = createA('#', 'COMING SOON');
  linkCSC.style('opacity', '0');
  linkCSC.style('z-index', '-1');

  linkCSE = createA('#', 'COMING SOON');
  linkCSE.style('opacity', '0');
  linkCSE.style('z-index', '-1');






  //-------------------------------------------------------------
  //     EVENTS (SETUP)
  //-------------------------------------------------------------


  linkR.mouseOver(overLinkR);
  linkR.mouseOut(offLinkR);
  linkA.mouseOver(overLinkA);
  linkA.mouseOut(offLinkA);
  linkM.mouseOver(overlinkM);
  linkM.mouseOut(offlinkM);
  linkGI.mouseOver(overLinkGI);
  linkGI.mouseOut(offLinkGI);
  linkE.mouseOver(overLinkE);
  linkE.mouseOut(offLinkE);
  linkC.mouseOver(overlinkC);
  linkC.mouseOut(offlinkC);
  linkAr.mouseOver(overLinkAr);
  linkAr.mouseOut(offLinkAr);

  //instantiate animations.
  // fadeA = 0;
  // fadeM = 0;
  // fadeR = 0;
  // fadeAr = 0;
  // fadeC = 0;
  // fadeE = 0;
  // fadeGI = 0;
  // fadeMain = 255;
  // valueM = 0;
  // valueE = 0;
  // valueC = 0;
  // mainOff = false;

}

//-------------------------------------------------------------
//     DRAW
//-------------------------------------------------------------


function draw() {

  noStroke();
  // background(239, 251, 252, 50);
  // background(255, 251, 242, 50);
  // background(255, 234, 234, 50);
  background(255, 50);
  // if (cpuPause == false){
  //   background(255, 50);
  // }

  if (windowWidth > 650) {
    //variable math
    linkOffset = 90 - (windowHeight) * 0.02
    linkBuffer = 80 - (windowHeight) * 0.015
    var linkMargin = 29;
  } else {
    //variable math
    linkOffset = 75 - (windowHeight) * 0.05
    linkBuffer = 80 - (windowHeight) * 0.015
    var linkMargin = 29;
  }

  //positioning
  linkA.position(linkMargin, linkBuffer + linkOffset);
  linkR.position(linkMargin, linkBuffer + linkOffset * 2);
  linkGI.position(linkMargin, linkBuffer + linkOffset * 3);
  linkM.position(linkMargin, linkBuffer + linkOffset * 4);
  linkC.position(linkMargin, linkBuffer + linkOffset * 5);
  linkE.position(linkMargin, linkBuffer + linkOffset * 6);
  // linkAO.position(linkMargin, linkBuffer + linkOffset*7);
  linkAr.position(linkMargin, linkBuffer + linkOffset * 7);

  linkEN.position(windowWidth - 65, 15);
  linkFR.position(windowWidth - 40, 15);

  linkCSM.position(linkMargin, linkBuffer + linkOffset * 4);
  linkCSC.position(linkMargin, linkBuffer + linkOffset * 5);
  linkCSE.position(linkMargin, linkBuffer + linkOffset * 6);




  //-------------------------------------------------------------
  //     PNG ANIMATIONS (DRAW)
  //-------------------------------------------------------------

  //align with the cnter of the page
  imageMode(CENTER);

  //---MAIN---
  // if (mainOff == false && cpuPause == false){
  if (mainOff == false) {
    tint(255, fadeMain);
    image(layerMain, windowWidth / 2, height / 2, windowWidth, windowHeight);
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
    image(layerR, windowWidth / 2, height / 2, windowWidth, windowHeight);
    image(iconR, linkMargin, (linkBuffer + linkOffset * 2), 50, 50);
    fadeR += fadeIncr;
  }

  //---A---
  if (animateA == true) {
    tint(255, fadeA);
    image(layerA, windowWidth / 2, height / 2, windowWidth, windowHeight);
    image(iconA, linkMargin, (linkBuffer + linkOffset), 50, 50);
    fadeA += fadeIncr;
  }

  //---GI---
  if (animateGI == true) {
    tint(255, fadeGI);
    image(layerGI, windowWidth / 2, height / 2, windowWidth, windowHeight);
    image(iconGI, linkMargin, (linkBuffer + linkOffset * 3), 50, 50);
    fadeGI += fadeIncr;
  }

  //---Ar---
  if (animateAr == true) {
    tint(255, fadeAr);
    image(layerAr, windowWidth / 2, height / 2, windowWidth, windowHeight);
    image(iconAr, linkMargin, (linkBuffer + linkOffset * 7), 50, 50);
    fadeAr += fadeIncr;
  }

  //---M---
  if (animateM == true) {
    tint(255, fadeM);
    image(layerM, windowWidth / 2, height / 2, windowWidth, windowHeight);
    image(iconM, linkMargin, (linkBuffer + linkOffset * 4), 50, 50);
    var m = map(fadeM, 0, 255, 0.0, 1.0);
    var n = map(fadeM, 0, 255, 1.0, 0.0);

    linkCSM.style("opacity", m);
    linkM.style("opacity", n);

    // linkCSM.position(linkMargin, linkBuffer + linkOffset*4);
    fadeM += fadeIncr;
  }
  
  //---C---
  if (animateC == true) {
    tint(255, fadeC);
    image(layerC, windowWidth / 2, height / 2, windowWidth, windowHeight);
    image(iconC, linkMargin, (linkBuffer + linkOffset * 5), 50, 50);
    var m = map(fadeC, 0, 255, 0.0, 1.0);
    var n = map(fadeC, 0, 255, 1.0, 0.0);

    linkCSC.style("opacity", m);
    linkC.style("opacity", n);

    fadeC += fadeIncr;
  }

  //---E---
  if (animateE == true) {
    tint(255, fadeE);
    image(layerE, windowWidth / 2, height / 2, windowWidth, windowHeight);
    image(iconE, linkMargin, (linkBuffer + linkOffset * 6), 50, 50);
    var m = map(fadeE, 0, 255, 0.0, 1.0);
    var n = map(fadeE, 0, 255, 1.0, 0.0);

    linkCSE.style("opacity", m);
    linkE.style("opacity", n);

    fadeE += fadeIncr;
  }

  //---CSM---
  if (animateCSM == true) {


    var a = map(valueM, 0, 255, 0.0, 1.0, true);
    var b = map(valueM, 0, 255, 1.0, 0.0, true);

    linkM.style("opacity", a);
    linkCSM.style("opacity", b);

    valueM += fadeIncr;

    if (a >= 1.0) {
      animateCSM = false;
      valueM = 0;
    }

  }

  //---CSC---
  if (animateCSC == true) {


    var c = map(valueC, 0, 255, 0.0, 1.0, true);
    var d = map(valueC, 0, 255, 1.0, 0.0, true);

    linkC.style("opacity", c);
    linkCSC.style("opacity", d);

    valueC += fadeIncr;

    if (c >= 1.0) {
      animateCSC = false;
      valueC = 0;
    }

  }

  //---CSE--
  if (animateCSE == true) {

    var e = map(valueE, 0, 255, 0.0, 1.0, true);
    var f = map(valueE, 0, 255, 1.0, 0.0, true);

    linkE.style("opacity", e);
    linkCSE.style("opacity", f);

    valueE += fadeIncr;

    if (e >= 1.0) {
      animateCSE = false;
      valueE = 0;
    }

  }

  //-------------------------------------------------------------
  //     LOGO ANIMATION (DRAW)
  //-------------------------------------------------------------

  if (windowWidth > 650) {
    imageMode(CENTER);
    tint(255, 255);
    image(amLogo, 80, 60, 125, 125);
  } else {
    imageMode(CENTER);
    tint(255, 255);
    image(amLogo, 65, 50, 80, 80);
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

function overlinkM() {
  animateM = true;
  mainOff = true;
  fadeMain = 0;
  // linkM.style('font-style', 'italic');

}

function offlinkM() {
  animateM = false;
  fadeM = 0;
  mainOff = false;
  animateCSM = true;
  // linkM.style('font-style', 'normal');

}

//---CU---

function overlinkC() {
  animateC = true;
  // linkC.style('font-style', 'italic');
  mainOff = true;
  fadeMain = 0;

}

function offlinkC() {
  animateC = false;
  fadeC = 0;
  animateCSC = true;
  // linkC.style('font-style', 'normal');
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
  // linkE.style('font-style', 'italic');
  mainOff = true;
  fadeMain = 0;
}

function offLinkE() {
  animateE = false;
  fadeE = 0;
  animateCSE = true;
  // linkE.style('font-style', 'normal');
  mainOff = false;
}

function windowResized() {
  resizeCanvas(windowWidth, (windowHeight));

}
