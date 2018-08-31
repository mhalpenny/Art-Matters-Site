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
var heightVal = 5;
var flip = true;
var spinX, spinY;
var bodyH, canvasH;
var isAnimation = 400;
var refresh = false;
var refreshArray = [1];
var valueM = 0, valueC = 0, valueE = 0;


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


  //instantiate animations.
  // fadeA = 0;
  // fadeM = 0;
  // fadeR = 0;
  // fadeAr = 0;
  // fadeC = 0;
  // fadeE = 0;
  // fadeGI = 0;
  // fadeBack = 50;

  //-------------------------------------------------------------
  //     LINKS (SETUP)
  //-------------------------------------------------------------

  linkR = createA('#', 'RESOURCES');

  linkA = createA('about.html', 'ABOUT');

  linkC = createA('#', 'CALENDAR');

  linkAr = createA('http://artmattersfestival.org/archive/', 'ARCHIVE');

  linkGI = createA('getInvolved.html', 'GET INVOLVED');

  linkE = createA('#', 'EVENTS');

  linkM = createA('#', 'MAPS');

  // linkAO = createA('pdf/AM_AntiO.pdf', 'ANTI-OPPRESSION STATEMENT');

  // linkEN = createA('#', 'EN');
  // linkEN.id('lang');
  linkFR = createA('ressources.html', 'FR');
  linkFR.id('lang');

  home = createA('#', 'O');
  //debugging
  // home.style('color', 'black');
  home.style('color', 'transparent');
  home.style('font-size', '72px');
  home.style('text-shadow', 'none');

  home.class('noselect');


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
      background(255, fadeBack);
      fadeBack = 50;
    } else{
      background(255);
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
    background(255);
  }
  refresh = !refresh;



  //-------------------------------------------------------------
  //     INTERACTIVE SQUARES (DRAW)
  //-------------------------------------------------------------

  //variable for all squares
  var width = (windowWidth / 1.7);
  var height = (windowWidth / 3.2);

