class Bob
{
   constructor(x, y, r){
         var options = {
             friction:0.3,
             restitution:0.2,
             density:1.2
         }
         this.x=x;
		 this.y=y;
         this.r=r
 this.body=Bodies.circle(this.x, this.y, (this.r/2), options)
        World.add(world, this.body);
        }  
    display()
    {
        var pos=this.body.position;		
        push()
	    translate(pos.x, pos.y);
	    ellipseMode(RADIUS);
        fill(255,60,255)
        ellipse(0,0,this.r, this.r);
        pop()
        }
   
}