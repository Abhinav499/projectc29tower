class Box {
  constructor(x,y,width,height) {
      
    var options = {
        isStatic: false,
        'density':0.8,
        'friction':1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
   this.visibility=255;
    World.add(world, this.body);
  
      
    }
    display(){

        var pos =this.body.position;
        push();
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        pop();
     
     
      /*  World.remove(world,this.body);
        push ();
        this.visibility=this.visibility-5;
        tint (255,this.visibility)
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop ();*/
      }
    
  }