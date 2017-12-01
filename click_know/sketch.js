var button;
var title;

var subtitle;

var flag = "heads";

var textCount = 1;
var textFade = 0;
var buttonSize=0;

var heading = ["n e t   n e u t r a l i t y", "What is net neutrality?", "Why is net neutrality significant?"];

var maven;

function preload () {
  maven = loadFont ('MavenPro-Regular.ttf');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(237, 242, 230);

  b1=createP("click to begin");
  b1.position(807,595);
  b1.style('font-family','Maven Pro')
  var col= color(200);
  makeButton();

  }



function draw () {
  createCanvas(windowWidth, windowHeight);
  background(237, 242, 230);
  textFade+=3;
  if (textCount == 1) {
  page1();
} else if (textCount==2 ) {
    page2();
    //console.log("ting");
    //flag="tails";
  } else if (textCount==3 ) {
    page3();
  } else if (textCount==4) {
    page4();

  } else {console.log(textCount)}


}

function makeButton() {
  button = createButton(' ');
    button.style("background-color", color(0,0,0,0));
    button.style("border", "none");
    button.style("padding","22px 52px");
    button.position(800, 600);
    button.mousePressed(next);
    button.mouseOver(quiverButton);
    button.mouseOut(unquiver);

}


function next() {

textCount= textCount+1;
console.log("bing");
console.log(textCount);
b1.remove();
button.remove();
flag="heads";
textFade=0
  //noLoop();


}

function quiverButton() {
  b1.class('animated bounce');

}


function unquiver() {
  b1.removeClass('animated bounce')
}



function page1 () {
//the p5 text vesion of my title, which works, but I can't use animate.css on it
  //background(255);
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
  //console.log("bang");
  textSize(64);
  textAlign(CENTER);
  fill(0,0,0,0+textFade);
  title = text(heading[1], windowWidth/2, 100);
  fill(0,0,0,-50+textFade);
  textSize(24);
  textAlign(CENTER);
  fill(0,0,0, -100+textFade);
  text("net neutrality:",windowWidth/2,250);

  fill(0,0,0, -250+textFade);
  text("the idea, principle, or requirement that Internet service providers should or must", windowWidth/2, 300);
  fill(0,0,0, -375+textFade);
  text("treat all Internet data as the same regardless of its kind, source, or destination",windowWidth/2,340);
  fill(0,0,0, -500+textFade);
  text("~ Merriam-Webster Dictionary",800,425);


  if (flag=="heads") {
  b1=createP("why is this important?");
  b1.position(807,595);
  b1.style('font-family','Maven Pro')
  makeButton();
  button.style("padding","22px 85px");
  //console.log("button");
  flag="tails";
}
}


function page3(){
console.log("bong");
  textSize(64);
  textAlign(CENTER);
  fill(0,0,0,0+textFade);
  title = text(heading[2], windowWidth/2, 100);
  textSize(28);
  textAlign(CENTER);
textp3= "   In other words, net neutrality is the principle that the internet should be equally accessible by all of its users, and it should not biased towards people who are able to pay more for better access. Defenders of net neutrality today work to stop internet service providers, or ISPs, from blocking or slowing down internet connection to certain users."
  fill(0,0,0,-150+textFade);
  text(textp3, windowWidth/10,windowHeight/5,8*windowWidth/10,4*windowHeight/5);

if (flag=="heads"){
  b1=createP("first, some history");
  b1.position(807,595);
  b1.style('font-family','Maven Pro')
  makeButton();
  button.style("padding","22px 70px");
  flag="tails";
}
}

function page4(){
  textSize(64);
  textAlign(CENTER);
  fill(0,0,0,-100+textFade);
  title = text("history", windowWidth/2, 100);
  textSize(24);
  textAlign(CENTER);
  fill(0,0,0,-150+textFade);
  text("ayy", windowWidth/2, 150);
}
