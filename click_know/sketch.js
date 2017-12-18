/*
Title: Net Neutrality: An Interactive Explanation
Imagined, Designed, and Programmed by: Jake Lam
Date: 12/14/17
Description: A multi-page, navigatable website made to
explain net neutrality and its importance
Sources of ideas and inspiration (title, author, URL):
 * The Evolution of Trust, by Nicky Case
 (http://ncase.me/trust/)
 * Slideshows
 *

Includes code from (title, author, URL):
 * p5 Reference Library
 * Ruby
 * the Animate.CSS library (https://daneden.github.io/animate.css/)

 Images:
  *https://commons.wikimedia.org/wiki/File:Comcast_Logo.svg
  *https://commons.wikimedia.org/wiki/File:Verizon_2015_logo_-vector.svg
  *https://commons.wikimedia.org/wiki/File:Netflix_2015_logo.svg
  *http://moziru.com/explore/Youtube%20clipart%20transparent%20background/
  *https://arstechnica.com/tech-policy/2017/03/isps-and-fcc-chair-ajit-pai-celebrate-death-of-online-privacy-rules/

*/

var button;
var title;

var subtitle;

var flag = "heads";

//the function that is referenced to change pages
var textCount = 1;

//the function referenced to change the opacity of text and Images
var textFade = 0;

var buttonSize=0;

//object syntax for title text
var bText = ["click here to begin","why is this important?", "first, some history", "next" ];

var maven;

//the custom font I chose
function preload () {
  maven = loadFont ('MavenPro-Regular.ttf');

}

//loading the images i chose, assigning them to variables
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(237, 242, 230);
  comcast=loadImage("2000px-Comcast_Logo.svg.png");
  verizon=loadImage("2000px-Verizon_2015_logo_-vector.svg.png" );
  netflix=loadImage("2000px-Netflix_2015_logo.svg.png");
  youtube=loadImage("youtube-clipart-transparent-background-15.png");
  ajitpai=loadImage("ajit-pai-getty.jpg");



  }



function draw () {
  createCanvas(windowWidth, windowHeight);
  background(237, 242, 230);

//text and image opacity
  textFade+=3;

//the function that checks if textCount is updated and changes pages accordingly
  if (textCount == 1) {
  page1();
  } else if (textCount==2 ) {
    page2();
  } else if (textCount==3 ) {
    page3();

  } else if (textCount==4) {
    page4();
  } else if (textCount==5) {
    page5();
  } else if (textCount==6) {
    page6();

  } else {console.log(textCount)}


}

//function for creating a Forward button
function makeButton() {
  button = createButton(' ');
    button.style("background-color", color(0,0,0,0));
    button.style("border", "none");
    button.style("padding","22px 70px");
    button.position(800, 700);
    button.mousePressed(next);
    button.mouseOver(quiverButton);
    button.mouseOut(unquiver);

}

//function for creating a back button
function makeBackButton() {
  b2=createP("back");
  b2.position (130,695);
  b2.style('font-family', 'Maven Pro');
  backbutton = createButton(' ');
  backbutton.style("background-color", color(0,0,0,0));
  backbutton.style("border", "none");
  backbutton.style("padding","22px 20px");
  backbutton.position(125, 700);
  backbutton.mousePressed(back);
  backbutton.mouseOver(quiverButton2);
  backbutton.mouseOut(unquiver2);
}

//the command that changes pages by increasing textCount when you press a forward button
function next() {
  if (textCount > 1) {
  b2.remove();
  backbutton.remove();
}
textCount= textCount+1;
console.log("bing");
console.log(textCount);
b1.remove();
button.remove();

flag="heads";
textFade=0
  //noLoop();

}

//the command that goes back pages by decreasing textCount when you press a back button
function back() {
  textCount= textCount-1;
  b1.remove();
  b2.remove();
  button.remove();
  backbutton.remove();
  flag="heads";
  textFade=0
}

//the functions that make the buttons bounce, using animate.css
function quiverButton() {
  b1.class('animated bounce');
}

function quiverButton2() {
  b2.class('animated bounce');
}


function unquiver() {
  b1.removeClass('animated bounce');
}

function unquiver2() {
  b2.removeClass('animated bounce');
}


//the individual page functions
function page1 () {

  textSize(96);
  textAlign(CENTER);
  fill(0,0,0, 0+textFade);
  textFont(maven);

  title = text("N e t   N e u t r a l i t y", windowWidth/2, windowHeight/2);

  textSize(24);
  textAlign(CENTER);
  fill(0,0,0,-100+textFade)
  text("an interactive explanation", windowWidth/2, (windowHeight/2)+50);

  if (flag=="heads") {
  b1=createP(bText[0]);
  b1.position(807,695);
  b1.style('font-family','Maven Pro');
  makeButton();
  flag="tails";
}

}

