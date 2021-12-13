var kanjiText = "有給休暇";
var typeText = "yuukyuukyuuka";
var theta=0;
var t=0;
var nowChar=0;
var song;


function preload() {
  song = loadSound('type.mp3');
}

function setup() {
  createCanvas(800, 800);
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
        text(s.charAt(i),x+dx/2-w/2+dx*i,y);
      }else{
        fill(200);
        stroke(10);
        strokeWeight(3);
        text(s.charAt(i),x+dx/2-w/2+dx*i+noise(t,i,0.5)*7,y+noise(t,i,0)*7);
      }
    }else{
      noStroke();
      fill(80);
      text(s.charAt(i),x+dx/2-w/2+dx*i+noise(t,i,0.5)*7+3,y+noise(t,i,0)*7+3);
      noStroke();
      fill(20);
      text(s.charAt(i),x+dx/2-w/2+dx*i+noise(t,i,0.5)*7,y+noise(t,i,0)*7);
    }
  }
}

function draw() {
  t+=0.3;
  background(220);
  textSize(130);
  textEffect(kanjiText,width/2,470,600,0);
  textSize(80);
  textEffect(typeText,width/2,330,600,1);
}

function keyPressed(){  
  if(nowChar==typeText.length){
    if(key=='\n'){
      nowChar=0;
      song.play();
    }
  }else{
    if(key==typeText.charAt(nowChar)){
      nowChar++;
      song.play();
    }
  }
}

