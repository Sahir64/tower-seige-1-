class BOX2{
    constructor(x, y, width, height) {
        var options = {
    
            'restitution' : 0.8,
            'friction' : 0.2,
            'density' : 0.3
        }
       
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        strokeWeight(3);
        stroke("green");
        fill(199,224,224);        
        rectMode(CENTER);
        ;
      }
}