if (windowWidth > 650){
  //---DIV BACKGROUND 1---

  var myDiv = document.getElementById('one');
  var rectDiv = myDiv.getBoundingClientRect();

  rectMode(CENTER);
  angleMode(DEGREES);
  fill(0, 0, 0, 150);
  push()
  translate(rectDiv.right, rectDiv.top);
  rotate(-135);
  rect(0, 0 + top, width, height);
  backgroundPattern(width, height, width/2, height/2);
  pop();

  //---DIV BACKGROUND 2---

  //variables for 2nd square
  var leftOffset = rectDiv.left - isAnimation;
  var leftToRight = leftOffset + (top*1.5);

  var myDiv = document.getElementById('three');
  var rectDiv = myDiv.getBoundingClientRect();

  rectMode(CENTER);
  angleMode(DEGREES);
  fill(0, 0, 0, 150);
  push();

  if (leftToRight < rectDiv.left) {
    translate(leftToRight, rectDiv.top + top);
  } else {
    translate(rectDiv.left, rectDiv.top + top);
  }

  rotate(135);
  rect(0, 0, width, height);
  backgroundPattern(width, height, width/2, height/2);
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

    // linkA.style('opacity', '1');
    // linkR.style('opacity', '1');
    // linkGI.style('opacity', '1');
    // linkM.style('opacity', '1');
    // linkC.style('opacity', '1');
    // linkE.style('opacity', '1');
    // linkAr.style('opacity', '1');
    // linkFR.style('opacity', '1');

    linkA.html('ABOUT');
    linkA.style('text-align', 'right');
    linkR.html('RESOURCES');
    linkR.style('text-align', 'right');
    linkGI.html('GET INVOLVED');
    linkGI.style('text-align', 'right');
    linkM.html('MAPS');
    linkM.style('text-align', 'right');
    linkC.html('CALENDAR');
    linkC.style('text-align', 'right');
    linkE.html('EVENTS');
    linkE.style('text-align', 'right');
    linkAr.html('ARCHIVE');
    linkAr.style('text-align', 'right');


    //positioning
    linkA.position(linkMargin, linkBuffer + linkOffset);
    linkR.position(linkMargin, linkBuffer + linkOffset * 2);
    linkGI.position(linkMargin, linkBuffer + linkOffset * 3);
    linkM.position(linkMargin, linkBuffer + linkOffset * 4);
    linkC.position(linkMargin, linkBuffer + linkOffset * 5);
    linkE.position(linkMargin, linkBuffer + linkOffset * 6);
    // linkAO.position(linkMargin, linkBuffer + linkOffset*7);
    linkAr.position(linkMargin, linkBuffer + linkOffset * 7);

    // linkEN.position(windowWidth - 65, 15);
    linkFR.position(linkMargin, linkBuffer + linkOffset * 8);

    linkCSM.position(linkMargin, linkBuffer + linkOffset * 4);
    linkCSC.position(linkMargin, linkBuffer + linkOffset * 5);
    linkCSE.position(linkMargin, linkBuffer + linkOffset * 6);

  } else {
    //variable math
    linkOffset = 55;
    linkBuffer = top + 30;
    iconBuffer = top + 55;
    var linkMargin = 35;
    var iconMargin = 45;

    // linkA.style('opacity', '0');
    // linkR.style('opacity', '0');
    // linkGI.style('opacity', '0');
    // linkM.style('opacity', '0');
    // linkC.style('opacity', '0');
    // linkE.style('opacity', '0');
    // linkAr.style('opacity', '0');
    // linkFR.style('opacity', '0');
    linkA.html('<br> <br> <br> <br> <br> &nbsp &nbsp &nbsp ABOUT');
    linkA.style('text-align', 'left');
    linkR.html('<br> <br> <br> <br> <br> &nbsp &nbsp &nbsp RESOURCES');
    linkR.style('text-align', 'left');
    linkGI.html('<br> <br> <br> <br> <br> &nbsp &nbsp &nbsp GET <br> &nbsp &nbsp &nbsp INVOLVED');
    linkGI.style('text-align', 'left');
    linkM.html('<br> <br> <br> <br> <br> &nbsp &nbsp &nbsp MAPS <BR> &nbsp &nbsp &nbsp (COMING SOON)');
    linkM.style('text-align', 'left');
    linkC.html('<br> <br> <br> <br> <br> &nbsp &nbsp &nbsp CALENDAR <BR> &nbsp &nbsp &nbsp (COMING SOON)');
    linkC.style('text-align', 'left');
    linkE.html('<br> <br> <br> <br> <br> &nbsp &nbsp &nbsp EVENTS <BR> &nbsp &nbsp &nbsp (COMING SOON)');
    linkE.style('text-align', 'left');
    linkAr.html('<br> <br> <br> <br> <br> &nbsp &nbsp &nbsp ARCHIVE');
    linkAr.style('text-align', 'left');


    tint(255, 255);

    image(iconR, iconMargin, (iconBuffer + linkOffset*2), 40, 40);
    image(iconA, iconMargin, (iconBuffer + linkOffset), 40, 40);
    image(iconGI, iconMargin, (iconBuffer + linkOffset * 3), 40, 40);
    image(iconAr, iconMargin, (iconBuffer + linkOffset * 7), 40, 40);
    image(iconM, iconMargin, (iconBuffer + linkOffset * 4), 40, 40);
    image(iconC, iconMargin, (iconBuffer + linkOffset * 5), 40, 40);
    image(iconE, iconMargin, (iconBuffer + linkOffset * 6), 40, 40);

    //positioning
    linkA.position(linkMargin, linkBuffer + linkOffset);
    linkR.position(linkMargin, linkBuffer + linkOffset * 2);
    linkGI.position(linkMargin, linkBuffer + linkOffset * 3);
    linkM.position(linkMargin, linkBuffer + linkOffset * 4);
    linkC.position(linkMargin, linkBuffer + linkOffset * 5);
    linkE.position(linkMargin, linkBuffer + linkOffset * 6);
    // linkAO.position(linkMargin, linkBuffer + linkOffset*7);
    linkAr.position(linkMargin, linkBuffer + linkOffset * 7);

    // linkEN.position(windowWidth - 65, 15);
    linkFR.position(linkMargin, linkBuffer + linkOffset * 8.5);
    //
    // linkCSM.position(linkMargin, linkBuffer + linkOffset * 4);
    // linkCSC.position(linkMargin, linkBuffer + linkOffset * 5);
    // linkCSE.position(linkMargin, linkBuffer + linkOffset * 6);


  }




  //-------------------------------------------------------------
  //     ICON ANIMATIONS (DRAW)
  //-------------------------------------------------------------

