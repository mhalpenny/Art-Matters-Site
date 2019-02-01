//-------------------------------------------------------------
//     Created by Matthew Halpenny for Art Matters 2019
//-------------------------------------------------------------


//-------------------------------------------------------------
//     VARIABLES
//-------------------------------------------------------------

var animateR = false,
  animateA = false,
  animateM = false,
  animateGI = false,
  animateAr = false,
  animateE = false,
  animateC = false,
  animateEx = false,
  mainOff = false,
  animateCSM = false,
  animateCSC = false,
  animateCSE = false;
let fadeR = 0,
  fadeA = 0,
  fadeM = 0,
  fadeE = 0,
  fadeAr = 0,
  fadeC = 0,
  fadeGI = 0,
  fadeEx = 0,
  fadeMain = 255;
let linkOffset, linkBuffer, linkMargin;
let layerR, layerA, layerM, layerE, layerAr, layerC, layerGI, layerEx, layerEye;
let iconR, iconA, iconM, iconE, iconAr, iconC, iconGI, iconEx;
let logoSpin;
let csW, csW2, rW, rW2;
let fadeIncr = 35;
let valueM = 0,
  valueC = 0,
  valueE = 0;
let loading = true;
let loadCount = 0;
let cpuPause = false;
let mobileCount = 0;
let drawX, drawY, drawW, drawH, el, elBound;
let textW1, textW2, textH1, textH2;
let newWidth, trail, trailY;
let right = true;
let font,
  fontsize1, fontsize2;
  let testFadeA, testFadeB;

//-------------------------------------------------------------
//     PRELOAD
//-------------------------------------------------------------

function preload() {

  //layers
  layerA = loadImage('assets/box/redLayer.png');
  layerR = loadImage('assets/box/blueLayer.png');
  layerM = loadImage('assets/box/violetLayer.png');
  layerE = loadImage('assets/box/greyLayer.png');
  layerC = loadImage('assets/box/greenLayer.png');
  layerAr = loadImage('assets/box/orangeLayer.png');
  layerGI = loadImage('assets/box/yellowLayer.png');
  layerMain = loadImage('assets/layerAllBox.png');
  //icons
  iconA = loadImage('assets/rrIcon.png');
  iconR = loadImage('assets/bIcon.png');
  iconM = loadImage('assets/vIcon.png');
  iconE = loadImage('assets/rIcon.png');
  iconC = loadImage('assets/gIcon.png');
  iconAr = loadImage('assets/oIcon.png');
  iconGI = loadImage('assets/yIcon.png');
  iconEx = loadImage('assets/gyIcon.png');
  //logo
  amLogo = loadImage('assets/amlogo.png');
  //fonts
  font = loadFont('fonts/Quicksand-Medium.ttf');
}

//-------------------------------------------------------------
//-------------------------------------------------------------
//     SETUP
//-------------------------------------------------------------
//-------------------------------------------------------------

function setup() {

  frameRate(15);
  // newWidth = windowWidth - (windowWidth*0.2);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.position(0, 0);

  textFont(font);
  textSize(28);
  textAlign(CENTER, CENTER);

  //-------------------------------------------------------------
  //     LINKS (SETUP)
  //-------------------------------------------------------------


  linkR = createA('resources', 'RESOURCES');

  linkA = createA('about', 'ABOUT');

  linkC = createA('calendar', 'CALENDAR');

  linkAr = createA('http://artmattersfestival.org/archive/', 'ARCHIVE');

  linkGI = createA('getInvolved', 'GET INVOLVED');

  linkE = createA('events', 'EVENTS');

  linkM = createA('map', 'MAP');

  linkEx = createA('exhibitions', 'EXHIBITIONS');

  linkFR = createA('fr/accueil', 'FR');
  linkFR.id('lang');


  //-------------------------------------------------------------
  //     NAV FORMATTING (SETUP)
  //-------------------------------------------------------------


  //Nav formatting
  if (windowWidth > 650) {
    linkOffset = 55 + (windowHeight) * 0.01
    linkBuffer = 75 - (windowHeight) * 0.005
    linkMargin = 35;
  } else {
    linkOffset = 75 - (windowHeight) * 0.05
    linkBuffer = 80 - (windowHeight) * 0.015
    linkMargin = 29;
  }

  //positioning
  linkA.position(linkMargin, linkBuffer + linkOffset);
  linkR.position(linkMargin, linkBuffer + linkOffset * 2);
  linkGI.position(linkMargin, linkBuffer + linkOffset * 3);
  linkE.position(linkMargin, linkBuffer + linkOffset * 4);
  linkM.position(linkMargin, linkBuffer + linkOffset * 5);
  linkC.position(linkMargin, linkBuffer + linkOffset * 6);
  linkEx.position(linkMargin, linkBuffer + linkOffset * 7);
  linkAr.position(linkMargin, linkBuffer + linkOffset * 8);
  linkFR.position(linkMargin, linkBuffer + linkOffset * 9);


  //-------------------------------------------------------------
  //     LAYERS FORMATTING (SETUP)
  //-------------------------------------------------------------

  //align with the cnter of the page
  imageMode(CORNER);

  el = document.getElementById('animContainer');
  elBound = el.getBoundingClientRect();
  drawX = elBound.left;
  drawY = elBound.top;
  drawW = elBound.right-elBound.left;
  drawH = elBound.bottom-elBound.top;

  textW1 = drawX + (windowWidth*0.18);
  textH1 = drawY + (windowHeight*0.15);
  textW2 = drawX + (windowWidth*0.395);
  textH2 = drawY + (windowHeight*0.09);




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
  linkEx.mouseOver(overLinkEx);
  linkEx.mouseOut(offLinkEx);
  linkC.mouseOver(overlinkC);
  linkC.mouseOut(offlinkC);
  linkAr.mouseOver(overLinkAr);
  linkAr.mouseOut(offLinkAr);
  linkFR.mouseOver(onLang).mouseOut(offLang);


}

