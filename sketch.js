var drawing=[];
var currentPath=[];
function setup() {
  canvas = createCanvas(1000, 600);
  canvas.mousePressed(start);
 
  
}

function draw() {
  background("white");

  if(mouseIsPressed){
    var point = {
      x:mouseX,
      y:mouseY
    }
    currentPath.push(point);
  }
  
  strokeWeight(4);
  noFill();
  stroke("blue");
 
  for(var i=0; i<drawing.length;i++){
    var path=drawing[i];
    beginShape();
    for(var j=0;j<path.length;j++){
      vertex(path[j].x,path[j].y);
    }
    endShape();
  }

}
function start(){
  currentPath=[];
  drawing.push(currentPath);
}
