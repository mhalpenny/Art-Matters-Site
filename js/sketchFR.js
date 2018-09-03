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
  mainOff = false,
  animateCSM = false,
  animateCSC = false,
  animateCSE = false;
var fadeR = 0,
  fadeA = 0,
  fadeM = 0,
  fadeE = 0,
  fadeAr = 0,
  fadeC = 0,
  fadeGI = 0,
  fadeMain = 255;
var linkOffset, linkBuffer;
var layerR, layerA, layerM, layerE, layerAr, layerC, layerGI;
var iconR, iconA, iconM, iconE, iconAr, iconC, iconGI;
var fadeIncr = 35;
var valueM = 0,
  valueC = 0,
  valueE = 0;
var loading = true;
var loadCount = 0;
var cpuPause = false;


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
  layerMain = loadImage('assets/LayerAll.png');
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
//-------------------------------------------------------------

function setup() {

  frameRate(15);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.position(0, 0);

  //-------------------------------------------------------------
  //     LINKS (SETUP)
  //-------------------------------------------------------------


  linkR = createA('ressources.html', 'RESSOURCES');

  linkA = createA('aPropos.html', 'À PROPOS');

  linkC = createA('#', 'CALENDRIER');

  linkAr = createA('http://artmattersfestival.org/archive/', 'ARCHIVE');

  linkGI = createA('impliquezVous.html', 'IMPLIQUEZ-VOUS');

  linkE = createA('#', 'ÉVÉNEMENTS');

  linkM = createA('#', 'CARTE');


  linkEN = createA('index.html', 'EN');
  linkEN.id('lang');



  if (windowWidth > 650) {
    linkOffset = 90 - (windowHeight) * 0.02
    linkBuffer = 80 - (windowHeight) * 0.015
    var linkMargin = 29;
  } else {
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

  linkEN.position(windowWidth - 40, 25);




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
  linkEN.mouseOver(onLang).mouseOut(offLang);


}

//-------------------------------------------------------------
//     DRAW
//-------------------------------------------------------------


function draw() {

  //-------------------------------------------------------------
  //    STYLING (DRAW)
  //-------------------------------------------------------------

  noStroke();
  if (cpuPause == false) {
    // background(255, 50);
    background(248, 251, 252, 50);
  } else {

  }

  if (windowWidth > 650) {
    linkOffset = 90 - (windowHeight) * 0.02
    linkBuffer = 80 - (windowHeight) * 0.015
    var linkMargin = 29;
  } else {
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
  linkAr.position(linkMargin, linkBuffer + linkOffset * 7);

  linkEN.position(windowWidth - 55, 40);



  //-------------------------------------------------------------
  //     PNG ANIMATIONS (DRAW)
  //-------------------------------------------------------------

  //align with the cnter of the page
  imageMode(CENTER);

  //---MAIN---
  if (mainOff == false) {
    tint(255, fadeMain);
    image(layerMain, windowWidth / 2, height / 2, windowWidth, windowHeight);
    noTint();

    //reset links
    linkM.html('CARTE');
    linkC.html('CALENDRIER');
    linkE.html('ÉVÉNEMENTS');

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
    image(layerR, windowWidth / 2, height / 2, windowWidth, windowHeight);
    image(iconR, linkMargin, (linkBuffer + linkOffset * 2), 50, 50);
    noTint();
    fadeR += fadeIncr;
  }

  //---A---
  if (animateA == true) {
    tint(255, fadeA);
    image(layerA, windowWidth / 2, height / 2, windowWidth, windowHeight);
    image(iconA, linkMargin, (linkBuffer + linkOffset), 50, 50);
    noTint();
    fadeA += fadeIncr;
  }

  //---GI---
  if (animateGI == true) {
    tint(255, fadeGI);
    image(layerGI, windowWidth / 2, height / 2, windowWidth, windowHeight);
    image(iconGI, linkMargin, (linkBuffer + linkOffset * 3), 50, 50);
    noTint();
    fadeGI += fadeIncr;
  }

  //---Ar---
  if (animateAr == true) {
    tint(255, fadeAr);
    image(layerAr, windowWidth / 2, height / 2, windowWidth, windowHeight);
    image(iconAr, linkMargin, (linkBuffer + linkOffset * 7), 50, 50);
    noTint();
    fadeAr += fadeIncr;
  }

  //---M---
  if (animateM == true) {
    tint(255, fadeM);
    image(layerM, windowWidth / 2, height / 2, windowWidth, windowHeight);
    image(iconM, linkMargin, (linkBuffer + linkOffset * 4), 50, 50);

    linkM.html('ARRIVE BIENTÔT');
    noTint();
    fadeM += fadeIncr;
  }

  //---C---
  if (animateC == true) {
    tint(255, fadeC);
    image(layerC, windowWidth / 2, height / 2, windowWidth, windowHeight);
    image(iconC, linkMargin, (linkBuffer + linkOffset * 5), 50, 50);

    noTint();
    linkC.html('ARRIVE BIENTÔT');
    fadeC += fadeIncr;
  }

  //---E---
  if (animateE == true) {
    tint(255, fadeE);
    image(layerE, windowWidth / 2, height / 2, windowWidth, windowHeight);
    image(iconE, linkMargin, (linkBuffer + linkOffset * 6), 50, 50);

    noTint();
    linkE.html('ARRIVE BIENTÔT');

    fadeE += fadeIncr;
  }

  //-------------------------------------------------------------
  //     LOGO ANIMATION (DRAW)
  //-------------------------------------------------------------

  if (windowWidth > 650) {
    imageMode(CENTER);
    tint(255, 255);
    image(amLogo, 73, 60, 110, 110);
    noTint();
  } else {
    imageMode(CENTER);
    tint(255, 255);
    image(amLogo, 65, 50, 80, 80);
    noTint();
  }

}

// } // end of draw



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
  // linkE.style('font-style', 'normal');
  mainOff = false;
}

function onLang() {
  linkFR.style('color', 'grey');
}

function offLang() {
  linkFR.style('color', 'black');
}

function windowResized() {
  resizeCanvas(windowWidth, (windowHeight));
  background(248, 251, 252, 50);

}
