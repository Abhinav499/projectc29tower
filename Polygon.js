class Polygon {
  constructor(x,y){
    var options = {
      isStatic : false,
      'density': 10,
      'friction': 1
    }
    this.body = Bodies.circle(x,y,70,options);
    this.radius = 70;

    this.image = loadImage("polygon.png");

    World.add(world, this.body);
    Matter .Body.setDensity(this.body,5);
  }

  display() {
  var pos = this.body.position;
  push ();
  imageMode(RADIUS);
  image(this.image,pos.x,pos.y,this.radius,this.radius);
    pop ();
  }
}
