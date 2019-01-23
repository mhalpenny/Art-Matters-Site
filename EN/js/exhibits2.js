//-------------------------------------------------------------
//     Created by Matthew Halpenny for Art Matters 2019
//-------------------------------------------------------------


//-------------------------------------------------------------
//     VARIABLES
//-------------------------------------------------------------

var offset;
var logoSpin = 0;
var logoY = 50;
var animateR = false,
  animateA = false,
  animateM = false,
  animateGI = false,
  animateEx = false,
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
  fadeEx, fadeMain = 255,
  fadeBack = 50;
var linkOffset, linkBuffer;
var fadeIncr = 35;
var bColorVal = 0;
var widthVal = 12;
var heightVal = 12;
var flip = true;
var spinX, spinY;
var bodyH, canvasH;
var isAnimation = 400;
var refresh = false;
var refreshArray = [1];
var valueM = 0,
  valueC = 0,
  valueE = 0;
var nonLoop = false;
var widthX, heightY;
let div1, div2, rect1, rect2, div3, rect3, rectW, rectH;



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
  iconEx = loadImage('assets/gyIcon.png');
  //logo
  amLogo = loadImage('assets/amlogo.png');
  //exhibits
  int1 = loadImage('assets/int1.png');
  int2 = loadImage('assets/int2.png');
  int3 = loadImage('assets/int3.png');
  int4 = loadImage('assets/int4.png');
  int5 = loadImage('assets/int5.png');
  int6 = loadImage('assets/int6.png');
  isod1 = loadImage('assets/isod1.png');
  isod2 = loadImage('assets/isod2.png');
  isod3 = loadImage('assets/isod3.png');
  isod4 = loadImage('assets/isod4.png');
  isod5 = loadImage('assets/isod5.png');
  isod6 = loadImage('assets/isod6.png');
  soes1 = loadImage('assets/soes1.png');
  soes2 = loadImage('assets/soes2.png');
  soes3 = loadImage('assets/soes3.png');
  soes4 = loadImage('assets/soes4.png');
  soes5 = loadImage('assets/soes5.png');
  soes6 = loadImage('assets/soes6.png');
  lwmd1 = loadImage('assets/lwmd1.jpg');
  lwmd2 = loadImage('assets/lwmd2.png');
  lwmd3 = loadImage('assets/lwmd3.png');
  lwmd4 = loadImage('assets/lwmd4.png');
  lwmd5 = loadImage('assets/lwmd5.png');
  lwmd6 = loadImage('assets/lwmd6.png');
  mal1 = loadImage('assets/mal1.png');
  mal2 = loadImage('assets/mal2.png');
  mal3 = loadImage('assets/mal3.png');
  mal4 = loadImage('assets/mal4.png');
  mal5 = loadImage('assets/mal5.png');
  mal6 = loadImage('assets/mal6.png');


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

  linkR = createA('#', 'RESOURCES');

  linkA = createA('about', 'ABOUT');

  linkC = createA('#', 'CALENDAR');

  linkAr = createA('http://artmattersfestival.org/archive/', 'ARCHIVE');

  linkGI = createA('getInvolved', 'GET INVOLVED');

  linkE = createA('events', 'EVENTS');

  linkEx = createA('exhibitions', 'EXHIBITS');

  linkM = createA('#', 'MAPS');

  // linkAO = createA('pdf/AM_AntiO.pdf', 'ANTI-OPPRESSION STATEMENT');

  // linkEN = createA('#', 'EN');
  // linkEN.id('lang');
  linkFR = createA('../fr/ressources', 'FR');
  linkFR.id('lang');

  home = createA('home', 'O');
  //debugging
  // home.style('color', 'black');
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
  linkEx.mouseOver(overLinkEx);
  linkEx.mouseOut(offLinkEx);
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

  if (windowWidth > 650) {
    background(248, 251, 252, fadeBack);
    fadeBack = 50;
  } else {
    background(248, 251, 252);
  }

  //for all moving elements
  var top = window.pageYOffset;
  logoSpin = top / 2;

  widthX = windowWidth / 100;
  heightY = windowHeight / 100;

  //-------------------------------------------------------------
  //    PSEUDO WHEEL (DRAW)
  //-------------------------------------------------------------

  if (refresh == 0) {
    refreshArray[0] = logoSpin;
  } else if (refresh == 1) {
    refreshArray[1] = logoSpin;
  }

  if (refreshArray[0] != refreshArray[1]) {
    background(248, 251, 252);
  }
  refresh = !refresh;

  //-------------------------------------------------------------
  //     NAV ANIMATION (DRAW)
  //-------------------------------------------------------------

  if (windowWidth > 650) {
    linkOffset = 55;
    linkBuffer = top + 80;
    var linkMargin = 35;

    if (nonLoop == false) {

      linkA.html('ABOUT');
      linkA.style('text-align', 'right');
      linkR.html('RESOURCES');
      linkR.style('text-align', 'right');
      linkGI.html('GET INVOLVED');
      linkGI.style('text-align', 'right');
      linkM.html('MAPS');
      linkM.style('text-align', 'right');
      linkM.style('color', 'black');
      linkC.html('CALENDAR');
      linkC.style('text-align', 'right');
      linkC.style('color', 'black');
      linkE.html('EVENTS');
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
    linkE.position(linkMargin, linkBuffer + linkOffset * 4);
    linkM.position(linkMargin, linkBuffer + linkOffset * 5);
    linkC.position(linkMargin, linkBuffer + linkOffset * 6);
    linkEx.position(linkMargin, linkBuffer + linkOffset * 7);
    linkAr.position(linkMargin, linkBuffer + linkOffset * 8);

    linkFR.position(linkMargin, linkBuffer + linkOffset * 9);

  } else {
    //variable math
    linkOffset = 55;
    linkBuffer = top + 25;
    iconBuffer = top + 45;
    var linkMargin = 30;
    var iconMargin = 45;

    if (nonLoop == false) {

      linkA.html('<br> <br> <br> <br> <br> ABOUT');
      linkA.style('text-align', 'left');
      linkR.html('<br> <br> <br> <br> <br> RESOURCES');
      linkR.style('text-align', 'left');
      linkGI.html('<br> <br> <br> <br>  GET <br> INVOLVED');
      linkGI.style('text-align', 'left');
      linkM.html('<br> <br> <br> <br> <br>  MAPS');
      linkM.style('color', 'black');
      linkM.style('text-align', 'left');
      linkC.html('<br> <br> <br> <br> <br> CALENDAR ');
      linkC.style('text-align', 'left');
      linkC.style('color', 'black');
      linkE.html('<br> <br> <br> <br> <br>  EVENTS ');
      linkE.style('text-align', 'left');
      linkE.style('color', 'black');
      linkAr.html('<br> <br> <br> <br> <br>  ARCHIVE');
      linkAr.style('text-align', 'left');

      nonLoop = true;
    }


    tint(255, 255);

    image(iconR, iconMargin, (iconBuffer + linkOffset * 2), 40, 40);
    image(iconA, iconMargin, (iconBuffer + linkOffset), 40, 40);
    image(iconGI, iconMargin, (iconBuffer + linkOffset * 3), 40, 40);
    image(iconAr, iconMargin, (iconBuffer + linkOffset * 8), 40, 40);
    image(iconM, iconMargin, (iconBuffer + linkOffset * 5), 40, 40);
    image(iconC, iconMargin, (iconBuffer + linkOffset * 6), 40, 40);
    image(iconE, iconMargin, (iconBuffer + linkOffset * 4), 40, 40);
    image(iconEx, iconMargin, (iconBuffer + linkOffset * 7), 40, 40);

    noTint();

    //positioning
    linkA.position(linkMargin, linkBuffer + linkOffset);
    linkR.position(linkMargin, linkBuffer + linkOffset * 2);
    linkGI.position(linkMargin, linkBuffer + linkOffset * 3);
    linkM.position(linkMargin, linkBuffer + linkOffset * 5);
    linkC.position(linkMargin, linkBuffer + linkOffset * 6);
    linkE.position(linkMargin, linkBuffer + linkOffset * 4);
    linkEx.position(linkMargin, linkBuffer + linkOffset * 7.8);
    linkAr.position(linkMargin, linkBuffer + linkOffset * 8);

    linkFR.position(linkMargin, linkBuffer + linkOffset * 9.4);

  }

  //-------------------------------------------------------------
  //     INTERACTION (DRAW)
  //-------------------------------------------------------------
  imageMode(CORNER);
  div1 = document.getElementById('box1');
  rect1 = div1.getBoundingClientRect();
 rectW = rect1.right - rect1.left;
 rectH = rect1.bottom - rect1.top;

  if (mouseY > (rect1.top + top) && mouseY < (rect1.bottom + top) && mouseX < rect1.right && mouseX > rect1.left) {

    if (mouseX < (rect1.left + (rectW/3)) && mouseY > ((rect1.bottom + top) / 2)) {
      // console.log(rect1.left, rect1.top, (rect1.right-rect1.left), (rect1.bottom-rect1.top));
      image(int1, rect1.left, rect1.top + top, (rect1.right - rect1.left), (rect1.bottom - rect1.top));
    } else if (mouseX > (rect1.left + (rectW/3)) && mouseX < (rect1.left + (rectW/3)*2) && mouseY > ((rect1.bottom + top) / 2)) {
      image(int2, rect1.left, rect1.top + top, (rect1.right - rect1.left), (rect1.bottom - rect1.top));
    } else if (mouseX > (rect1.left + (rectW/3)*2) && mouseY > ((rect1.bottom + top) / 2)) {
      image(int3, rect1.left, rect1.top + top, (rect1.right - rect1.left), (rect1.bottom - rect1.top));
    } else if (mouseX < (rect1.left + (rectW/3)) && mouseY < ((rect1.bottom + top) / 2)) {
      image(int4, rect1.left, rect1.top + top, (rect1.right - rect1.left), (rect1.bottom - rect1.top));
    } else if (mouseX > (rect1.left + (rectW/3)) && mouseX < (rect1.left + (rectW/3)*2)  && mouseY < ((rect1.bottom + top) / 2)) {
      image(int5, rect1.left, rect1.top + top, (rect1.right - rect1.left), (rect1.bottom - rect1.top));
    } else if (mouseX > (rect1.left + (rectW/3)*2) && mouseY < ((rect1.bottom + top) / 2)) {
      image(int6, rect1.left, rect1.top + top, (rect1.right - rect1.left), (rect1.bottom - rect1.top));
    }
  } else {
    fill(255, 192, 203);
    noStroke();
    rect(rect1.left, rect1.top + top, (rect1.right - rect1.left), (rect1.bottom - rect1.top));
  }

  div2 = document.getElementById('box2');
  rect2 = div2.getBoundingClientRect();
  rectW = rect2.right - rect2.left;
  rectH = rect2.bottom - rect2.top;

  if (mouseY > (rect2.top + top) && mouseY < (rect2.bottom + top) && mouseX < rect2.right && mouseX > rect2.left) {

    if (mouseX < (rect2.left + (rectW/3)) && mouseY > ((rect2.bottom+top)-(rectH/2))) {

      image(isod1, rect2.left, rect2.top + top, (rect2.right - rect2.left), (rect2.bottom - rect2.top));
    } else if (mouseX > (rect2.left + (rectW/3)) && mouseX < (rect2.left + (rectW/3)*2) && mouseY > ((rect2.bottom+top)-(rectH/2))) {
      image(isod2, rect2.left, rect2.top + top, (rect2.right - rect2.left), (rect2.bottom - rect2.top));

    } else if (mouseX > (rect2.left + (rectW/3)*2) && mouseY > ((rect2.bottom+top)-(rectH/2))) {
      image(isod3, rect2.left, rect2.top + top, (rect2.right - rect2.left), (rect2.bottom - rect2.top));

    } else if (mouseX < (rect2.left + (rectW/3)) && mouseY < ((rect2.bottom+top)-(rectH/2))) {
      image(isod4, rect2.left, rect2.top + top, (rect2.right - rect2.left), (rect2.bottom - rect2.top));

    } else if (mouseX > (rect2.left + (rectW/3)) && mouseX < (rect2.left + (rectW/3)*2)  && mouseY < ((rect2.bottom+top)-(rectH/2))) {
      image(isod5, rect2.left, rect2.top + top, (rect2.right - rect2.left), (rect2.bottom - rect2.top));

    } else if (mouseX > (rect2.left + (rectW/3)*2) && mouseY < ((rect2.bottom+top)-(rectH/2))){
      image(isod6, rect2.left, rect2.top + top, (rect2.right - rect2.left), (rect2.bottom - rect2.top));

    }
  } else {
    fill(255, 192, 203);
    noStroke();
    rect(rect2.left, rect2.top + top, (rect2.right - rect2.left), (rect2.bottom - rect2.top));
  }

  div3 = document.getElementById('box3');
  rect3 = div3.getBoundingClientRect();
  rectW = rect3.right - rect3.left;
  rectH = rect3.bottom - rect3.top;

  if (mouseY > (rect3.top + top) && mouseY < (rect3.bottom + top) && mouseX < rect3.right && mouseX > rect3.left) {

    if (mouseX < (rect3.left + (rectW/3)) && mouseY > ((rect3.bottom+top)-(rectH/2))) {

      image(soes1, rect3.left, rect3.top + top, (rect3.right - rect3.left), (rect3.bottom - rect3.top));
    } else if (mouseX > (rect3.left + (rectW/3)) && mouseX < (rect3.left + (rectW/3)*2) && mouseY > ((rect3.bottom+top)-(rectH/2))) {
      image(soes2, rect3.left, rect3.top + top, (rect3.right - rect3.left), (rect3.bottom - rect3.top));

    } else if (mouseX > (rect3.left + (rectW/3)*2) && mouseY > ((rect3.bottom+top)-(rectH/2))) {
      image(soes3, rect3.left, rect3.top + top, (rect3.right - rect3.left), (rect3.bottom - rect3.top));

    } else if (mouseX < (rect3.left + (rectW/3)) && mouseY < ((rect3.bottom+top)-(rectH/2))) {
      image(soes4, rect3.left, rect3.top + top, (rect3.right - rect3.left), (rect3.bottom - rect3.top));

    } else if (mouseX > (rect3.left + (rectW/3)) && mouseX < (rect3.left + (rectW/3)*2)  && mouseY < ((rect3.bottom+top)-(rectH/2))) {
      image(soes5, rect3.left, rect3.top + top, (rect3.right - rect3.left), (rect3.bottom - rect3.top));

    } else if (mouseX > (rect3.left + (rectW/3)*2) && mouseY < ((rect3.bottom+top)-(rectH/2))){
      image(soes6, rect3.left, rect3.top + top, (rect3.right - rect3.left), (rect3.bottom - rect3.top));

    }
  } else {
    fill(255, 192, 203);
    noStroke();
    rect(rect3.left, rect3.top + top, (rect3.right - rect3.left), (rect3.bottom - rect3.top));
  }


    div4 = document.getElementById('box4');
    rect4 = div4.getBoundingClientRect();
    rectW = rect4.right - rect4.left;
    rectH = rect4.bottom - rect4.top;

    if (mouseY > (rect4.top + top) && mouseY < (rect4.bottom + top) && mouseX < rect4.right && mouseX > rect4.left) {

      if (mouseX < (rect4.left + (rectW/3)) && mouseY > ((rect4.bottom+top)-(rectH/2))) {

        image(lwmd1, rect4.left, rect4.top + top, (rect4.right - rect4.left), (rect4.bottom - rect4.top));
      } else if (mouseX > (rect4.left + (rectW/3)) && mouseX < (rect4.left + (rectW/3)*2) && mouseY > ((rect4.bottom+top)-(rectH/2))) {
        image(lwmd2, rect4.left, rect4.top + top, (rect4.right - rect4.left), (rect4.bottom - rect4.top));

      } else if (mouseX > (rect4.left + (rectW/3)*2) && mouseY > ((rect4.bottom+top)-(rectH/2))) {
        image(lwmd3, rect4.left, rect4.top + top, (rect4.right - rect4.left), (rect4.bottom - rect4.top));

      } else if (mouseX < (rect4.left + (rectW/3)) && mouseY < ((rect4.bottom+top)-(rectH/2))) {
        image(lwmd4, rect4.left, rect4.top + top, (rect4.right - rect4.left), (rect4.bottom - rect4.top));

      } else if (mouseX > (rect4.left + (rectW/3)) && mouseX < (rect4.left + (rectW/3)*2)  && mouseY < ((rect4.bottom+top)-(rectH/2))) {
        image(lwmd5, rect4.left, rect4.top + top, (rect4.right - rect4.left), (rect4.bottom - rect4.top));

      } else if (mouseX > (rect4.left + (rectW/3)*2) && mouseY < ((rect4.bottom+top)-(rectH/2))){
        image(lwmd6, rect4.left, rect4.top + top, (rect4.right - rect4.left), (rect4.bottom - rect4.top));

      }
    } else {
      fill(255, 192, 203);
      noStroke();
      rect(rect4.left, rect4.top + top, (rect4.right - rect4.left), (rect4.bottom - rect4.top));
    }

    div5 = document.getElementById('box5');
    rect5 = div5.getBoundingClientRect();
    rectW = rect5.right - rect5.left;
    rectH = rect5.bottom - rect5.top;

    if (mouseY > (rect5.top + top) && mouseY < (rect5.bottom + top) && mouseX < rect5.right && mouseX > rect5.left) {

      if (mouseX < (rect5.left + (rectW/3)) && mouseY > ((rect5.bottom+top)-(rectH/2))) {

        image(mal1, rect5.left, rect5.top + top, (rect5.right - rect5.left), (rect5.bottom - rect5.top));
      } else if (mouseX > (rect5.left + (rectW/3)) && mouseX < (rect5.left + (rectW/3)*2) && mouseY > ((rect5.bottom+top)-(rectH/2))) {
        image(mal2, rect5.left, rect5.top + top, (rect5.right - rect5.left), (rect5.bottom - rect5.top));

      } else if (mouseX > (rect5.left + (rectW/3)*2) && mouseY > ((rect5.bottom+top)-(rectH/2))) {
        image(mal3, rect5.left, rect5.top + top, (rect5.right - rect5.left), (rect5.bottom - rect5.top));

      } else if (mouseX < (rect5.left + (rectW/3)) && mouseY < ((rect5.bottom+top)-(rectH/2))) {
        image(mal4, rect5.left, rect5.top + top, (rect5.right - rect5.left), (rect5.bottom - rect5.top));

      } else if (mouseX > (rect5.left + (rectW/3)) && mouseX < (rect5.left + (rectW/3)*2)  && mouseY < ((rect5.bottom+top)-(rectH/2))) {
        image(mal5, rect5.left, rect5.top + top, (rect5.right - rect5.left), (rect5.bottom - rect5.top));

      } else if (mouseX > (rect5.left + (rectW/3)*2) && mouseY < ((rect5.bottom+top)-(rectH/2))){
        image(mal6, rect5.left, rect5.top + top, (rect5.right - rect5.left), (rect5.bottom - rect5.top));

      }
    } else {
      fill(255, 192, 203);
      noStroke();
      rect(rect5.left, rect5.top + top, (rect5.right - rect5.left), (rect5.bottom - rect5.top));
    }



  //-------------------------------------------------------------
  //     ICON ANIMATIONS (DRAW)
  //-------------------------------------------------------------

  if (windowWidth > 650) {
    linkM.html('MAP');
    linkC.html('CALENDAR');

    //---R---
    if (animateR == true) {
      tint(255, fadeR);
      if (windowWidth > 650) {
        image(iconR, linkMargin, (linkBuffer + linkOffset * 2), 50, 50);
      } else {

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
      image(iconAr, linkMargin, (linkBuffer + linkOffset * 8), 50, 50);
      noTint();
      fadeAr += fadeIncr;
    }

    //---M---
    if (animateM == true) {
      tint(255, fadeM);
      image(iconM, linkMargin, (linkBuffer + linkOffset * 5), 50, 50);
      noTint();
      fadeM += fadeIncr;
    }

    //---C---
    if (animateC == true) {
      tint(255, fadeC);
      image(iconC, linkMargin, (linkBuffer + linkOffset * 6), 50, 50);
      noTint();
      fadeC += fadeIncr;
    }

    //---E---
    if (animateE == true) {
      tint(255, fadeE);
      image(iconE, linkMargin, (linkBuffer + linkOffset * 4), 50, 50);
      noTint();

      fadeE += fadeIncr;
    }

    //---Ex---
    if (animateEx == true) {
      tint(255, fadeEx);
      image(iconEx, linkMargin, (linkBuffer + linkOffset * 7), 50, 50);
      noTint();

      fadeEx += fadeIncr;
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
    translate(iconMargin + 5, topNew);
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
  linkM.style('font-style', 'italic');

}

function offlinkM() {
  animateM = false;
  fadeM = 0;
  mainOff = false;
  linkM.style('font-style', 'normal');

}

//---C---

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

//---Ex---

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

//-------------------------------------------------------------
//     RESIZE (FUNCTIONS)
//-------------------------------------------------------------

function windowResized() {

  var bodyH = document.getElementById('gallery');
  //use id to get div height for canvas scrolling length
  var canvasH = bodyH.scrollHeight + 50;

  resizeCanvas(windowWidth, canvasH);

  background(248, 251, 252);
  nonLoop = false;


}

//calculates position in calendar based on percentage arguement
function calX(a) {
  var calc = calOffX + (calWidth * (a / 100));
  return calc;

}

//calculates position in calendar based on percentage arguement
function calY(a) {
  var calc = calOffY + (calHeight * (a / 100));
  return calc;

}
