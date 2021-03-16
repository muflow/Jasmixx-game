// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

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

// class Laser {
//   constructor(x, y, width, height, color, velocity) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.color = color;
//     this.velocity = velocity;
//   }

//   drawLaser() {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//     //ctx.fill();
//   }

//   update() {
//     this.drawLaser();
//     this.x = this.x + this.velocity.x;
//     this.y = this.y + this.velocity.y;
//   }
  
// }


// ENEMIES

// class Enemies {
//   constructor(x, y, width, height, color, velocity) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.color = color;
//     this.velocity = velocity;
//   }
//   drawEnemies() {
//     ctx.beginPath();
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//     //ctx.fill();
//   }

//   update() {
//     this.drawEnemies();
//     this.x = this.x + this.velocity.x;
//     this.y = this.y + this.velocity.y;
//   }
// }


// BOMBS

class Bombs {
  constructor(x, y, width, height, color, velocity) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.velocity = velocity;
  }

  drawBomb() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    //ctx.fill();
  }

  update() {
    this.drawBomb();
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
  }
  
}


const x = canvas.width / 2;
const y = canvas.height - 50;

const player = new Player(x, y, 30, 30, 'green');
const lasers = [];
const enemiesArray = [];


function squareEnemies() {
    setInterval(() => {
      const x = 50;
      const y = 50;
      const width = 30;
      const height = 30;
      const color = 'purple';
      const velocity = {x: 1, y: 0};
      
      enemiesArray.push(new Enemies(x, y, width, height, color, velocity));
      console.log(enemiesArray);
    }, 1000);
}

let animationId; // remeber Boms!  
function animate() {
  animationId = requestAnimationFrame(animate);
  ctx.clearRect(0, 0, 500, 500);
  player.drawPlayer();
  lasers.forEach((laser, index) => {
    laser.update();
    // eliminar los laser que no golpean a los enemies
    if (laser.y - laser.height / 2 < 0) {
      setTimeout(() => {
        lasers.splice(index, 1);
      }, 0);
    }
  });

  enemiesArray.forEach((enemies, index) => {
    enemies.update();

    // aquí hay que añadir la collision entre bombs y player (game over)

    // calcular distancia para la collision laser enemies:
    lasers.forEach((laser, laserIndex) => {
      const dist = Math.hypot(laser.x - enemies.x, laser.y - enemies.y);
      // calcular collision. Añadido segundo parametro 'index' y 'laserIndex' a los forEach
      if(dist - enemies.height / 2 - laser.height / 2 < 1) {
        // evitar el efecto 'flash' al golpeat los enemies con el laser
        setTimeout(() => {
        enemiesArray.splice(index, 1);
        lasers.splice(laserIndex, 1);
        console.log('bumm!');
        }, 0);
      }
    });
  });
}


 addEventListener('keydown', (event) => {
  if(event.code === 'Space') {
    lasers.push(new Laser(canvas.width / 2 + 10, canvas.height - 50, 10, 10, 'red', {x: 0, y: -10}));
  }
  console.log(lasers);
  
});

// dropBombs() { FALTA

// };


animate();
squareEnemies();



