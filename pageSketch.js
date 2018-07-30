var animateR, animateA, animateCO = false;
var fadeR, fadeA, fadeCO = 0;
var offset;
var layerR, layerA, layerCO;

function preload() {

    layerR = loadImage('assets/layerR.png');
    layerA = loadImage('assets/layerA.png');
    layerCO = loadImage('assets/layerCO.png');
    amLogo = loadImage('assets/amlogo.png');
}

function setup() {

  //---SETUP---
  frameRate(60);
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-1");
  canvas.position(0,0);

  //---LINKS---
  // optionally migrate to CSS for all links

  linkR = createA('#', 'RESOURCES');
  linkR.style('text-decoration', 'none');
  linkR.style('color', 'black');
  linkR.style('letter-spacing', '5');
  linkR.style('font-size', '11');

  linkA = createA('#', 'ABOUT');
  linkA.style('text-decoration', 'none');
  linkA.style('color', 'black');
  linkA.style('letter-spacing', '5');
    linkA.style('font-size', '8');

  linkCU = createA('#', 'CONTACT US');
  linkCU.style('text-decoration', 'none');
  linkCU.style('color', 'black');
  linkCU.style('letter-spacing', '5');
    linkCU.style('font-size', '8');

  linkAr = createA('#', 'ARCHIVE');
  linkAr.style('text-decoration', 'none');
  linkAr.style('color', 'black');
  linkAr.style('letter-spacing', '5');
    linkAr.style('font-size', '11');

  linkGI = createA('#', 'GET INVOLVED');
  linkGI.style('text-decoration', 'none');
  linkGI.style('color', 'black');
  linkGI.style('letter-spacing', '5');
    linkGI.style('font-size', '8');

  linkE = createA('#', 'EVENTS');
  linkE.style('text-decoration', 'none');
  linkE.style('color', 'black');
  linkE.style('letter-spacing', '5');
    linkE.style('font-size', '11');

  linkCO = createA('#', 'CALL-OUTS');
  linkCO.style('text-decoration', 'none');
  linkCO.style('color', 'black');
  linkCO.style('letter-spacing', '5');
  linkCO.style('font-size', '11');

  // linkAO = createA('pdf/AM_AntiO.pdf', 'ANTI-OPPRESSION STATEMENT');

  linkEN = createA('index.html', 'EN');
  linkEN.style('font-size', '11');
  linkEN.style('letter-spacing', '5');
  linkFR = createA('indexFR.html', 'FR');
  linkFR.style('font-size', '11');
  linkFR.style('letter-spacing', '5');


//---EVENTS---

  linkR.mouseOver(overLinkR);
  linkR.mouseOut(offLinkR);
  linkA.mouseOver(overLinkA);
  linkA.mouseOut(offLinkA);
  linkCO.mouseOver(overLinkCO);
  linkCO.mouseOut(offLinkCO);


}

//---HOVER---

function overLinkR() {
  animateR = true;
  linkR.style('font-style', 'oblique');
}

function offLinkR() {
  animateR = false;
  fadeR = 0;
  linkR.style('font-style', 'normal');
}

function overLinkA() {
  animateA = true;
}

function offLinkA() {
  animateA = false;
  fadeA = 0;
}

function overLinkCO() {
  animateCO = true;
}

function offLinkCO() {
  animateCO = false;
  fadeCO = 0;
}


//---***DRAW***-------------------------------------

function draw() {

  noStroke();
  background(255, 30);

  //positioning
  offset = windowWidth/5.5;
  linkCO.position(offset*2, 40);
  linkR.position(offset, 40);
  linkA.position(offset*2,  windowHeight - 15);
  linkCU.position(offset*3,  windowHeight - 15);
  linkE.position(offset*3, 40);
  linkGI.position(offset*5, windowHeight - 15);
  linkAr.position((offset*4)-20, 40);
  // linkAO.position(15, 15);
  // fill(0);
  // rect(windowWidth-60, 10, 60, 20);
  linkEN.position(windowWidth-80, 15);
  linkFR.position(windowWidth-50, 15);

//---ANIMATION---

//---R---
  tint(255, fadeR);
  image(layerR, offset, 0, 50, 100);

  var c = color( 255, 0, 255, fadeR);
  fill(c);

  if (animateR == true && fadeR <=255){
    fadeR += 10;
  }
  //---A---
  tint(255, fadeA);
  image(layerA, 70, -100);

  var c = color( 255, 0, 255, fadeA);
  fill(c);

  if (animateA == true && fadeA <=255){
    fadeA += 10;
  }
  //---CO---
  tint(255, fadeCO);
  image(layerCO, offset*2, 0, 50, 100);

  var c = color( 255, 0, 255, fadeCO);
  fill(c);

  if (animateCO == true && fadeCO <=255){
    fadeCO += 10;
  }

  tint(255, 255);
  image(amLogo, 25, 5, 80, 80);

}

function windowResized() {
  resizeCanvas(windowWidth, (windowHeight));

}
