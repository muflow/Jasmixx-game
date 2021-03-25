class Bomb {
    constructor(options) { // poner options como argument
    //this.ctx = options.ctx;
        this.x = options.x; //canvas.width/2 - this.width/2;
        this.y = options.y; //canvas.height - this.height - 40;
        this.radius = 10;
        this.color = 'red'; //options.color;
        this.lasers = [];
        this.weight = 4;
    }

    _drawBomb(ctx) {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    _drop(){
      let fallinginterval = setInterval(function(){ // La bomba tiene que caer cada 70 ms
          this.weight = 3;
          this.weight += 0.05;
          this.y += this.weight;
          if (this.y > 650){
            clearInterval(fallinginterval); // Cuando me salgo del canvas, paro
          }
      }.bind(this), 10);    
    }    
}