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
var fadeR, fadeA, fadeCO, fadeE, fadeAr, fadeCU, fadeGI, fadeBack;
var linkOffset, linkBuffer;
var fadeIncr = 35;
var bColorVal = 0;
var widthVal = 10;
var heightVal = 5;
var flip = true;
var spinX, spinY;
var bodyH, canvasH;
var isAnimation = 400;


// var colorCounter = 0;
// var cpuPause = false;

//-------------------------------------------------------------
//     PRELOAD
//-------------------------------------------------------------

function preload() {
  //icons
  iconR = loadImage('assets/rrIcon.png');
  iconA = loadImage('assets/bIcon.png');
  iconE = loadImage('assets/vIcon.png');
  iconGI = loadImage('assets/rIcon.png');
  iconCO = loadImage('assets/gIcon.png');
  iconAr = loadImage('assets/oIcon.png');
  iconCU = loadImage('assets/yIcon.png');
  //logo
  amLogo = loadImage('assets/amlogo.png');
  //test
  bDiv = loadImage('assets/div.jpg');
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
  fadeA = 0;
  fadeCO = 0;
  fadeR = 0;
  fadeAr = 0;
  fadeCU = 0;
  fadeE = 0;
  fadeGI = 0;
  fadeBack = 50;

  //-------------------------------------------------------------
  //     LINKS (SETUP)
  //-------------------------------------------------------------

  linkR = createA('resources.html', 'RESOURCES');

  linkA = createA('#', 'ABOUT');

  linkCU = createA('#', 'CONTACT US');

  linkAr = createA('#', 'ARCHIVE');

  linkGI = createA('#', 'GET INVOLVED');

  linkE = createA('#', 'EVENTS');

  linkCO = createA('#', 'CALL-OUTS');

  // linkAO = createA('pdf/AM_AntiO.pdf', 'ANTI-OPPRESSION STATEMENT');

  // linkEN = createA('index.html', 'EN');
  // linkEN.id('lang');
  // linkFR = createA('indexFR.html', 'FR');
  // linkFR.id('lang');

  home = createA('index.html', 'O');
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

  background(255, fadeBack);
  fadeBack = 50;

  //for all moving elements
  var top = window.pageYOffset;



  //-------------------------------------------------------------
  //     INTERACTIVE SQUARES (DRAW)
  //-------------------------------------------------------------

  //variable for all squares
  var width = (windowWidth / 1.7);
  var height = (windowWidth / 3.2);

  //---DIV BACKGROUND 1---

  var myDiv = document.getElementById('AO');
  var rectDiv = myDiv.getBoundingClientRect();

  rectMode(CENTER);
  fill(0, 0, 0, 100);
  push();
  angleMode(DEGREES);
  translate(rectDiv.right + top, rectDiv.top);
  rotate(45);
  rect(0, 0 + top, width, height);
  pop();
  push()
  translate(rectDiv.right, rectDiv.top);
  rotate(-135);
  backgroundPattern(width, height, width/2, height/2);
  pop();

  //---DIV BACKGROUND 2---

  //variables for 2nd square
  var leftOffset = rectDiv.left - isAnimation;
  var leftToRight = leftOffset + top;

  var myDiv = document.getElementById('V');
  var rectDiv = myDiv.getBoundingClientRect();

  rectMode(CENTER);
  fill(0, 0, 0, 170);
  push();
  angleMode(DEGREES);

  if (leftToRight < rectDiv.left) {
    translate(leftToRight, rectDiv.top + top);
  } else {
    translate(rectDiv.left, rectDiv.top + top);
  }

  rotate(-45);
  rect(0, 0, width, height);
  pop();
  push();

  if (leftToRight < rectDiv.left) {
    translate(leftToRight, rectDiv.top + top);
  } else {
    translate(rectDiv.left, rectDiv.top + top);
  }

  rotate(135);
  backgroundPattern(width, height, width/2, height/2);
  pop();

  //---DIV BACKGROUND 3---

  //square 3 variables
  var rightOffset = rectDiv.right + isAnimation;
  var rightToLeft = rightOffset - (top - (canvasH / 3));

  var myDiv = document.getElementById('AL');
  var rectDiv = myDiv.getBoundingClientRect();

  rectMode(CENTER);
  fill(0, 0, 0, 170);
  push();
  angleMode(DEGREES);

  if (rightToLeft > rectDiv.right) {
    translate(rightToLeft, rectDiv.top + top);
  } else {
    translate(rectDiv.right, rectDiv.top + top);
  }
  rotate(45);
  rect(0, 0, width, height);
  pop();
  push()
  if (rightToLeft > rectDiv.right) {
    translate(rightToLeft, rectDiv.top + top);
  } else {
    translate(rectDiv.right, rectDiv.top + top);
  }
  rotate(-135);
  backgroundPattern(width, height, width/2, height/2);
  pop();



  //-------------------------------------------------------------
  //     NAV ANIMATION (DRAW)
  //-------------------------------------------------------------

  if (windowWidth > 650) {
    //variable math
    linkOffset = 55;
    linkBuffer = top + 80;
    var linkMargin = 35;
  } else {
    //variable math
    linkOffset = 50;
    linkBuffer = top + 80;
    var linkMargin = 29;
  }

  //positioning
  linkR.position(linkMargin, linkBuffer + linkOffset);
  linkA.position(linkMargin, linkBuffer + linkOffset * 2);
  linkCU.position(linkMargin, linkBuffer + linkOffset * 3);
  linkE.position(linkMargin, linkBuffer + linkOffset * 4);
  linkGI.position(linkMargin, linkBuffer + linkOffset * 5);
  linkCO.position(linkMargin, linkBuffer + linkOffset * 6);
  // linkAO.position(linkMargin, linkBuffer + linkOffset*7);
  linkAr.position(linkMargin, linkBuffer + linkOffset * 7);

  // linkEN.position(windowWidth - 65, 15);
  // linkFR.position(windowWidth - 35, 15);


  //-------------------------------------------------------------
  //     ICON ANIMATIONS (DRAW)
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
    image(iconA, linkMargin, (linkBuffer + linkOffset * 2), 50, 50);
    fadeA += fadeIncr;
  }

  //---CO---
  if (animateCO == true) {
    tint(255, fadeCO);
    image(iconCO, linkMargin, (linkBuffer + linkOffset * 6), 50, 50);
    fadeCO += fadeIncr;
  }

  //---GI---
  if (animateGI == true) {
    tint(255, fadeGI);
    image(iconGI, linkMargin, (linkBuffer + linkOffset * 5), 50, 50);
    fadeGI += fadeIncr;
  }

  //---Ar---
  if (animateAr == true) {
    tint(255, fadeAr);
    image(iconAr, linkMargin, (linkBuffer + linkOffset * 7), 50, 50);
    fadeAr += fadeIncr;
  }

  //---CU---
  if (animateCU == true) {
    tint(255, fadeCU);
    image(iconCU, linkMargin, (linkBuffer + linkOffset * 3), 50, 50);
    fadeCU += fadeIncr;
  }

  //---E---
  if (animateE == true) {
    tint(255, fadeE);
    image(iconE, linkMargin, (linkBuffer + linkOffset * 4), 50, 50);
    fadeE += fadeIncr;
  }

  //-------------------------------------------------------------
  //     LOGO ANIMATION (DRAW)
  //-------------------------------------------------------------


  angleMode(DEGREES);
  imageMode(CENTER);
  tint(255, 255);
  var wOffset = windowWidth / 800;
  var sizeOffset = windowWidth / 1000;
  var topNew = top + 62;
  //draw pseudo link
  home.position(linkMargin + 13, topNew - 35);
  push();
  if (windowWidth > 650) {
    translate(linkMargin * 2.3, topNew);
    rotate(logoSpin);
    image(amLogo, 0, 0, 110, 110);
  } else {
    translate(linkMargin * 1.5, topNew);
    rotate(logoSpin);
    image(amLogo, 0, 0, 70, 70);
  }
  pop();

}


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

//-------------------------------------------------------------
//     MOUSEWHEEL (FUNCTIONS)
//-------------------------------------------------------------

function mouseWheel(event) {
  print(event.delta);
  //smoothen delta
  fadeBack = 255;
  //move the square according to the vertical scroll amount
  logoSpin += (event.delta);

  //uncomment to block page scrolling
  // return false;
}

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


    stroke(255, 200);
    noFill();
    strokeWeight(1.5);
    spinX = map(mouseX, 0, windowWidth, 0, 15);
    spinY = mouseY / 100;
    var warp = spinX + spinY;

    var widthInc = w / widthVal;
    // var heightInc = canvasH / heightVal;
    var heightInc = h / heightVal;


    for (var i = 0; i < widthVal; i++) {

      for (var j = 0; j < heightVal; j++) {

        push();
        translate((30 + i * widthInc) - (tw + warp), (30 + j * heightInc) - (th + warp));
        ellipse(0, 0, 10, 10);
        pop();
        flip = !flip;

    }
  }
}
