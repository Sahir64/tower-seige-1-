class BOX3{
    constructor(x, y, width, height) {
        var options = {
            'restitution' : 0.8
            'friction' : 0.1,
            'density' : 0.9,
        }
       
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        
        strokeWeight(1);
        stroke("green");
        fill(0,130,114);
        rectMode(CENTER)
    
      } 
    }