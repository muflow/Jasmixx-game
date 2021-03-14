const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// canvas.width = innerWidth;
// canvas.height = innerHeight;

class Player {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  drawPlayer() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    //ctx.fill();
  }
}

// laser 

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

const x = canvas.width / 2;
const y = canvas.height - 50;

const player = new Player(x, y, 30, 30, 'green');
//player.drawPlayer();


const laser = new Laser(canvas.width / 2 + 10, canvas.height - 50, 10, 10, 'red', {x: 0, y: -5});

const lasers = [laser];




function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, 500, 500);
  player.drawPlayer();
  lasers.forEach((laser) => {
    laser.update();
  });
}


 addEventListener('keydown', (event) => {
  if(event.code === 'Space') {
    lasers.push(new Laser(canvas.width / 2 + 10, canvas.height - 50, 10, 10, 'red', {x: 0, y: -10}));
  //   console.log('yay');
    
    // const laser = new Laser(canvas.width / 2 + 10, canvas.height - 50, 10, 10, 'red', {x: 0, y: -5});
    
    // laser.drawLaser();
    // laser.update();
  }
  
});


animate()



