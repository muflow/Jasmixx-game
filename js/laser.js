class Laser {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.width = 10;
    this.height = 10;
    this.color = "blue";
  }

  _drawLaser(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}