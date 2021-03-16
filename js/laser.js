const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


class Laser {
  constructor(x, y, width, height, color, velocity) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.velocity = velocity;
  }

  drawLaser() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    //ctx.fill();
  }

  update() {
    this.drawLaser();
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
  }
  
}