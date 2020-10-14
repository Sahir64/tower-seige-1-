class BOX1{
    constructor(x, y, width, height) {
        var options = {

            'restitution' : 0.8,
            'friction' : 1.0,
            'density' : 1.0
        }
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
       
        strokeWeight(4);
        stroke("BLACK");
        fill(254,188,200);        
        rectMode(CENTER);
    
    
      }
} 