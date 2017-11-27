
var button;
var title;

var subtitle;

var textCount = 1;
var textFade = 0;
var buttonSize=0;

var heading = ["n e t   n e u t r a l i t y", "what is net neutrality?", "filler"];

var maven;

function preload () {
  maven = loadFont ('MavenPro-Regular.ttf');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);

  b1=createP("click to begin");
  b1.position(807,595);
  b1.style('font-family','Maven Pro')
  var col= color(200);
  button = createButton(' ');
    button.style("background-color", color(0,0,0,0));
    button.style("border", "none");
    button.style("padding","22px 52px");
    button.position(800, 600);
    button.mousePressed(next);
    button.mouseOver(quiverButton)


  }



function draw () {
  createCanvas(windowWidth, windowHeight);
  background(200);
  if (textCount == 1) {
  page1();
  textFade+=3;
  } else if (textCount==2) {
    page2();
  } else if (textCount==3) {
    page3();
  }

}



function next() {
  textCount= textCount+1

}

function quiverButton() {
  b1.class('animated bounce');

}

function page1 () {
//the p5 text vesion of my title, which works, but I can't use animate.css on it
  background(200);
  textSize(96);
  textAlign(CENTER);
  fill(0,0,0, 0+textFade);
  textFont(maven);

  title = text(heading[0], windowWidth/2, windowHeight/2);

  textSize(24);
  textAlign(CENTER);
  fill(0,0,0,-100+textFade)
  text("an interactive explanation", windowWidth/2, (windowHeight/2)+50);

// the dom element version of my title
// title = createP(heading[0]);
// title.position(windowWidth/2,windowHeight/2);
// title.style("font-size", "96px");
// //title.style("text-align","center");
// title.style('font-family','Maven Pro')

}

function page2 () {
  textSize(64);
  textAlign(CENTER);
  fill(0);
  title = text(heading[1], 500, 100);
  textSize(24);
  textAlign(CENTER);
  pop();
  text("net neutrality:",100,250);
  push();
  text("the idea, principle, or requirement that Internet service providers should or must", 500, 300);
  text("treat all Internet data as the same regardless of its kind, source, or destination",500,340)
}

function page3(){
  textSize(64);
  textAlign(CENTER);
  fill(0);
  title = text(heading[2], 500, 100);
  textSize(24);
  textAlign(CENTER);
  text("jek", 500, 150);
}

function page4(){
  textSize(64);
  textAlign(CENTER);
  title = text("yuh", 500, 100);
  textSize(24);
  textAlign(CENTER);
  text("hdrtyj", 500, 150);
}
