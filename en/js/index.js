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
var logoSpin;
var csW, csW2, rW, rW2;
var fadeIncr = 35;
var valueM = 0,
  valueC = 0,
  valueE = 0;
var loading = true;
var loadCount = 0;
var cpuPause = false;
var mobileCount = 0;


//-------------------------------------------------------------
//     PRELOAD
//-------------------------------------------------------------

function preload() {

  //layers
  layerA = loadImage('en/assets/RedLayer.png');
  layerR = loadImage('en/assets/BlueLayer.png');
  layerM = loadImage('en/assets/VioletLayer.png');
  layerE = loadImage('en/assets/GrayLayer.png');
  layerC = loadImage('en/assets/GreenLayer.png');
  layerAr = loadImage('en/assets/OrangeLayer.png');
  layerGI = loadImage('en/assets/YellowLayer.png');
  layerMain = loadImage('en/assets/LayerAll.png');
  //icons
  iconA = loadImage('en/assets/rrIcon.png');
  iconR = loadImage('en/assets/bIcon.png');
  iconM = loadImage('en/assets/vIcon.png');
  iconE = loadImage('en/assets/rIcon.png');
  iconC = loadImage('en/assets/gIcon.png');
  iconAr = loadImage('en/assets/oIcon.png');
  iconGI = loadImage('en/assets/yIcon.png');
  //logo
  amLogo = loadImage('en/assets/amlogo.png');
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


  linkR = createA('en/resources', 'RESOURCES');

  linkA = createA('en/about', 'ABOUT');

  linkC = createA('#', 'CALENDER');

  linkAr = createA('http://artmattersfestival.org/archive/', 'ARCHIVE');

  linkGI = createA('en/getInvolved', 'GET INVOLVED');

  linkE = createA('en/events', 'EVENTS');

  linkM = createA('#', 'MAP');

  linkFR = createA('fr/accueil', 'FR');
  linkFR.id('lang');


  //SETUP only

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
  linkM.position(linkMargin, linkBuffer + linkOffset * 4);
  linkC.position(linkMargin, linkBuffer + linkOffset * 5);
  linkE.position(linkMargin, linkBuffer + linkOffset * 6);
  // linkAO.position(linkMargin, linkBuffer + linkOffset*7);
  linkAr.position(linkMargin, linkBuffer + linkOffset * 7);

  // linkFR.position(windowWidth - 40, 50);




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
  if (cpuPause == false) {
    // background(255, 50);
    background(248, 251, 252, 50);
  } else {

  }

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

  if (windowWidth > 650) {
    var buttonFade = 50 + (fadeMain/3);
    //Buttons
    fill(252, 19, 100, buttonFade);
    rect(linkMargin - 10, (linkBuffer + linkOffset) - 15, 117, 55, 20);
    fill(17, 66, 81, buttonFade);
    rect(linkMargin - 10, (linkBuffer + linkOffset * 2) - 15, 188, 55, 20);
    fill(239, 196, 88, buttonFade);
    rect(linkMargin - 10, (linkBuffer + linkOffset * 3) - 15, 232, 55, 20);
    fill(252, 19, 100, buttonFade);
    rect(linkMargin - 10, (linkBuffer + linkOffset * 4) - 15, 128, 55, 20);
    if (animateC == false) {
      fill(17, 66, 81, buttonFade);
      rect(linkMargin - 10, (linkBuffer + linkOffset * 5) - 15, 175, 55, 20);
    }
    if (animateM == false) {
      fill(239, 196, 88, buttonFade);
      rect(linkMargin - 10, (linkBuffer + linkOffset * 6) - 15, 95, 55, 20);
    }
    fill(252, 19, 100, buttonFade);
    rect(linkMargin - 10, (linkBuffer + linkOffset * 7) - 15, 145, 55, 20);
  }

  //positioning
  linkA.position(linkMargin, linkBuffer + linkOffset);
  linkR.position(linkMargin, linkBuffer + linkOffset * 2);
  linkGI.position(linkMargin, linkBuffer + linkOffset * 3);
  linkE.position(linkMargin, linkBuffer + linkOffset * 4);
  linkC.position(linkMargin, linkBuffer + linkOffset * 5);
  linkM.position(linkMargin, linkBuffer + linkOffset * 6);
  linkAr.position(linkMargin, linkBuffer + linkOffset * 7);

  var xPos = (60 + (windowWidth / 50));

  linkFR.position(windowWidth - xPos, 30);


  //-------------------------------------------------------------
  //    PNG ANIMATION (DRAW)
  //-------------------------------------------------------------

    //align with the cnter of the page
    imageMode(CENTER);

  var drawX = windowWidth/1.9;
    var drawY = windowHeight/2;

    //---MAIN---
    if (mainOff == false) {
      tint(255, fadeMain);
      image(layerMain, drawX, drawY, windowWidth, windowHeight);
      noTint();

      //reset links
      linkM.html('MAPS');
      linkC.html('CALENDAR');

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
      image(layerR, drawX, drawY, windowWidth, windowHeight);
      image(iconR, linkMargin, (linkBuffer + linkOffset * 2), 50, 50);
      noTint();
      fadeR += fadeIncr;
    }

    //---A---
    if (animateA == true) {
      tint(255, fadeA);
      image(layerA, drawX, drawY, windowWidth, windowHeight);
      image(iconA, linkMargin, (linkBuffer + linkOffset), 50, 50);
      noTint();
      fadeA += fadeIncr;
    }

    //---GI---
    if (animateGI == true) {
      tint(255, fadeGI);
      image(layerGI, drawX, drawY, windowWidth, windowHeight);
      image(iconGI, linkMargin, (linkBuffer + linkOffset * 3), 50, 50);
      noTint();
      fadeGI += fadeIncr;
    }

    //---Ar---
    if (animateAr == true) {
      tint(255, fadeAr);
      image(layerAr, drawX, drawY, windowWidth, windowHeight);
      image(iconAr, linkMargin, (linkBuffer + linkOffset * 7), 50, 50);
      noTint();
      fadeAr += fadeIncr;
    }

    //---M---
    if (animateM == true) {
      tint(255, fadeM);
      image(layerM, drawX, drawY, windowWidth, windowHeight);
      image(iconM, linkMargin, (linkBuffer + linkOffset * 6), 50, 50);

      if (windowWidth > 650) {
        fill(239, 196, 88, 50);
        rect(linkMargin - 10, (linkBuffer + linkOffset * 6) - 15, 225, 55, 20);
      }
      linkM.html('COMING SOON');
      noTint();
      fadeM += fadeIncr;
    }

    //---C---
    if (animateC == true) {
      tint(255, fadeC);
      image(layerC, drawX, drawY, windowWidth, windowHeight);
      image(iconC, linkMargin, (linkBuffer + linkOffset * 5), 50, 50);

      if (windowWidth > 650) {
        fill(17, 66, 81, 50);
        rect(linkMargin - 10, (linkBuffer + linkOffset * 5) - 15, 225, 55, 20);
      }
      noTint();
      linkC.html('COMING SOON');
      fadeC += fadeIncr;
    }

    //---E---
    if (animateE == true) {
      tint(255, fadeE);
      image(layerE, drawX, drawY, windowWidth, windowHeight);
      image(iconE, linkMargin, (linkBuffer + linkOffset * 4), 50, 50);

      noTint();

      fadeE += fadeIncr;
    }

  //-------------------------------------------------------------
  //     LOGO ANIMATION (DRAW)
  //-------------------------------------------------------------

  // if (windowWidth > 650) {
  //   imageMode(CENTER);
  //   tint(255, 255);
  //   image(amLogo, 73, 60, 110, 110);
  //   noTint();
  // } else {
  //   imageMode(CENTER);
  //   tint(255, 255);
  //   image(amLogo, 65, 50, 80, 80);
  //   noTint();
  // }

  //-------------------------------------------------------------
  //     LOGO ANIMATION (DRAW)
  //-------------------------------------------------------------


  angleMode(DEGREES);
  imageMode(CENTER);

  logoSpin = ((mouseY / 2) + (mouseX / 5));
  push();
  if (windowWidth > 650) {
    noTint();
    fill(248, 251, 252, 50);
    translate(linkMargin * 2.3, 60);
    rotate(logoSpin);
    tint(255, 255);
    ellipse(0, 0, 120, 120);
    image(amLogo, 0, 0, 110, 110);
  } else {
    tint(255, 255);
    imageMode(CENTER);
    image(amLogo, 65, 50, 80, 80);
    noTint();
  }
  pop();

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
      animateM = true;
      mobileCount++;
    } else if (mobileCount <= 180 && mobileCount > 150) {
      animateM = false;
      fadeM = 0;
      animateC = true;
      linkM.html("MAPS");
      mobileCount++;
    } else if (mobileCount <= 210 && mobileCount > 180) {
      animateC = false;
      fadeC = 0;
      animateE = true;
      linkC.html("CALENDAR");
      mobileCount++;
    } else if (mobileCount <= 240 && mobileCount > 210) {
      animateE = false;
      fadeE = 0;
      animateAr = true;
      mobileCount++;
    } else if (mobileCount <= 270 && mobileCount > 240) {
      animateAr = false;
      fadeAr = 0;
      mainOff = false;
      mobileCount++;
    } else if (mobileCount > 270) {
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
