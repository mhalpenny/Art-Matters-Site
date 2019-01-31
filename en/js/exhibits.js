//-------------------------------------------------------------
//     Created by Matthew Halpenny for Art Matters 2019
//-------------------------------------------------------------


//-------------------------------------------------------------
//     VARIABLES
//-------------------------------------------------------------

let offset;
let logoSpin = 0;
let logoY = 50;
let animateR = false,
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
let fadeR = 0,
  fadeA = 0,
  fadeM = 0,
  fadeE = 0,
  fadeAr = 0,
  fadeC = 0,
  fadeGI = 0,
  fadeEx = 0,
  fadeMain = 255,
  fadeBack = 50;
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
let valueM = 0,
  valueC = 0,
  valueE = 0;
let nonLoop = false;
let widthX, heightY;
let div1, div2, rect1, rect2, div3, rect3, rectW, rectH;
let img1, img2, img3, img4, img5, img6;



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
  canvas = createCanvas(300, canvasH);
  //basic canvas formatting
  canvas.style("z-index", "-1");
  canvas.position(0, 0);



  //-------------------------------------------------------------
  //     LINKS (SETUP)
  //-------------------------------------------------------------

  linkR = createA('resources', 'RESOURCES');

  linkA = createA('about', 'ABOUT');

  linkC = createA('calendar', 'CALENDAR');

  linkAr = createA('http://artmattersfestival.org/archive/', 'ARCHIVE');

  linkGI = createA('getInvolved', 'GET INVOLVED');

  linkE = createA('events', 'EVENTS');

  linkEx = createA('exhibitions', 'EXHIBITIONS');

  linkM = createA('map', 'MAP');

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
    //     INTERACTION (DRAW)
    //-------------------------------------------------------------

    //box calculations
    div1 = document.getElementById('box1');
    rect1 = div1.getBoundingClientRect();
    rectW = rect1.right - rect1.left;
    rectH = rect1.bottom - rect1.top;
    //image calculations
    img1 = $('#box1').find('.img1');
    img2 = $('#box1').find('.img2');
    img3 = $('#box1').find('.img3');
    img4 = $('#box1').find('.img4');
    img5 = $('#box1').find('.img5');
    img6 = $('#box1').find('.img6');

    if (mouseY > (rect1.top + top) && mouseY < (rect1.bottom + top) && mouseX < rect1.right && mouseX > rect1.left) {

      if (mouseX < (rect1.left + (rectW / 3)) && mouseY > ((rect1.bottom + top) - (rectH / 2))) {
        img1.show();
        img2.hide();
        img3.hide();
        img4.hide();
        img5.hide();
        img6.hide();

      } else if (mouseX > (rect1.left + (rectW / 3)) && mouseX < (rect1.left + (rectW / 3) * 2) && mouseY > ((rect1.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.show();
        img3.hide();
        img4.hide();
        img5.hide();
        img6.hide();

      } else if (mouseX > (rect1.left + (rectW / 3) * 2) && mouseY > ((rect1.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.hide();
        img3.show();
        img4.hide();
        img5.hide();
        img6.hide();

      } else if (mouseX < (rect1.left + (rectW / 3)) && mouseY < ((rect1.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.hide();
        img3.hide();
        img4.show();
        img5.hide();
        img6.hide();

      } else if (mouseX > (rect1.left + (rectW / 3)) && mouseX < (rect1.left + (rectW / 3) * 2) && mouseY < ((rect1.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.hide();
        img3.hide();
        img4.hide();
        img5.show();
        img6.hide();

      } else if (mouseX > (rect1.left + (rectW / 3) * 2) && mouseY < ((rect1.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.hide();
        img3.hide();
        img4.hide();
        img5.hide();
        img6.show();

      }
    } else {
      fill(250, 209, 191);
      noStroke();
      rect(rect1.left, rect1.top + top, (rect1.right - rect1.left), (rect1.bottom - rect1.top));
      img1.hide();
      img2.hide();
      img3.hide();
      img4.hide();
      img5.hide();
      img6.hide();
    }

    //container variables
    div2 = document.getElementById('box2');
    rect2 = div2.getBoundingClientRect();
    rectW = rect2.right - rect2.left;
    rectH = rect2.bottom - rect2.top;
    //image variables
    img1 = $('#box2').find('.img1');
    img2 = $('#box2').find('.img2');
    img3 = $('#box2').find('.img3');
    img4 = $('#box2').find('.img4');
    img5 = $('#box2').find('.img5');
    img6 = $('#box2').find('.img6');

    if (mouseY > (rect2.top + top) && mouseY < (rect2.bottom + top) && mouseX < rect2.right && mouseX > rect2.left) {

      if (mouseX < (rect2.left + (rectW / 3)) && mouseY > ((rect2.bottom + top) - (rectH / 2))) {

        img1.show();
        img2.hide();
        img3.hide();
        img4.hide();
        img5.hide();
        img6.hide();
      } else if (mouseX > (rect2.left + (rectW / 3)) && mouseX < (rect2.left + (rectW / 3) * 2) && mouseY > ((rect2.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.show();
        img3.hide();
        img4.hide();
        img5.hide();
        img6.hide();

      } else if (mouseX > (rect2.left + (rectW / 3) * 2) && mouseY > ((rect2.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.hide();
        img3.show();
        img4.hide();
        img5.hide();
        img6.hide();

      } else if (mouseX < (rect2.left + (rectW / 3)) && mouseY < ((rect2.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.hide();
        img3.hide();
        img4.show();
        img5.hide();
        img6.hide();

      } else if (mouseX > (rect2.left + (rectW / 3)) && mouseX < (rect2.left + (rectW / 3) * 2) && mouseY < ((rect2.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.hide();
        img3.hide();
        img4.hide();
        img5.show();
        img6.hide();

      } else if (mouseX > (rect2.left + (rectW / 3) * 2) && mouseY < ((rect2.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.hide();
        img3.hide();
        img4.hide();
        img5.hide();
        img6.show();

      }
    } else {
      // fill(250, 209, 191);
      fill(43, 96, 198);
      noStroke();
      rect(rect2.left, rect2.top + top, (rect2.right - rect2.left), (rect2.bottom - rect2.top));
      img1.hide();
      img2.hide();
      img3.hide();
      img4.hide();
      img5.hide();
      img6.hide();
    }

    div3 = document.getElementById('box3');
    rect3 = div3.getBoundingClientRect();
    rectW = rect3.right - rect3.left;
    rectH = rect3.bottom - rect3.top;

    //image variables
    img1 = $('#box3').find('.img1');
    img2 = $('#box3').find('.img2');
    img3 = $('#box3').find('.img3');
    img4 = $('#box3').find('.img4');
    img5 = $('#box3').find('.img5');
    img6 = $('#box3').find('.img6');

    if (mouseY > (rect3.top + top) && mouseY < (rect3.bottom + top) && mouseX < rect3.right && mouseX > rect3.left) {

      if (mouseX < (rect3.left + (rectW / 3)) && mouseY > ((rect3.bottom + top) - (rectH / 2))) {
        img1.show();
        img2.hide();
        img3.hide();
        img4.hide();
        img5.hide();
        img6.hide();

      } else if (mouseX > (rect3.left + (rectW / 3)) && mouseX < (rect3.left + (rectW / 3) * 2) && mouseY > ((rect3.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.show();
        img3.hide();
        img4.hide();
        img5.hide();
        img6.hide();

      } else if (mouseX > (rect3.left + (rectW / 3) * 2) && mouseY > ((rect3.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.hide();
        img3.show();
        img4.hide();
        img5.hide();
        img6.hide();

      } else if (mouseX < (rect3.left + (rectW / 3)) && mouseY < ((rect3.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.hide();
        img3.hide();
        img4.show();
        img5.hide();
        img6.hide();

      } else if (mouseX > (rect3.left + (rectW / 3)) && mouseX < (rect3.left + (rectW / 3) * 2) && mouseY < ((rect3.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.hide();
        img3.hide();
        img4.hide();
        img5.show();
        img6.hide();

      } else if (mouseX > (rect3.left + (rectW / 3) * 2) && mouseY < ((rect3.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.hide();
        img3.hide();
        img4.hide();
        img5.hide();
        img6.show();

      }
    } else {
    fill(250, 209, 191);
      noStroke();
      rect(rect3.left, rect3.top + top, (rect3.right - rect3.left), (rect3.bottom - rect3.top));
      img1.hide();
      img2.hide();
      img3.hide();
      img4.hide();
      img5.hide();
      img6.hide();
    }


    div4 = document.getElementById('box4');
    rect4 = div4.getBoundingClientRect();
    rectW = rect4.right - rect4.left;
    rectH = rect4.bottom - rect4.top;

    //image variables
    img1 = $('#box4').find('.img1');
    img2 = $('#box4').find('.img2');
    img3 = $('#box4').find('.img3');
    img4 = $('#box4').find('.img4');
    img5 = $('#box4').find('.img5');
    img6 = $('#box4').find('.img6');

    if (mouseY > (rect4.top + top) && mouseY < (rect4.bottom + top) && mouseX < rect4.right && mouseX > rect4.left) {

      if (mouseX < (rect4.left + (rectW / 3)) && mouseY > ((rect4.bottom + top) - (rectH / 2))) {

        img1.show();
        img2.hide();
        img3.hide();
        img4.hide();
        img5.hide();
        img6.hide();
      } else if (mouseX > (rect4.left + (rectW / 3)) && mouseX < (rect4.left + (rectW / 3) * 2) && mouseY > ((rect4.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.show();
        img3.hide();
        img4.hide();
        img5.hide();
        img6.hide();

      } else if (mouseX > (rect4.left + (rectW / 3) * 2) && mouseY > ((rect4.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.hide();
        img3.show();
        img4.hide();
        img5.hide();
        img6.hide();

      } else if (mouseX < (rect4.left + (rectW / 3)) && mouseY < ((rect4.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.hide();
        img3.hide();
        img4.show();
        img5.hide();
        img6.hide();

      } else if (mouseX > (rect4.left + (rectW / 3)) && mouseX < (rect4.left + (rectW / 3) * 2) && mouseY < ((rect4.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.hide();
        img3.hide();
        img4.hide();
        img5.show();
        img6.hide();

      } else if (mouseX > (rect4.left + (rectW / 3) * 2) && mouseY < ((rect4.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.hide();
        img3.hide();
        img4.hide();
        img5.hide();
        img6.show();

      }
    } else {
    fill(250, 209, 191);
      noStroke();
      rect(rect4.left, rect4.top + top, (rect4.right - rect4.left), (rect4.bottom - rect4.top));
      img1.hide();
      img2.hide();
      img3.hide();
      img4.hide();
      img5.hide();
      img6.hide();
    }

    div5 = document.getElementById('box5');
    rect5 = div5.getBoundingClientRect();
    rectW = rect5.right - rect5.left;
    rectH = rect5.bottom - rect5.top;
    //image variables
    img1 = $('#box5').find('.img1');
    img2 = $('#box5').find('.img2');
    img3 = $('#box5').find('.img3');
    img4 = $('#box5').find('.img4');
    img5 = $('#box5').find('.img5');
    img6 = $('#box5').find('.img6');

    if (mouseY > (rect5.top + top) && mouseY < (rect5.bottom + top) && mouseX < rect5.right && mouseX > rect5.left) {

      if (mouseX < (rect5.left + (rectW / 3)) && mouseY > ((rect5.bottom + top) - (rectH / 2))) {

        img1.show();
        img2.hide();
        img3.hide();
        img4.hide();
        img5.hide();
        img6.hide();
      } else if (mouseX > (rect5.left + (rectW / 3)) && mouseX < (rect5.left + (rectW / 3) * 2) && mouseY > ((rect5.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.show();
        img3.hide();
        img4.hide();
        img5.hide();
        img6.hide();

      } else if (mouseX > (rect5.left + (rectW / 3) * 2) && mouseY > ((rect5.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.hide();
        img3.show();
        img4.hide();
        img5.hide();
        img6.hide();

      } else if (mouseX < (rect5.left + (rectW / 3)) && mouseY < ((rect5.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.hide();
        img3.hide();
        img4.show();
        img5.hide();
        img6.hide();

      } else if (mouseX > (rect5.left + (rectW / 3)) && mouseX < (rect5.left + (rectW / 3) * 2) && mouseY < ((rect5.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.hide();
        img3.hide();
        img4.hide();
        img5.show();
        img6.hide();

      } else if (mouseX > (rect5.left + (rectW / 3) * 2) && mouseY < ((rect5.bottom + top) - (rectH / 2))) {
        img1.hide();
        img2.hide();
        img3.hide();
        img4.hide();
        img5.hide();
        img6.show();

      }
    } else {
      fill(250, 209, 191);
      noStroke();
      rect(rect5.left, rect5.top + top, (rect5.right - rect5.left), (rect5.bottom - rect5.top));
      img1.hide();
      img2.hide();
      img3.hide();
      img4.hide();
      img5.hide();
      img6.hide();
    }


  //-------------------------------------------------------------
  //     NAV ANIMATION (DRAW)
  //-------------------------------------------------------------

  if (windowWidth > 650) {
    linkOffset = 55;
    linkBuffer = top + 80;
    linkMargin = 35;

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
    inkMargin = 30;
    iconMargin = 45;

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

    linkFR.position(linkMargin, linkBuffer + linkOffset * 9.4);

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

  resizeCanvas(windowWidth, canvasH);

  background(248, 251, 252);
  nonLoop = false;


}
