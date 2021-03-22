class Game {
  constructor(properties) {
  this.ctx = properties.ctx;
  this.player = new Player({
    x: properties.canvasWidth / 2 - 20,
    y: 500,
  });
  this.enemies = [];
  this.bombs = [];
}

_generateEnemies(){
  // loop de tantos enemigos como quieras
  const enemy1 = new Enemy({ x: 50, y: 50});
  const enemy2 = new Enemy({ x: 100, y:100});
  this.enemies = [enemy1, enemy2];
  this.enemies.forEach(enemy => enemy._drop());
}

_generateBombs(){
  // Genero una nueva bomba
  // alomejor puedo hacer una x random para que aparezcan en sitios diferentes cada ver que genero uno nuevo
  // this.bomb = la bomba que genero;
  // cuando la genero, la pinto (this.bomb._dropBomb())
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
 //_draw las bombas
 //_checkCollisions()
 window.requestAnimationFrame(this._update.bind(this));
}

start(){
  this._assignControlstoKeys();
  console.log("Game starting", this);
  window.requestAnimationFrame(this._update.bind(this));
}
}