if (windowWidth > 650){
  //---R---
  if (animateR == true) {
    tint(255, fadeR);
    if (windowWidth > 650){
    image(iconR, linkMargin, (linkBuffer + linkOffset*2), 50, 50);
  } else{

  }
    fadeR += fadeIncr;
  }

  //---A---
  if (animateA == true) {
    tint(255, fadeA);
    image(iconA, linkMargin, (linkBuffer + linkOffset), 50, 50);
    fadeA += fadeIncr;
  }

  //---GI---
  if (animateGI == true) {
    tint(255, fadeGI);
    image(iconGI, linkMargin, (linkBuffer + linkOffset * 3), 50, 50);
    fadeGI += fadeIncr;
  }

  //---Ar---
  if (animateAr == true) {
    tint(255, fadeAr);
    image(iconAr, linkMargin, (linkBuffer + linkOffset * 7), 50, 50);
    fadeAr += fadeIncr;
  }

  //---M---
  if (animateM == true) {
    tint(255, fadeM);
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
    // linkFR.position(linkMargin, linkBuffer + linkOffset * 8);
  } else {
    var topNew = top + 45;
    translate(iconMargin+15, topNew);
    rotate(logoSpin);
    image(amLogo, 0, 0, 75, 75);
    // linkFR.position(linkMargin, linkBuffer + linkOffset * 8);
  }
  pop();


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
  animateCSM = true;
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
  animateCSC = true;
  // linkC.style('font-style', 'normal');
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



//-------------------------------------------------------------
//     MOUSEWHEEL (FUNCTIONS)
//-------------------------------------------------------------

// function mouseWheel(event) {
  // print(event.delta);

  // fadeBack = 255;
  // // move the square according to the vertical scroll amount
  // logoSpin += (event.delta);

  //uncomment to block page scrolling
  // return false;
// }

//-------------------------------------------------------------
//    TRACKPAD (FUNCTIONS)
//-------------------------------------------------------------

// window.onwheel = function (e) {
//   e.preventDefault();
//
//   if (e.ctrlKey) {
//     // Your zoom/scale factor
//     scale -= e.deltaY * 0.01;
//   } else {
//     // Your trackpad X and Y positions
//     posX -= e.deltaX * 2;
//     posY -= e.deltaY * 2;
//   }
//
//   render();
// };

//-------------------------------------------------------------
//     RESIZE (FUNCTIONS)
//-------------------------------------------------------------

function windowResized() {

  var bodyH = document.getElementById('gallery');
  //use id to get div height for canvas scrolling length
  var canvasH = bodyH.scrollHeight + 50;

  resizeCanvas(windowWidth, (canvasH));


}

//-------------------------------------------------------------
//     BOX NIMATION (FUNCTIONS)
//-------------------------------------------------------------

function backgroundPattern(w, h, tw, th) {

  stroke(255);
  strokeWeight(1.0);
  spinX = map(mouseX, 0, windowWidth, 0, 15);
  spinY = mouseY / 100;

  var widthInc = w / widthVal;
  var heightInc = h / heightVal;

  for (var i = 0; i < widthVal; i++) {
    for (var j = 0; j < heightVal; j++) {

      push();
      translate((30 + i * widthInc) - tw, (30 + j * heightInc) - th);
      if (flip == true) {
        rotate(spinX * spinY);
      } else {
        rotate(-spinX * spinY);
      }
      rect(-5, -5, 5, 5);
      rect(10, 5, 3, 3);
      pop();
      flip = !flip;


    }
  }
}