//-------------------------------------------------------------
//     DRAW
//-------------------------------------------------------------


function draw() {

  //-------------------------------------------------------------
  //    STYLING (DRAW)
  //-------------------------------------------------------------

  noStroke();
  // background(248, 251, 252, 50);

  if (cpuPause == false) {
    background(248, 251, 252, 50);
  } else {

  }


  //-------------------------------------------------------------
  //     TEXT BAR (DRAW)
  //-------------------------------------------------------------
//
//   fill(0);
//   // rect(elBound.right + 85, 0, 45, windowHeight);
//   textSize(24);
//   var textSpace = 24;
//   push();
//   for(var i=0; i < 800; i++){
//   rotate(HALF_PI);
//   translate(elBound.right + 105, i);
//   // fill(255);
//   text("h", 0, 0);
//   text("e", 0, textSpace);
//   text("l", 0, textSpace*2);
//   text("l", 0, textSpace*3);
//   text("o", 0, textSpace*4);
// }
//   pop();





  //-------------------------------------------------------------
  //     LAYER & ICON ANIMATIONS (DRAW)
  //-------------------------------------------------------------

  //align with the cnter of the page
  imageMode(CORNER);



  //---MAIN---
  if (mainOff == false) {
    tint(255, fadeMain);
    image(layerMain, drawX, drawY, drawW, drawH);
    fill(17, 66, 81);
    noTint();


    if (fadeMain <= 540) {
      fadeMain += fadeIncr;
    }
  }

  // pause animation if already at max
  //but leave time for icons to fade
  if (fadeMain <= 20) {
    cpuPause = false;
  } else if (fadeMain >= 500) {
    cpuPause = true;
  }


  //---R---
  if (animateR == true) {
    tint(255, fadeR);
    imageMode(CORNER);
    image(layerR, drawX, drawY, drawW, drawH);
    imageMode(CENTER);
    image(iconR, linkMargin, (linkBuffer + linkOffset * 2), 50, 50);
    noTint();
    fadeR += fadeIncr;
  }

  //---A---
  if (animateA == true) {
    tint(255, fadeA);
    imageMode(CORNER);
    image(layerA, drawX, drawY, drawW, drawH);
    imageMode(CENTER);
    image(iconA, linkMargin, (linkBuffer + linkOffset), 50, 50);
    noTint();
    fadeA += fadeIncr;
  }

  //---GI---
  if (animateGI == true) {
    tint(255, fadeGI);
    imageMode(CORNER);
    image(layerGI, drawX, drawY, drawW, drawH);
    imageMode(CENTER);
    image(iconGI, linkMargin, (linkBuffer + linkOffset * 3), 50, 50);
    noTint();
    fadeGI += fadeIncr;
  }

  //---Ar---
  if (animateAr == true) {
    tint(255, fadeAr);
    imageMode(CORNER);
    image(layerAr, drawX, drawY, drawW, drawH);
    imageMode(CENTER);
    image(iconAr, linkMargin, (linkBuffer + linkOffset * 8), 50, 50);
    noTint();
    fadeAr += fadeIncr;
  }

  //---M---
  if (animateM == true) {
    tint(255, fadeM);
    imageMode(CORNER);
    image(layerM, drawX, drawY, drawW, drawH);
    imageMode(CENTER);
    image(iconM, linkMargin, (linkBuffer + linkOffset * 5), 50, 50);
    noTint();
    fadeM += fadeIncr;
  }

  //---C---
  if (animateC == true) {
    tint(255, fadeC);
    imageMode(CORNER);
    image(layerC, drawX, drawY, drawW, drawH);
    imageMode(CENTER);
    image(iconC, linkMargin, (linkBuffer + linkOffset * 6), 50, 50);
    fadeC += fadeIncr;
  }

  //---E---
  if (animateE == true) {
    tint(255, fadeE);
    imageMode(CORNER);
    image(layerE, drawX, drawY, drawW, drawH);
    imageMode(CENTER);
    image(iconE, linkMargin, (linkBuffer + linkOffset * 4), 50, 50);
    noTint();
    fadeE += fadeIncr;
  }

  //---E---
  if (animateEx == true) {
    tint(255, fadeEx);
    imageMode(CORNER);
    // image(layerEx, drawX, drawY, drawW, drawH);
    imageMode(CENTER);
    image(iconEx, linkMargin, (linkBuffer + linkOffset * 7), 50, 50);
    noTint();
    fadeEx += fadeIncr;
  }


  //-------------------------------------------------------------
  //     LOGO ANIMATION (DRAW)
  //-------------------------------------------------------------

  angleMode(DEGREES);
  imageMode(CENTER);

  if (windowWidth > 650) {
    image(amLogo,linkMargin * 2.3, 60, 110, 110);
  } else {
    image(amLogo, 65, 50, 80, 80);
  }


  //-------------------------------------------------------------
  //     MOBILE ANIMATION (DRAW)
  //-------------------------------------------------------------

  if (windowWidth < 650) {
    if (mobileCount <= 30) {
      mainOff = false;
      mobileCount++;
    } else if (mobileCount <= 60 && mobileCount > 30) {
      mainOff = true;
      fadeMain = 0;
      animateA = true;
      mobileCount++;
    } else if (mobileCount <= 90 && mobileCount > 60) {
      animateA = false;
      fadeA = 0;
      animateR = true;
      mobileCount++;
    } else if (mobileCount <= 120 && mobileCount > 90) {
      animateR = false;
      fadeR = 0;
      animateGI = true;
      mobileCount++;
    } else if (mobileCount <= 150 && mobileCount > 120) {
      animateGI = false;
      fadeGI = 0;
      animateE = true;
      mobileCount++;
    } else if (mobileCount <= 180 && mobileCount > 150) {
      animateE = false;
      fadeE = 0;
      animateM = true;
      mobileCount++;
    } else if (mobileCount <= 210 && mobileCount > 180) {
      animateM = false;
      fadeM = 0;
      animateC = true;
      mobileCount++;
    } else if (mobileCount <= 240 && mobileCount > 210) {
      animateC = false;
      fadeC = 0;
      animateEx = true;
      mobileCount++;
    } else if (mobileCount <= 270 && mobileCount > 240) {
      animateEx = false;
      fadeEx = 0;
      animateAr = true;
      mobileCount++;
    } else if (mobileCount <= 300 && mobileCount > 270) {
      animateAr = false;
      fadeAr = 0;
      mainOff = false;
      mobileCount++;
    }else if (mobileCount > 300) {
      mobileCount = 0;
    }
  }
} // end of draw


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

  // $('#test1').fadeIn();
}

