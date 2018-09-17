//-------------------------------------------------------------
//     Created by Matthew Halpenny for Art Matters 2019
//-------------------------------------------------------------


//-------------------------------------------------------------
//     VARIABLES
//-------------------------------------------------------------

var offset;
var logoSpin = 0;
var logoY = 50;
var animateR = false, animateA = false, animateM = false, animateGI = false, animateAr = false, animateE = false, animateC = false, mainOff = false, animateCSM = false, animateCSC = false, animateCSE = false;
var fadeR = 0, fadeA = 0, fadeM = 0, fadeE = 0, fadeAr = 0, fadeC = 0, fadeGI = 0, fadeMain = 255, fadeBack= 50;
var linkOffset, linkBuffer;
var fadeIncr = 35;
var bColorVal = 0;
var widthVal = 8;
var heightVal = 8;
var flip = true;
var spinX, spinY;
var bodyH, canvasH;
var isAnimation = 400;
var refresh = false;
var refreshArray = [1];
var valueM = 0, valueC = 0, valueE = 0;
var nonLoop = false;


// var colorCounter = 0;
// var cpuPause = false;

//-------------------------------------------------------------
//     PRELOAD
//-------------------------------------------------------------

function preload() {
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

  //-------------------------------------------------------------
  //     STYLING (SETUP)
  //-------------------------------------------------------------

  frameRate(15);
  //retrieve div id
  bodyH = document.getElementById('gallery');
  //use id to get div height for canvas scrolling length
  canvasH = bodyH.scrollHeight + 50;
  //create canvas at appropriate length for page
  canvas = createCanvas(windowWidth, canvasH);
  //basic canvas formatting
  canvas.style("z-index", "-1");
  canvas.position(0, 0);



  //-------------------------------------------------------------
  //     LINKS (SETUP)
  //-------------------------------------------------------------

  linkR = createA('ressources.html', 'RESSOURCES');

  linkA = createA('aPropos.html', 'À PROPOS');

  linkC = createA('#', 'CALENDRIER');

  linkAr = createA('http://artmattersfestival.org/archive/', 'ARCHIVE');

  linkGI = createA('#', 'IMPLIQUEZ-VOUS');

  linkE = createA('evenements.html', 'ÉVÉNEMENTS');

  linkM = createA('#', 'CARTE');


  linkEN = createA('getInvolved.html', 'EN');
  linkEN.id('lang');

  home = createA('index.html', 'O');
  home.style('color', 'transparent');
  home.style('font-size', '72px');
  home.style('text-shadow', 'none');

  home.class('noselect');


  //-------------------------------------------------------------
  //     LISTENERS (SETUP)
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


}

//-------------------------------------------------------------
//-------------------------------------------------------------
//     DRAW
//-------------------------------------------------------------
//-------------------------------------------------------------

