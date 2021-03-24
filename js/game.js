class Game {
  constructor(options) {
  this.ctx = options.ctx;
  this.player = new Player({
    x: options.canvasWidth / 2 - 20,
    y: 500
  });
  this.enemies = enemies;
  this.bombs = bombs;
  this.bombIndex = 0; // Para empezar por la primera bomba
  }

_startDroppingBombs(){
  setTimeout(function() { // El setTimeOut esperará 2 segundos una vez empiezo el juego para lanzar la función de dentro
      let interval = setInterval(function(){ // Guardo el setInterval en una variable para poderlo parar luego
      this.bombs[this.bombIndex]._drop(); // Cada 4 segundos, lanza una bomba 
      this.bombIndex++; // e incrementa el índice para lanzar la siguiente bomba en la siguiente iteración
      console.log(`Bomb n. ${this.bombIndex} down`);
      if (this.bombIndex === this.bombs.length){ // Cuando no haya más bombas, para
        clearInterval(interval); 
      };
      }.bind(this), 4000);
  }.bind(this), 2000);
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
  // collision bombs-player
  for (let i = 0; i<bombs.lenght; i++) {
    if(bombs[i].x === this.player.x && bombs[i].y - this.player.y < 1) {
      console.log('collision bombs-player')
    }
  }

  // collisions laser-enemy
   for (let i = 0; i<enemies.lenght; i++) {
    if(enemies[i].x === this.laser.x && enemies[i].y - this.laser.y < 1) {
      console.log('collision laser-enemies')
    }
  }

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
 this._checkCollisions();
 //this._checkCollisions()
 window.requestAnimationFrame(this._update.bind(this));
}

start(){
  this._assignControlstoKeys();
  this._startDroppingBombs();
  window.requestAnimationFrame(this._update.bind(this));
}
}