function offLinkA() {
  animateA = false;
  fadeA = 0;
  linkA.style('font-style', 'normal');
  mainOff = false;

  // $('#test1').fadeOut();
}

//---CO---

function overlinkM() {
  animateM = true;
  mainOff = true;
  fadeMain = 0;
  linkM.style('font-style', 'italic');

}

function offlinkM() {
  animateM = false;
  fadeM = 0;
  mainOff = false;
    linkM.style('font-style', 'normal');


}

//---CU---

function overlinkC() {
  animateC = true;
  linkC.style('font-style', 'italic');
  mainOff = true;
  fadeMain = 0;

}

function offlinkC() {
  animateC = false;
  fadeC = 0;
  linkC.style('font-style', 'normal');
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

function overLinkEx() {
  animateEx = true;
  linkEx.style('font-style', 'italic');
  mainOff = true;
  fadeMain = 0;
}

function offLinkEx() {
  animateEx = false;
  fadeEx = 0;
  linkEx.style('font-style', 'normal');
  mainOff = false;
}

function onLang() {
  linkFR.style('color', 'grey');
}

function offLang() {
  linkFR.style('color', 'black');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  var xPos = (60 + (windowWidth / 50));
  linkFR.position(windowWidth - xPos, 30);

  //Nav formatting
  if (windowWidth > 650) {
    linkOffset = 55 + (windowHeight) * 0.01
    linkBuffer = 75 - (windowHeight) * 0.005
    var linkMargin = 35;
  } else {
    linkOffset = 75 - (windowHeight) * 0.05
    linkBuffer = 80 - (windowHeight) * 0.015
    var linkMargin = 29;
  }

  //positioning
  linkA.position(linkMargin, linkBuffer + linkOffset);
  linkR.position(linkMargin, linkBuffer + linkOffset * 2);
  linkGI.position(linkMargin, linkBuffer + linkOffset * 3);
  linkE.position(linkMargin, linkBuffer + linkOffset * 4);
  linkM.position(linkMargin, linkBuffer + linkOffset * 5);
  linkC.position(linkMargin, linkBuffer + linkOffset * 6);
  linkEx.position(linkMargin, linkBuffer + linkOffset * 7);
  linkAr.position(linkMargin, linkBuffer + linkOffset * 8);

  el = document.getElementById('animContainer');
  elBound = el.getBoundingClientRect();
  drawX = elBound.left;
  drawY = elBound.top;
  drawW = elBound.right-elBound.left;
  drawH = elBound.bottom-elBound.top;

  textW1 = drawX + (windowWidth*0.16);
  textH1 = drawY + (windowHeight*0.15);
  textW2 = drawX + (windowWidth*0.39);
  textH2 = drawY + (windowHeight*0.09);

  background(248, 251, 252);
  background(248, 251, 252, 50);
}
