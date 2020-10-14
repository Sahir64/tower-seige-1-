

class GROUND {
    constructor(x,y,width,height) {
     
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      stroke(0,0,0);
      strokeWeight(4);
      fill("yellow");
     
    }
  };