function draw() {


  //-------------------------------------------------------------
  //    STYLING (DRAW)
  //-------------------------------------------------------------

  if (windowWidth > 650){
      background(248, 251, 252, fadeBack);
    fadeBack = 50;
  } else{
      background(248, 251, 252);
  }


  //for all moving elements
  var top = window.pageYOffset;
  logoSpin = top/2;

  //-------------------------------------------------------------
  //    PSEUDO WHEEL (DRAW)
  //-------------------------------------------------------------

  if (refresh == 0){
    refreshArray[0] = logoSpin;
  } else if (refresh == 1){
    refreshArray[1] = logoSpin;
  }

  if (refreshArray[0] != refreshArray[1]){
    background(248, 251, 252);
  }
  refresh = !refresh;



  //-------------------------------------------------------------
  //     INTERACTIVE SQUARES (DRAW)
  //-------------------------------------------------------------

  //variable for all squares
  var shift = (windowWidth / 900);
  var shift2 = (windowWidth / 1000);

if (windowWidth > 650){

  //---DIV BACKGROUND 2---


  var myDiv = document.getElementById('two');
  var rectDiv = myDiv.getBoundingClientRect();

  //variables for 2nd square
  var leftOffset = rectDiv.left;
  var leftToRight = leftOffset + top;

  rectMode(CENTER);
  angleMode(DEGREES);
  fill(0, 0, 0, 150);
  push();

    translate(leftOffset - top, rectDiv.top + top);

  rotate(85);
  triangle(-130*shift, 230*shift, 0, -330*shift, 200*shift, 230*shift);
    backgroundPattern(-400*shift, -600*shift, -100*shift, -150*shift);
  pop();

  //---DIV BACKGROUND 3---

  var myDiv = document.getElementById('five');
  var rectDiv = myDiv.getBoundingClientRect();

  //square 3 variables
  var rightOffset = rectDiv.right + isAnimation;
  var rightToLeft = rightOffset - (top);

  //variables for 2nd square
  var leftOffset = rectDiv.left + 200;
  var leftToRight = leftOffset + top;

  rectMode(CENTER);
  angleMode(DEGREES);
  fill(0, 0, 0, 150);
  push()
  if (rightToLeft > rectDiv.right-200) {
    translate(rightToLeft, rectDiv.top + top);
  } else {
    translate(rectDiv.right-200, rectDiv.top + top);
  }
  rotate(-85);
triangle(-130*shift, 230*shift, 0, -330*shift, 200*shift, 230*shift);
    backgroundPattern(-400*shift, -600*shift, -100*shift, -150*shift);
  pop();


}


  //-------------------------------------------------------------
  //     NAV ANIMATION (DRAW)
  //-------------------------------------------------------------

  if (windowWidth > 650) {
    //variable math
    linkOffset = 55;
    linkBuffer = top + 80;
    var linkMargin = 35;

    if (nonLoop == false){

    linkA.html('À PROPOS');
    linkA.style('text-align', 'right');
    linkR.html('RESSOURCES');
    linkR.style('text-align', 'right');
    linkGI.html('IMPLIQUEZ-VOUS');
    linkGI.style('text-align', 'right');
    linkM.html('CARTE');
    linkM.style('text-align', 'right');
    linkM.style('color', 'black');
    linkC.html('CALENDRIER');
    linkC.style('text-align', 'right');
        linkC.style('color', 'black');
    linkE.html('ÉVÉNEMENTS');
    linkE.style('text-align', 'right');
        linkE.style('color', 'black');
    linkAr.html('ARCHIVE');
    linkAr.style('text-align', 'right');

    nonLoop = true;
  }


    //positioning
    linkA.position(linkMargin, linkBuffer + linkOffset);
    linkR.position(linkMargin, linkBuffer + linkOffset * 2);
    linkGI.position(linkMargin, linkBuffer + linkOffset * 3);
    linkM.position(linkMargin, linkBuffer + linkOffset * 4);
    linkC.position(linkMargin, linkBuffer + linkOffset * 5);
    linkE.position(linkMargin, linkBuffer + linkOffset * 6);
    linkAr.position(linkMargin, linkBuffer + linkOffset * 7);

    linkEN.position(linkMargin, linkBuffer + linkOffset * 8);

  } else {
    //variable math
    linkOffset = 55;
    linkBuffer = top + 25;
    iconBuffer = top + 45;
    var linkMargin = 30;
    var iconMargin = 45;

    if (nonLoop == false){

    linkA.html('<br> <br> <br> <br> <br> À PROPOS');
    linkA.style('text-align', 'left');
    linkR.html('<br> <br> <br> <br> <br> RESSOURCES');
    linkR.style('text-align', 'left');
    linkGI.html('<br> <br> <br> <br>  IMPLIQUEZ <br> -VOUS');
    linkGI.style('text-align', 'left');
    linkM.html('<br> <br> <br> <br> <br>  CARTE');
    linkM.style('color', 'grey');
    linkM.style('text-align', 'left');
    linkC.html('<br> <br> <br> <br> <br> CALENDRIER ');
    linkC.style('text-align', 'left');
    linkC.style('color', 'grey');
    linkE.html('<br> <br> <br> <br> <br>  ÉVÉNEMENTS ');
    linkE.style('text-align', 'left');
    linkE.style('color', 'black');
    linkAr.html('<br> <br> <br> <br> <br>  ARCHIVE');
    linkAr.style('text-align', 'left');

    nonLoop = true;
  }


    tint(255, 255);

    image(iconR, iconMargin, (iconBuffer + linkOffset*2), 40, 40);
    image(iconA, iconMargin, (iconBuffer + linkOffset), 40, 40);
    image(iconGI, iconMargin, (iconBuffer + linkOffset * 3), 40, 40);
    image(iconAr, iconMargin, (iconBuffer + linkOffset * 7), 40, 40);
    image(iconM, iconMargin, (iconBuffer + linkOffset * 4), 40, 40);
    image(iconC, iconMargin, (iconBuffer + linkOffset * 5), 40, 40);
    image(iconE, iconMargin, (iconBuffer + linkOffset * 6), 40, 40);

    noTint();

    //positioning
    linkA.position(linkMargin, linkBuffer + linkOffset);
    linkR.position(linkMargin, linkBuffer + linkOffset * 2);
    linkGI.position(linkMargin, linkBuffer + linkOffset * 3);
    linkM.position(linkMargin, linkBuffer + linkOffset * 4);
    linkC.position(linkMargin, linkBuffer + linkOffset * 5);
    linkE.position(linkMargin, linkBuffer + linkOffset * 6);
    linkAr.position(linkMargin, linkBuffer + linkOffset * 7);

    linkEN.position(linkMargin, linkBuffer + linkOffset * 8.2);

  }




  //-------------------------------------------------------------
  //     ICON ANIMATIONS (DRAW)
  //-------------------------------------------------------------

if (windowWidth > 650){
  linkM.html('CARTE');
  linkC.html('CALENDRIER');

  //---R---
  if (animateR == true) {
    tint(255, fadeR);
    if (windowWidth > 650){
    image(iconR, linkMargin, (linkBuffer + linkOffset*2), 50, 50);
  } else{

  }
    noTint();
    fadeR += fadeIncr;
  }

  //---A---
  if (animateA == true) {
    tint(255, fadeA);
    image(iconA, linkMargin, (linkBuffer + linkOffset), 50, 50);
      noTint();
    fadeA += fadeIncr;
  }

  //---GI---
  if (animateGI == true) {
    tint(255, fadeGI);
    image(iconGI, linkMargin, (linkBuffer + linkOffset * 3), 50, 50);
      noTint();
    fadeGI += fadeIncr;
  }

  //---Ar---
  if (animateAr == true) {
    tint(255, fadeAr);
    image(iconAr, linkMargin, (linkBuffer + linkOffset * 7), 50, 50);
      noTint();
    fadeAr += fadeIncr;
  }

  //---M---
  if (animateM == true) {
    tint(255, fadeM);
    image(iconM, linkMargin, (linkBuffer + linkOffset * 4), 50, 50);
    noTint();
      linkM.html('ARRIVE BIENTÔT');
    fadeM += fadeIncr;
  }

  //---C---
  if (animateC == true) {
    tint(255, fadeC);
    image(iconC, linkMargin, (linkBuffer + linkOffset * 5), 50, 50);
    noTint();
      linkC.html('ARRIVE BIENTÔT');
    fadeC += fadeIncr;
  }

  //---E---
  if (animateE == true) {
    tint(255, fadeE);
    image(iconE, linkMargin, (linkBuffer + linkOffset * 6), 50, 50);
      noTint();
    fadeE += fadeIncr;
  }
}

  //-------------------------------------------------------------
  //     LOGO ANIMATION (DRAW)
  //-------------------------------------------------------------


  angleMode(DEGREES);
  imageMode(CENTER);
  tint(255, 255);
  var wOffset = windowWidth / 800;
  var sizeOffset = windowWidth / 1000;

  //draw pseudo link
  home.position(linkMargin + 13, topNew - 35);
  push();
  if (windowWidth > 650) {
    var topNew = top + 70;
    translate(linkMargin * 2.3, topNew);
    rotate(logoSpin);
    image(amLogo, 0, 0, 110, 110);
  } else {
    var topNew = top + 45;
    translate(iconMargin+5, topNew);
    rotate(logoSpin);
    image(amLogo, 0, 0, 70, 70);
  }
  pop();
  noTint();


} //---END---


