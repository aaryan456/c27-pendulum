class Bob {
  constructor(x, y, radius) {
    var options = {
        'restitution':2
    }
    this.body = Bodies.circle(x, y, radius, options);
    World.add(world, this.body);
  }
  display(){
      var pos =this.body.position;  

push();
ellipseMode(RADIUS);
fill("silver")
ellipse(pos.x, pos.y,25,25);
pop();
if(keyCode === 32){
this.body.position.x = mouseX;
this.body.position.y = mouseY;
   }
  }
}
