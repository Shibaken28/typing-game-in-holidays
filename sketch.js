var kanjiText = "有給休暇";
var typeText = "yuukyuukyuuka";
var theta=0;
var t=0;
var nowChar=0;
var song;
var count =0;
var highScore=99999;
var start=0;
var playing=0;
var time=99999;

/*function preload() {
song = loadSound('type.mp3');
}*/

function setup() {
  start=millis();
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textFont("Sawarabi Mincho");
}

function textEffect(s,x,y,w,op){
  var dx=w/s.length;
  for(var i=0;i<s.length;i++){
    if(op==1){
      if(i<nowChar){
        fill(30);
        stroke(10);
        strokeWeight(3);
        text(s.charAt(i),x+dx/2-w/2+dx*i+noise(t/10,i,0.5)*15,y+noise(t/10,i,0)*15);
      }else{
        fill(200);
        stroke(10);
        strokeWeight(3);
        text(s.charAt(i),x+dx/2-w/2+dx*i+noise(t/10,i,0.5)*15,y+noise(t/10,i,0)*15);
      }
    }else{
      noStroke();
      fill(150);
      text(s.charAt(i),x+dx/2-w/2+dx*i+noise(t/10.0,i,0.5)*15+3,y+noise(t/10.0,i,0)*15+3);
      noStroke();
      fill(20);
      text(s.charAt(i),x+dx/2-w/2+dx*i+noise(t/10.0,i,0.5)*15,y+noise(t/10.0,i,0)*15);
    }
  }
}

function textShadow(s,x,y,dx,dy){
  noStroke();
  fill(200);
  text(s,x+dx,y+dy);
  fill(90);
  text(s,x,y);
}

function draw() {
  t+=1;
  background(220);
  drawBack();
  if(playing==1){
    play();
  }else{
    menu();
  }
}

function drawBack(){
  stroke(10);
  strokeWeight(2);
  for(var theta=0-(t%20)/100;theta<PI/2;theta+=0.2){
    var y=height-sin(theta)*height/3;
    line(0,y,width,y);
  }
  line(0,height/3*2,width,height/3*2);
  for(var x=-width*3;x<width*3;x+=133){
    line(width/2+(x-width/2)*0.3,height/3*2,x,height);
  }
  for(var theta=0-(t%20)/100;theta<PI/2;theta+=0.2){
    var y=sin(theta)*height/3;
    line(0,y,width,y);
  }
  line(0,height/3,width,height/3);
  for(var x=-width*3;x<width*3;x+=133){
    line(width/2+(x-width/2)*0.3,height/3,x,0);
  }
}

function menu(){
  start=millis();
  textSize(100);
  textAlign(CENTER, CENTER);
  textShadow("Last Score :  "+floorU(time/10000,100)+" sec/有給休暇",width/2,height/2-100,3,3);
  textShadow("Best Score :  "+floorU(highScore/10000,100)+" sec/有給休暇",width/2,height/2+100,3,3);
}


function floorU(a,b){
  return Math.floor(a*b)/b;
}

function play(){
  textSize(300);
  textAlign(CENTER, CENTER);
  textEffect(kanjiText,width/2,height/2+110,1200,0);
  textSize(120);
  textEffect(typeText,width/2,height/2-100,1200,1);
  textSize(100);
  fill(100);
  textAlign(LEFT, LEFT);
  textShadow("Number of 有給休暇:"+count,20,height/3+130,3,3);
}


function keyPressed(){  
  if(playing==0){
    if(key=="Enter"){
      nowChar=0;
      count=0;
      playing=1;
    }
    return;
  }
  if(key=="Escape"){
    playing=0;
  }
  if(nowChar==typeText.length){
    if(key=="Enter"){
      nowChar=0;
      count++;
      if(count>=10){
        time=millis()-start;
        if(highScore>time)highScore=time;
        playing=0;
      }
      song.play();
    }
  }else{
    if(key==typeText.charAt(nowChar)){
      nowChar++;
      song.play();
    }
  }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
