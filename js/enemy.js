class Enemy {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.width = 40;
    this.height = 40;
    this.color = "white";
  }

  _drawEnemy(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  _drop(){
    // setInterval(function(){
    // this.y = this.y  + 10;
    //}, 300)
    // 
  }

}