//-------------------------------------------------------------
//-------------------------------------------------------------
//     FUNCTIONS
//-------------------------------------------------------------
//-------------------------------------------------------------

//-------------------------------------------------------------
//     HOVER (FUNCTIONS)
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

//---M---

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
  // linkM.style('font-style', 'normal');

}

//---C---

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


//-------------------------------------------------------------
//     RESIZE (FUNCTIONS)
//-------------------------------------------------------------

function windowResized() {

  var bodyH = document.getElementById('gallery');
  //use id to get div height for canvas scrolling length
  var canvasH = bodyH.scrollHeight + 50;

  resizeCanvas(windowWidth, (canvasH));

  background(248, 251, 252);
  nonLoop = false;

}

//-------------------------------------------------------------
//     BOX NIMATION (FUNCTIONS)
//-------------------------------------------------------------

function backgroundPattern(w, h, tw, th) {


  stroke(255);
  noFill();
  strokeWeight(1.0);
  spinX = map(mouseY, 0, windowHeight, 6, 15);
  spinY = map(mouseX, windowWidth, 0, 4, 8);
  spinY2 = map(mouseX, 0, windowWidth, 4, 8);

  var widthInc = w / widthVal;
  var heightInc = h / heightVal;

  for (var i = 0; i < widthVal; i++) {
    for (var j = 0; j < heightVal; j++) {

      push();
      translate((30 + i * widthInc) - tw, (30 + j * heightInc) - th);
      if (flip == true) {
        rotate(spinX * (spinY*spinY2));
      } else {
        rotate(-spinX * (spinY*spinY2));
      }
      rect(-5, -5, 5, 5);
      rect(10, 5, 3, 3);
      pop();
      flip = !flip;


    }
  }
}