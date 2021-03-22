class Enemy {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.width = 10;
    this.height = 10;
    this.color = "blue";
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