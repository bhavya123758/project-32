const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time;
var bg = "sunrise1.png";
var minute;
var seconds;
function preload() {
 getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
background(backgroundImg);
    // add condition to check if any background image is there to add


    Engine.update(engine);
    stroke("white")
    strokeWeight(20);
fill("red");    // write code to display time in correct format here
textSize(40)
textFont("Forte");
text("TIME: "+time+":"+ minute+":"+seconds, 100,200)
}

async function getBackgroundImg(){

    // write code to fetch time from API
var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON=await response.json();
var datetime=responseJSON.datetime;
console.log(datetime)
var hour=datetime.slice(11,13);
 minute=datetime.slice(14,16)
 seconds=datetime.slice(17,19)
if(hour>00 && hour<02){
    bg="sunrise1.png"
time=hour
}
if(hour>02 && hour<04){
    bg="sunrise2.png"
    time=hour
}
if(hour>04 && hour<06){
    bg="sunrise3.png"
    time=hour
}
if(hour>06 && hour<08){
    bg="sunrise4.png"
    time=hour
;}
if(hour>08 && hour<10){
    bg="sunrise5.png"
    time=hour
}
if(hour>10 && hour<12){
    bg="sunrise6.png"
    time=hour
}
if(hour>12 && hour<14){
    bg="sunset7.png"
    time=hour
}
if(hour>14 && hour<16){
    bg="sunset8.png"
    time=hour
}
if(hour>16 && hour<18){
    bg="sunset9.png"
    time=hour
}
if(hour>18 && hour<20){
    bg="sunset10.png"
    time=hour
}
if(hour>20 && hour<22){
    bg="sunset11.png"
    time=hour
}
if(hour>22 && hour<00){
    bg="sunset12.png"
    time=hour
} //change the data in JSON format
backgroundImg = loadImage(bg);
    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
