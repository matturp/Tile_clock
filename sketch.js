let roboto;
let pg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  roboto = loadFont('assets/RobotoMono-Bold.ttf');
  textFont(roboto);
  textSize(200);

  pg = createGraphics(width,height);
}

function draw() {
  background(0);
  fill(255);
  var timeH = hour();
  var timeM = minute();
  var timeS = second();

  // GRAPHIC ELEMENT

  pg.push();
  pg.background(0);
  pg.textAlign(CENTER);
  pg.textSize(320);
  pg.fill(255);
  pg.translate(width/2,height/2);
  pg.text(timeH + ':' + timeM + ':' + timeS,-80,0);
  pg.pop();


  // TILES

  var tilesx = map(mouseX,0,width,0,5);
  var tilesy = map(mouseY,0,height,0,5);
  var tileW = width/tilesx;
  var tileH = height/tilesy;


 for (var y = 0; y < tilesy; y++){
  for (var x = 0; x < tilesx; x++) {

 var wave1 = sin(frameCount * 0.01 * (x+y)) * (mouseX*0.1);
 var wave2 = cos(frameCount * 0.01 * (x+y)) * (mouseY*0.1);
 var wave3 = tan(frameCount * 0.01 * (x+y)) * (mouseY*0.1);
  
  // SOURCE
    var sx = x*tileW+wave2;
    var sy = y*tileH+wave1;
    var sw = tileW;
    var sh = tileH;


    // DESTINATION

    var dx = 50+(x*tileW);
    var dy = 50+(y*tileH);
    var dw = tileW + wave3;
    var dh = tileH;

    copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
  }
} 

  // BACKGROUND GRAPHIC

  for (var i = 0; i < width; i = i + 50){
    for (var j = 0; j < height; j = j + 50){

      var wave = sin(radians(frameCount))*10;
      stroke(255);
      //strokeWeight(2);
      line(i,j,i+wave,j+10);
    }
  }

}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
