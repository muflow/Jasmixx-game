class Bomb {
    constructor(options) { // poner options como argument
    //this.ctx = options.ctx;
        this.x = options.x; //canvas.width/2 - this.width/2;
        this.y = options.y; //canvas.height - this.height - 40;
        this.radius = 10;
        this.color = 'red'; //options.color;
        this.lasers = [];
    }

    _drawBomb(ctx) {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    _drop(){
        // Tendría que bajar (sumar a la Y) poco a poco
        // setInterval
        this.y = this.y + 60;
        // Cuando this.y > 600 => clearInterval();
    }
}