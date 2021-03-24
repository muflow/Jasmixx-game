class Game {
  constructor(options) {
  this.ctx = options.ctx;
  this.player = new Player({
    x: options.canvasWidth / 2 - 20,
    y: 500
  });

  this.enemies = enemies;
  this.bombs = bombs;
  
}

_dropBombs(){
  console.log(this.bombs);
  this.bombs.forEach(bomb => bomb._drop());
}

_assignControlstoKeys(){
      document.addEventListener('keydown', (event) => {
        switch (event.code) {
          case 'ArrowRight':
            this.player.moveRight();
            break;
          case 'ArrowLeft':
            this.player.moveLeft();
            break;
        }
        if (event.code === 'Space') {
            this.player.shoot();
          }
      });
    }

_checkCollisions() {
 
  // Tengo la x de this.player.x
  // Tengo la x de this.enemies (forEach = x)
}// Compruebo las colisiones y pongo las consecuencias, puedo tner varios checkCollisions (si los quiro separar por bombas, enemies, laser, o tnr solo uno con todo)

_clean(){
  this.ctx.clearRect(0, 0, 600, 600);//medidas del canvas
}

_update(){
 this._clean();
 this.player._drawPlayer(this.ctx);
 this.player.lasers.forEach(laser => laser._drawLaser(this.ctx));
 this.enemies.forEach(enemy => enemy._drawEnemy(this.ctx));
 this.bombs.forEach(bomb => bomb._drawBomb(this.ctx));
//  console.log(this.bombs);
 //_draw las bombas
 //_checkCollisions()
 window.requestAnimationFrame(this._update.bind(this));
}

start(){
  this._assignControlstoKeys();
  console.log("Game starting", this);
  setTimeout(this._dropBombs(), 1000);
  window.requestAnimationFrame(this._update.bind(this));
}
}
