/* function tiles(){

    // GRAPHIC ELEMENT

    pg.beginDraw();
    pg.noStroke();
    pg.background(0);
    pg.fill(255);
    
    pg.pushMatrix();
    pg.translate(width/2,height/2);  
    pg.textMode(CENTER);
    pg.textAlign(CENTER);
    pg.textSize(600);
    pg.text("M",0,0);
    pg.popMatrix();

    pg.endDraw();

    // TILES

    var tilesx = map(mouseX,0,width,0,50)+2;
    var tilesy = map(mouseY,0,height,0,50)+2;
    var tileW = pg.width/tilesx;
    var tileH = pg.height/tilesy;

  
  for (var y = 0; y < tilesy; y++){
    for (var x = 0; x < tilesx; x++) {
  
   var wave1 = sin(frameCount * 0.01 * (x+y)) * (mouseX*0.1);
   var wave2 = cos(frameCount * 0.01 * (x+y)) * (mouseY*0.1);
   var wave3 = tan(frameCount * 0.01 * (x+y)) * (mouseX*0.1);
    
    // SOURCE
      var sx = x*tileW+wave2;
      var sy = y*tileH+wave3;
      var sw = tileW;
      var sh = tileH;


      // DESTINATION

      var dx = 50+(x*tileW);
      var dx2 = 50+(x*tileW)+wave1;
      var dy = 50+(y*tileH);
      var dy2 = 50+(y*tileH)+wave2;
      var dw = tileW;
      var dh = tileH;

      
      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
    }
}
} */