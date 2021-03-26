class Player {
    constructor(properties) { // poner options como argument
    //this.ctx = options.ctx;
    this.x = properties.x; //canvas.width/2 - this.width/2;
    this.y = properties.y; //canvas.height - this.height - 40;
    this.width = 66; //options.width;
    this.height = 89; //options.height;
    //this.color = '#fecc2b'; //options.color;
    this.lasers = [];
    this.img = new Image();
    this.img.src = 'img/bald-man.png';
    }

    _drawPlayer(ctx) {
      // ctx.fillStyle = this.color;
      // ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }  

    moveRight(){
      this.x = this.x + 20;
      if (this.x + this.width > canvas.width){
            this.x = canvas.width - this.width;
      }
    }

    moveLeft(){
      this.x = this.x - 20;
      if (this.x < 0){
            this.x = 0;
      }
    }

    shoot(){
      const laser = new Laser({x: this.x + 22, y: this.y - 20});
      this.lasers.unshift(laser);
      console.log("I'm shooting");
      console.log(laser);
      
      setInterval(function() {
        laser.y = laser.y - 30;
      }, 50);
    }

}