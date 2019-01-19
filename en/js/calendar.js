//-------------------------------------------------------------
//     Created by Matthew Halpenny for Art Matters 2019
//-------------------------------------------------------------


//-------------------------------------------------------------
//     VARIABLES
//-------------------------------------------------------------

var offset;
var logoSpin = 0;
var logoY = 50;
var animateR = false, animateA = false, animateM = false, animateGI = false, animateEx = false, animateAr = false, animateE = false, animateC = false, mainOff = false, animateCSM = false, animateCSC = false, animateCSE = false;
var fadeR = 0, fadeA = 0, fadeM = 0, fadeE = 0, fadeAr = 0, fadeC = 0, fadeGI = 0, fadeEx, fadeMain = 255, fadeBack= 50;
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
var valueM = 0, valueC = 0, valueE = 0;
var nonLoop = false;
var widthX, heightY;
var calWidth, calHeight, calOffX, calOffY, calSize;


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
  //Calendar
   calendar = loadImage('assets/calendar.png');
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
  canvas = createCanvas(windowWidth, windowHeight);
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

    if (windowWidth > 650){
        background(248, 251, 252, fadeBack);
      fadeBack = 50;
    } else{
        background(248, 251, 252);
    }

  //for all moving elements
  var top = window.pageYOffset;
  logoSpin = top/2;

  widthX = windowWidth/100;
  heightY = windowHeight/100;

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
//     NAV ANIMATION (DRAW)
//-------------------------------------------------------------

if (windowWidth > 650) {
  linkOffset = 55;
  linkBuffer = top + 80;
  var linkMargin = 35;

  if (nonLoop == false){

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

  if (nonLoop == false){

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

  image(iconR, iconMargin, (iconBuffer + linkOffset*2), 40, 40);
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
//     CALENDAR (DRAW)
//-------------------------------------------------------------

//declare variable for calendar "div"
calWidth = windowWidth*0.7;
calHeight = windowHeight*0.8;
calOffX = 55*6;
calOffY = 55;
calSize = 70;


rect(calOffX, 55, calWidth, calHeight);
imageMode(CORNER);
image(calendar, calOffX, 55, calWidth, calHeight);
imageMode(CENTER);

var eventBox = document.getElementById("eventBox");
eventBox.style.display = "none";


//Add interactivity
noFill();
noStroke();
//ellipse one
var ex1 = 75;
var ey1 = 30;
ellipseMode(CORNER);
ellipse(calX(ex1), calY(ey1), calSize, calSize);

if (calX(ex1) < mouseX && mouseX < (calX(ex1)+calSize) && calY(ey1) < mouseY && mouseY < (calY(ey1) + calSize)){
  console.log("works");
  eventBox.style.display = "block";
}



//ellipse 2

//-------------------------------------------------------------
//     ICON ANIMATIONS (DRAW)
//-------------------------------------------------------------

if (windowWidth > 650){
  linkM.html('MAP');
    linkC.html('CALENDAR');

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

  resizeCanvas(windowWidth, windowHeight);

    background(248, 251, 252);
    nonLoop = false;


}

//calculates position in calendar based on percentage arguement
function calX(a){
  var calc = calOffX + (calWidth*(a/100));
  return calc;

}

//calculates position in calendar based on percentage arguement
function calY(a){
  var calc = calOffY + (calHeight*(a/100));
  return calc;

}