function page2 () {
  textSize(64);
  textAlign(CENTER);
  fill(0,0,0,0+textFade);
  title = text("What is net neutrality?", windowWidth/2, 100);
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
  b1=createP(bText[1]);
  b1.position(807,695);
  b1.style('font-family','Maven Pro');
  makeButton();
  button.style("padding","22px 85px");

  makeBackButton();

  flag="tails";
}
}


function page3(){
//console.log("bong");
  textSize(64);
  textAlign(CENTER);
  fill(0,0,0,0+textFade);
  title = text("Why is net neutrality significant?", windowWidth/2, 100);
  textSize(28);
  textAlign(CENTER);
textp3= "   In other words, net neutrality is the principle that the internet should be equally accessible by all of its users, and it should not biased towards people who are able to pay more for better access. Defenders of net neutrality today work to stop internet service providers, or ISPs, from blocking or slowing down internet connection to certain users. Examples of prominent ISPs include Comcast, Verizon, and AT&T."
  fill(0,0,0,-50+textFade);
  text(textp3, windowWidth/10,windowHeight/5,8*windowWidth/10,4*windowHeight/5);

  image(comcast,0.75*windowWidth/10,6*windowHeight/10,375,133);
  image(verizon,6*windowWidth/10,2*windowHeight/3,375,84);
  fill(237, 242, 230,450-textFade);
  noStroke();
  rect(0.75*windowWidth/10,6*windowHeight/10,windowWidth,7*windowHeight/10);




if (flag=="heads"){
  b1=createP(bText[2]);
  b1.position(807,695);
  b1.style('font-family','Maven Pro')
  makeButton();
  button.style("padding","22px 70px");
  makeBackButton();
  flag="tails";
}
}

function page4(){
  textSize(64);
  textAlign(CENTER);
  fill(0,0,0,0+textFade);
  title = text("A Brief History of Net Neutrality", windowWidth/2, 100);
  textSize(24);
  textAlign(CENTER);
  fill(0,0,0,-100+textFade);
  textp4= "The concept of net neutrality first rose in 2002, when the Federal Communications Commission (FCC) decided that internet-providing services were a type of 'information service' which the FCC could regulate and control. This decision was the first enforcement of net neutrality; internet providers were now required to provide everyone with the same internet access."
  text(textp4, windowWidth/10,windowHeight/5,8*windowWidth/10,4*windowHeight/5);

  if (flag=="heads") {
  b1=createP(bText[3]);
  b1.position(807,695);
  b1.style('font-family','Maven Pro');
  makeButton();
  button.style("padding","22px 22px");

  makeBackButton();
  flag="tails";
}}

function page5(){
  textSize(64);
  textAlign(CENTER);
  fill(0,0,0);
  title = text("A Brief History of Net Neutrality", windowWidth/2, 100);
  textSize(24);
  textAlign(CENTER);
  fill(0,0,0,-10+textFade);
  textp5= "Since the early 2000s, broadband providers have clashed in court with companies that provide content which requires good internet, such as Netflix and Youtube. Broadband companies have argued that because they are providing internet, and are using their own equipment to do so, they should be able to control their own prices. If net neutrality is not enforced, ISPs would have the ability to slow the internet speeds of anyone who does not pay a premium."
  text(textp5, windowWidth/10,windowHeight/5,8*windowWidth/10,4*windowHeight/5);
  image(netflix,0.75*windowWidth/10,6*windowHeight/10,375,101.5);
  image(youtube,6*windowWidth/10,1*windowHeight/2,375,281.25);
  fill(237, 242, 230,450-textFade);
  noStroke();
rect(0,5*windowHeight/10,windowWidth,7*windowHeight/10);


  if (flag=="heads") {
  b1=createP("next");
  b1.position(807,695);
  b1.style('font-family','Maven Pro');
  makeButton();
  button.style("padding","22px 22px");

  makeBackButton();
  flag="tails";
}}

function page6(){
  textSize(64);
  textAlign(CENTER);
  fill(0,0,0,0+textFade);
  title = text("Net Neutrality Today", windowWidth/2, 100);
  textSize(24);
  textAlign(CENTER);
  fill(0,0,0,-50+textFade);
    textp5= "In January 2017, President Trump designated Ajit Pai as the new chairman of the FCC. Unlike chairmen before him, Ajit Pai does not support net neutrality and aims to repeal the regulations set in previous years to protect this. His beliefs reflect the views of big ISP companies. For example, Pai argues that net neutrality is too severe and can stifle investment in infrastructure, a similar argument to big telecommunications companies. With Trump\'s new FCC, led by Pai, and the recent decision to repeal net neutrality regulations, the future of the free Internet is uncertain... "
  text(textp5, windowWidth/10,windowHeight/5,8*windowWidth/10,4*windowHeight/5);

  image(ajitpai,3*windowWidth/10,22.5*windowHeight/40,400,249.8);
  fill(237, 242, 230,450-textFade);
  noStroke();
  rect(0.75*windowWidth/10,11*windowHeight/20,windowWidth,7*windowHeight/10);

  if (flag=="heads") {
  

  makeBackButton();
  flag="tails";
}}
