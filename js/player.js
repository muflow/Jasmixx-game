class Player {
    constructor(properties) { // poner options como argument
    //this.ctx = options.ctx;
    this.x = properties.x; //canvas.width/2 - this.width/2;
    this.y = properties.y; //canvas.height - this.height - 40;
    this.width = 40; //options.width;
    this.height = 40; //options.height;
    this.color = '#fecc2b'; //options.color;
    this.lasers = [];
    }

    _drawPlayer(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }  

    moveRight(){
      this.x = this.x + 10;
    }

    moveLeft(){
      this.x = this.x - 10;
    }

    shoot(){
      const laser = new Laser({x: this.x + 15, y: this.y - 10});
      this.lasers.unshift(laser);
      console.log("I'm shooting");
      console.log(laser);
      setInterval(function() {
        laser.y = laser.y - 30;
      }, 50);
    }

}