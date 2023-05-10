class Ground{
constructor(x,y,w,h){
var options = {
    isStatic:true
}
this.body = Bodies.rectangle(x,y,w,h,options)
World.add(world,this.body)
this.w = w
this.h = h

}
display(){

var groundPos=this.body.position;
push()
rectMode(CENTER)
strokeWeight(4);
fill(255,255,0)
rect(groundPos.x, groundPos.y,this.w, this.h);
pop()
}



}