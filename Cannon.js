class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;

    this.image = loadImage("assets/cannon_base.png")
    this.image2 = loadImage("assets/CANON.png")
  }

  display() {
   
    
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.image2, 0, 0, 70, 50);
    pop();

    image(this.image, this.x, this.y, this.width, this.height);
    

  }
}
