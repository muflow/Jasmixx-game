class Laser {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.width = 20;
    this.height = 20;
    //this.color = "blue";
    this.img = new Image();
    this.img.src = '../img/javascript-js-seeklogo.png';
  }

  _drawLaser(ctx){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    // ctx.fillStyle = this.color;
    // ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}
