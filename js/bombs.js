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
      if (this.y > canvas.height) { // repeat the falling bomb every time te bomb exits the canvas
            this.y = 260 - this.radius;
            this.weight = 2;
            this.x = Math.floor((Math.random() * 470) + 50);
      }
        this.weight += 0.05;
        this.y += this.weight;
    }
    // como borrar las bombas que salen del canvas?

    
}