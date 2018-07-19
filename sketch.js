var amlogo;
var resources;
var cnv;
var offsetX = 80;
var offsetY = 20;
var amW, amH;

function preload() {
  amlogo = loadImage('assets/amlogo.png');
}

function setup(){

//------CANVAS CREATION---------------------------------------

//creates a canvas variable that allows positioning inside HTML
cnv = createCanvas(windowWidth, windowHeight);
//alocate the canavs within the <div> element called "canvas"
cnv.position(0,0);
//position the canvas below HTML elements
cnv.style("z-index", "-1");


//------PARAMATERS---------------------------------------


//------LINK CREATION---------------------------------------
resources = createP('RESOURCES');
// resources = createA('#', 'THIS IS A LINK', '_blank');
// resources = createA('resources.html', 'RESOURCES');

}

function draw() {
background(255);


//mobile display mode
if (windowWidth < 500){
background(0);
}
//laptop/desktop display mode
else{
amW = (width/2) - 50;
amH = (height/2) - 70;
image(amlogo, amW, amH);

resources.style("z-index", "-1");
resources.position((amW - offsetX), (amH - offsetY));

var circ = ellipse(100, 100, 50, 50);

}
circ.mouseOver(animate);

}

function animate()
{
  fill(255);
  ellipse(100, 100, 50, 50);
;}

function windowResized() {
  resizeCanvas(windowWidth, (windowHeight));
}
