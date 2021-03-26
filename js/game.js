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
  this.status = "running";
  this.points = 0;
  this.interval = undefined;
  }

_startDroppingBombs(){
  console.log("I'm running");
  setTimeout(function() { // El setTimeOut esperará 2 segundos una vez empiezo el juego para lanzar la función de dentro
      this.interval = setInterval(function(){ // Guardo el setInterval en una variable para poderlo parar luego
      this.bombs[this.bombIndex]._drop(); // Cada 4 segundos, lanza una bomba 
      this.bombIndex++; // e incrementa el índice para lanzar la siguiente bomba en la siguiente iteración
      console.log(`Bomb n. ${this.bombIndex} down`);
      if (this.bombIndex === this.bombs.length){ // Cuando no haya más bombas, para
        clearInterval(this.interval); 
      };
      }.bind(this), 3000);
  }.bind(this), 1000);
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

// _checkEnemyCollisions() { // Cheeck collision with the laser and then delete that enemy from the array
//     for (let i = 0; i < this.player.lasers.length; i++){
//       for (let e = 0; e < this.enemies.length; e++){
//       if (this.player.lasers[i].x < this.enemies[e].x + this.enemies[e].width  && this.player.lasers[i].x + this.player.lasers[i].width  > this.enemies[e].x &&
// 		    this.player.lasers[i].y < this.enemies[e].y + this.enemies[e].height && this.player.lasers[i].y + this.player.lasers[i].height > this.enemies[e].y) {
//         const index = this.enemies.indexOf(this.enemies[e]);
//         this.enemies.splice(index, 1);
//         this.points = this.points + 1;
//       }
//     }
//   }
// }

_checkEnemyCollisions() { // Cheeck collision with the laser and then delete that enemy from the array
    for (let i = 0; i < this.player.lasers.length; i++){
      for (let e = 0; e < this.enemies.length; e++){
      if (this.player.lasers[i].x < this.enemies[e].x + this.enemies[e].width  && this.player.lasers[i].x + this.player.lasers[i].width  > this.enemies[e].x &&
        this.player.lasers[i].y < this.enemies[e].y + this.enemies[e].height && this.player.lasers[i].y + this.player.lasers[i].height > this.enemies[e].y) {
        const index = this.enemies.indexOf(this.enemies[e]);
        const laserIndex = this.player.lasers.indexOf(this.player.lasers[i]);
        this.enemies.splice(index, 1);
        this.player.lasers.splice(laserIndex, 1);
        this.points = this.points + 1;
        return;
      }
    }
  }
}

_checkBombCollisions(){ // Check bomb collisions with player
  // for (let i = 0; i < this.bombs.length; i++){
  //   if(this.player.x < this.bombs[i].x + this.bombs[i].radius  && this.player.x + this.player.width  > this.bombs[i].x &&
	// 	    this.player.y < this.bombs[i].y + this.bombs[i].radius && this.player.y + this.player.height > this.bombs[i].y){
  //     this._stopGame();
  //   }
  // }
  for (let i = 0; i < this.bombs.length; i++){
    if(this.player.x < this.bombs[i].x + this.bombs[i].width  && this.player.x + this.player.width  > this.bombs[i].x &&
		    this.player.y < this.bombs[i].y + this.bombs[i].width && this.player.y + this.player.height > this.bombs[i].y){
      this._stopGame();
    }
  }
}

_stopGame(){
  this.status = "dead";
  clearInterval(this.interval);
  document.getElementById("game").style = "display: none;";
  const gameOverScreen = document.getElementById("gameover");
  gameOverScreen.style = "display: block;";
  gameOverScreen.innerHTML = `<div>Game over! You scored ${this.points} points!</div>`;
}

_clean(){
  this.ctx.clearRect(0, 0, 600, 600);//medidas del canvas
}

_update(){
 if (this.status === 'running'){
    this._clean();
    this.player._drawPlayer(this.ctx);
    this.player.lasers.forEach(laser => laser._drawLaser(this.ctx));
    this.enemies.forEach(enemy => enemy._drawEnemy(this.ctx));
    this.bombs.forEach(bomb => bomb._drawBomb(this.ctx));
    this._checkEnemyCollisions();
    this._checkBombCollisions();
    window.requestAnimationFrame(this._update.bind(this));
 }
}

start(){
  this._assignControlstoKeys();
  this._startDroppingBombs();
  window.requestAnimationFrame(this._update.bind(this));
}
}
