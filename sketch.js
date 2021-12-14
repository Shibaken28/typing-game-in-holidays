var kanjiText = "有給休暇";
var typeText = "yuukyuukyuuka";
var theta=0;
var t=0;
var nowChar=0;
var song;
var count =0;

/*function preload() {
song = loadSound('type.mp3');
}*/

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
        text(s.charAt(i),x+dx/2-w/2+dx*i+noise(t/10,i,0.5)*7,y+noise(t/10,i,0)*7);
      }
    }else{
      noStroke();
      fill(150);
      text(s.charAt(i),x+dx/2-w/2+dx*i+noise(t/10.0,i,0.5)*7+3,y+noise(t/10.0,i,0)*7+3);
      noStroke();
      fill(20);
      text(s.charAt(i),x+dx/2-w/2+dx*i+noise(t/10.0,i,0.5)*7,y+noise(t/10.0,i,0)*7);
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
  textSize(130);
  textEffect(kanjiText,width/2,460,600,0);
  textSize(80);
  textEffect(typeText,width/2,310,600,1);
  textSize(30);
  fill(200);
  textShadow("Number of 有給休暇:"+count,200,30,3,3);
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


function keyPressed(){  
  if(nowChar==typeText.length){
    if(key=="Enter"){
      nowChar=0;
      count++;
      //song.play();
    }
  }else{
    if(key==typeText.charAt(nowChar)){
      nowChar++;
      //song.play();
    }
  }
}

