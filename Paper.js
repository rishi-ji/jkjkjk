class Paper {
    constructor(x, y) {
      var options = {
        isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
      }
      this.image=loadImage("paper.png")
      this.body=Bodies.rectangle(x,y,this.width,this.height,options)
      this.width=70    
      this.height=70    
 
      World.add(world,this.body)
      
    }
    display(){
      push()
      translate()
       imageMode(CENTER);
       
       
       image(this.image,60,550,this.width, this.height);
       pop()
     }
   };
  