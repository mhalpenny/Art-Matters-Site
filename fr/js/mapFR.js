//-------------------------------------------------------------
//     Created by Matthew Halpenny for Art Matters 2019
//-------------------------------------------------------------


//-------------------------------------------------------------
//     VARIABLES
//-------------------------------------------------------------

let offset;
let logoSpin = 0;
let logoY = 50;
let animateR = false, animateA = false, animateM = false, animateGI = false, animateEx = false, animateAr = false, animateE = false, animateC = false, mainOff = false, animateCSM = false, animateCSC = false, animateCSE = false;
let fadeEx = 0, fadeR = 0, fadeA = 0, fadeM = 0, fadeE = 0, fadeAr = 0, fadeC = 0, fadeGI = 0, fadeMain = 255, fadeBack= 50;
let linkOffset, linkBuffer, linkMargin, iconMargin;
let fadeIncr = 35;
let bColorVal = 0;
let widthVal = 12;
let heightVal = 12;
let flip = true;
let spinX, spinY;
let bodyH, canvasH;
let isAnimation = 400;
let refresh = false;
let refreshArray = [1];
let valueM = 0, valueC = 0, valueE = 0;
let nonLoop = false;
let widthX, heightY;
let drawX, drawY, drawW, drawH, el, elBound;
let textW1, textW2, textH1, textH2;
let calWidth, calHeight, calOffX, calOffY, calSize;
let font, fontsize;


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
    iconEx = loadImage('assets/gyIcon.png');
  //logo
  amLogo = loadImage('assets/amlogo.png');
  //Calendar
   map = loadImage('assets/map.png');
   //fonts
   font = loadFont('fonts/Lack-Regular.otf');
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


  textFont(font);
  textSize(20);
  textAlign(LEFT, CENTER);

  //-------------------------------------------------------------
  //     LAYERS FORMATTING (SETUP)
  //-------------------------------------------------------------

  //align with the cnter of the page
  imageMode(CORNER);

  el = document.getElementById('imgContainer');
  elBound = el.getBoundingClientRect();
  drawX = elBound.left;
  drawY = elBound.top;
  drawW = elBound.right-elBound.left;
  drawH = elBound.bottom-elBound.top;

  ellipseMode(CORNER);

    //-------------------------------------------------------------
    //     LINKS (SETUP)
    //-------------------------------------------------------------


      linkR = createA('ressources', 'RESSOURCES');

      linkA = createA('#', 'À PROPOS');

      linkC = createA('calendrier', 'CALENDRIER');

      linkAr = createA('http://artmattersfestival.org/archive/', 'ARCHIVE');

      linkGI = createA('impliquezVous', 'IMPLIQUEZ-VOUS');

      linkE = createA('evenements', 'ÉVÉNEMENTS');

      linkM = createA('carte', 'CARTE');

      linkEx = createA('expositions', 'EXPOSITIONS');

      // linkAO = createA('pdf/AM_AntiO.pdf', 'ANTI-OPPRESSION STATEMENT');

      // linkEN = createA('#', 'EN');
      // linkEN.id('lang');
      linkEN = createA('../en/about', 'EN');
      linkEN.id('lang');

      home = createA('accueil', 'O');
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
    linkEx.mouseOver(overLinkEx);
    linkEx.mouseOut(offLinkEx);


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
  //     MAP (DRAW)
  //-------------------------------------------------------------


  imageMode(CORNER);
  fill(248, 251, 252);
  noStroke();
  rect(drawX, drawY, drawW+100, drawH+100);
  image(map, drawX, drawY, drawW, drawH);
  imageMode(CENTER);

  $('#1').show();
  $('#2').show();
  $('#3').show();
  $('#4').show();
  $('#5').show();
  $('#6').show();
  $('#7').show();
  $('#8').show();
  $('#9').show();
  $('#10').show();

  //ellipse one
  var ex1 = 76.4;
  var ey1 = 67.2;

  if ((calX(ex1) < mouseX && mouseX < (calX(ex1)+50) && calY(ey1) < mouseY && mouseY < (calY(ey1) + 50)) || mouseY < calY(15) && mouseY > calY(8) && mouseX > drawX && mouseX < drawX + 200){
    noFill();
    stroke(0);
    ellipse(calX(ex1), calY(ey1), 50, 50);
    noStroke();
    fill(0);
    textSize(20);
    text("WOULD YOU BURY ME", calX(ex1), calY(ey1)+70);
    textSize(16);
    text("2 Mars", calX(ex1), calY(ey1)+90);

    //hide other dates
    // $('#1').hide();
    $('#2').hide();
    $('#3').hide();
    $('#4').hide();
    $('#5').hide();
    $('#6').hide();
    $('#7').hide();
    $('#8').hide();
    $('#9').hide();
    $('#10').hide();
  }

  //ellipse two
  var ex2 = 37.8;
  var ey2 = 87.5;


  if ((calX(ex2) < mouseX && mouseX < (calX(ex2)+50) && calY(ey2) < mouseY && mouseY < (calY(ey2) + 50)) || mouseY < calY(26) && mouseY > calY(17) && mouseX > drawX && mouseX < drawX + 200){
    noFill();
    stroke(0);
    ellipse(calX(ex2), calY(ey2), 50, 50);
    noStroke();
    fill(0);
    textSize(20);
    text("THE SUFFOCATING, IMPRACTICAL DESIRE TO NAME.", calX(ex2), calY(ey2)+70);
    textSize(16);
    text("4 / 11 / 19 / 26 Mars", calX(ex2), calY(ey2)+90);

    $('#1').hide();
    // $('#2').hide();
    $('#3').hide();
    $('#4').hide();
    $('#5').hide();
    $('#6').hide();
    $('#7').hide();
    $('#8').hide();
    $('#9').hide();
    $('#10').hide();
  }

  //ellipse three
  var ex3 = 69.5;
  var ey3 = 55.2;


  if ((calX(ex3) < mouseX && mouseX < (calX(ex3)+50) && calY(ey3) < mouseY && mouseY < (calY(ey3) + 50)) || mouseY < calY(34) && mouseY > calY(26) && mouseX > drawX && mouseX < drawX + 200){
    noFill();
    stroke(0);
    ellipse(calX(ex3), calY(ey3), 50, 50);
    noStroke();
    fill(0);
    textSize(20);
    text("SOUS NOS SOUFFLES //", calX(ex3), calY(ey3)+70);
    text("VULNERABILITY LINGERS", calX(ex3), calY(ey3)+90);
    textSize(16);
    text("5 - 17 Mars", calX(ex3), calY(ey3)+110);

    $('#1').hide();
    $('#2').hide();
    // $('#3').hide();
    $('#4').hide();
    $('#5').hide();
    $('#6').hide();
    $('#7').hide();
    $('#8').hide();
    $('#9').hide();
    $('#10').hide();
  }

  //ellipse four
  var ex4 = 45.05;
  var ey4 = 33.48;


  if ((calX(ex4)+20 < mouseX && mouseX < (calX(ex4)+50) && calY(ey4)-10 < mouseY && mouseY < (calY(ey4) + 50)) || mouseY < calY(42) && mouseY > calY(34) && mouseX > drawX && mouseX < drawX + 200){
    noFill();
    stroke(0);
    ellipse(calX(ex4), calY(ey4), 50, 50);
    noStroke();
    fill(0);
    textSize(20);
    text("PORPOS", calX(ex4), calY(ey4)+70);
    textSize(16);
    text("8 Mars", calX(ex4), calY(ey4)+90);

    $('#1').hide();
    $('#2').hide();
    $('#3').hide();
    // $('#4').hide();
    $('#5').hide();
    $('#6').hide();
    $('#7').hide();
    $('#8').hide();
    $('#9').hide();
    $('#10').hide();
  }

  //ellipse five
  var ex5 = 42.8;
  var ey5 = 30.58;

  if ((calX(ex5) < mouseX && mouseX < (calX(ex5)+40) && calY(ey5) < mouseY && mouseY < (calY(ey5) + 40)) || mouseY < calY(50) && mouseY > calY(42) && mouseX > drawX && mouseX < drawX + 200){
    noFill();
    stroke(0);
    ellipse(calX(ex5), calY(ey5), 50, 50);
    noStroke();
    fill(255);
    textSize(20);
    text("DIGITAL DREAMS //", calX(ex5)+0.5, calY(ey5)+70);
    text("I’LL DREAM ABOUT THIS SOMEDAY", calX(ex5)+1, calY(ey5)+90);
    textSize(16);
    text("6 - 18 Mars", calX(ex5)+0.5, calY(ey5)+110);
    fill(0);
    textSize(20);
    text("DIGITAL DREAMS //", calX(ex5), calY(ey5)+70);
    text("I’LL DREAM ABOUT THIS SOMEDAY", calX(ex5), calY(ey5)+90);
    textSize(16);
    text("6 - 18 Mars", calX(ex5), calY(ey5)+110);

    $('#1').hide();
    $('#2').hide();
    $('#3').hide();
    $('#4').hide();
    // $('#5').hide();
    $('#6').hide();
    $('#7').hide();
    $('#8').hide();
    $('#9').hide();
    $('#10').hide();
  }

  //ellipse six
  var ex6 = 41.8;
  var ey6 = 22.58;



  if ((calX(ex6) < mouseX && mouseX < (calX(ex6)+50) && calY(ey6) < mouseY && mouseY < (calY(ey6) + 50)) || mouseY < calY(58) && mouseY > calY(50) && mouseX > drawX && mouseX < drawX + 200){

    noFill();
    stroke(0);
    ellipse(calX(ex6), calY(ey6), 50, 50);
    noStroke();
    fill(0);
    textSize(20);
    text("INTERFACE", calX(ex6), calY(ey6)+70);
    textSize(16);
    text("7 - 26 Mars", calX(ex6), calY(ey6)+90);

    $('#1').hide();
    $('#2').hide();
    $('#3').hide();
    $('#4').hide();
    $('#5').hide();
    // $('#6').hide();
    $('#7').hide();
    $('#8').hide();
    $('#9').hide();
    $('#10').hide();
  }

  //ellipse seven
  var ex7 = 64.6;
  var ey7 = 32;

  if ((calX(ex7) < mouseX +5 && mouseX < (calX(ex7)+45) && calY(ey7) < mouseY && mouseY < (calY(ey7) + 45)) || mouseY < calY(65) && mouseY > calY(58) && mouseX > drawX && mouseX < drawX + 200){

    noFill();
    stroke(0);
    ellipse(calX(ex7), calY(ey7), 50, 50);
    noStroke();
    fill(0);
    textSize(20);
    text("IN SEARCH OF DELICIOUS", calX(ex7), calY(ey7)+70);
    textSize(16);
    text("10 - 24 Mars", calX(ex7), calY(ey7)+90);

    $('#1').hide();
    $('#2').hide();
    $('#3').hide();
    $('#4').hide();
    $('#5').hide();
    $('#6').hide();
    // $('#7').hide();
    $('#8').hide();
    $('#9').hide();
    $('#10').hide();
  }

  //ellipse eight
  var ex8 = 64.95;
  var ey8 = 70.9;



  if ((calX(ex8) < mouseX && mouseX < (calX(ex8)+50) && calY(ey8) < mouseY && mouseY < (calY(ey8) + 50)) || mouseY < calY(77) && mouseY > calY(65) && mouseX > drawX && mouseX < drawX + 200){

    noFill();
    stroke(0);
    ellipse(calX(ex8), calY(ey8), 50, 50);
    noStroke();
    fill(0);
    textSize(20);
    text("SITES OF EMBODIED SILENCE", calX(ex8), calY(ey8)+70);
    textSize(16);
    text("11 - 22 Mars", calX(ex8), calY(ey8)+90);

    $('#1').hide();
    $('#2').hide();
    $('#3').hide();
    $('#4').hide();
    $('#5').hide();
    $('#6').hide();
    $('#7').hide();
    // $('#8').hide();
    $('#9').hide();
    $('#10').hide();
  }

  //ellipse nine
  var ex9 = 60.95;
  var ey9 = 38.58;



  if ((calX(ex9) < mouseX && mouseX < (calX(ex9)+45) && calY(ey9) < mouseY + 5 && mouseY < (calY(ey9) + 50)) || mouseY < calY(85) && mouseY > calY(77) && mouseX > drawX && mouseX < drawX + 200){

    noFill();
    stroke(0);
    ellipse(calX(ex9), calY(ey9), 50, 50);
    noStroke();
    fill(255);
    textSize(20);
    text("LOOK WHAT YOU MADE ME DO", calX(ex9)+0.5, calY(ey9)+70);
    textSize(16);
    text("13 - 24 Mars", calX(ex9)+0.5, calY(ey9)+90);
    fill(0);
    textSize(20);
    text("LOOK WHAT YOU MADE ME DO", calX(ex9), calY(ey9)+70);
    textSize(16);
    text("13 - 24 Mars", calX(ex9), calY(ey9)+90);

    $('#1').hide();
    $('#2').hide();
    $('#3').hide();
    $('#4').hide();
    $('#5').hide();
    $('#6').hide();
    $('#7').hide();
    $('#8').hide();
    // $('#9').hide();
    $('#10').hide();
  }

  //ellipse ten
  var ex10 = 87.85;
  var ey10 = 1.58;



  if ((calX(ex10) < mouseX && mouseX < (calX(ex10)+50) && calY(ey10) < mouseY && mouseY < (calY(ey10) + 50)) || mouseY < calY(92) && mouseY > calY(85) && mouseX > drawX && mouseX < drawX + 200){

    noFill();
    stroke(0);
    ellipse(calX(ex10), calY(ey10), 50, 50);
    noStroke();
    fill(255);
    textSize(20);
    text("MALAISE", calX(ex10)+0.5, calY(ey10)+70);
    textSize(16);
    text("13 - 24 Mars", calX(ex10)+0.5, calY(ey10)+90);
    fill(0);
    textSize(20);
    text("MALAISE", calX(ex10), calY(ey10)+70);
    textSize(16);
    text("13 - 24 Mars ", calX(ex10), calY(ey10)+90);

    $('#1').hide();
    $('#2').hide();
    $('#3').hide();
    $('#4').hide();
    $('#5').hide();
    $('#6').hide();
    $('#7').hide();
    $('#8').hide();
    $('#9').hide();
    // $('#10').hide();
  }


  //-------------------------------------------------------------
  //     NAV ANIMATION (DRAW)
  //-------------------------------------------------------------

  if (windowWidth > 650) {
    linkOffset = 55;
    linkBuffer = top + 80;
    linkMargin = 35;

    if (nonLoop == false) {

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
      linkEx.html('EXPOSITIONS');
      linkEx.style('text-align', 'right');
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

    linkEN.position(linkMargin, linkBuffer + linkOffset * 9);

  } else {
    //variable math
    linkOffset = 55;
    linkBuffer = top + 25;
    iconBuffer = top + 45;
    inkMargin = 30;
    iconMargin = 45;

    if (nonLoop == false) {

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
      linkEx.html('<br> <br> <br> <br> <br>  EXPOSITIONS');
      linkEx.style('text-align', 'left');
      linkE.style('color', 'black');
      linkAr.html('<br> <br> <br> <br> <br>  ARCHIVE');
      linkAr.style('text-align', 'left');

      nonLoop = true;
    }


    tint(255, 255);

    imageMode(CENTER);

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

    linkEN.position(linkMargin, linkBuffer + linkOffset * 9.4);

  }

//-------------------------------------------------------------
//     ICON ANIMATIONS (DRAW)
//-------------------------------------------------------------

if (windowWidth > 650) {

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

  resizeCanvas(windowWidth, windowHeight);

  el = document.getElementById('imgContainer');
  elBound = el.getBoundingClientRect();
  drawX = elBound.left;
  drawY = elBound.top;
  drawW = elBound.right-elBound.left;
  drawH = elBound.bottom-elBound.top;

    background(248, 251, 252);
    nonLoop = false;


}

//calculates position in calendar based on percentage arguement
function calX(a){
  var calc = drawX + (drawW*(a/100));
  return calc;

}

//calculates position in calendar based on percentage arguement
function calY(a){
  var calc = drawY + (drawH*(a/100));
  return calc;

}
