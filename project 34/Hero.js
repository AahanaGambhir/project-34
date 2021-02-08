class Hero {
    constructor(x,y,r){
        var options = {
           isStatic:true, 
           restitution:0,
           friction:1
        }
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("images/Superhero-01.png")
        World.add(world, this.body)
    }
display(){
    var pos = this.body.position
    translate(pos.x, pos.y)
    imageMode(CENTER)
    image(this.image, 0, 0, 200, 200)
    //ellipse(0,0, this.r, this.r)
}
}