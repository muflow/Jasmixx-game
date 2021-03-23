class Enemy {
  constructor(options) {
    this.x = options.x;
    this.y = options.y;
    this.width = 40;
    this.height = 40;
    this.color = "white";
  }

  _drawEnemy(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  _drop(){
    // setInterval(function(){
    // this.y = this.y  + 10;
    //}, 300)
    // 
  }

}



// class Enemy intento 2
// subido el 23/03 a las 19:21
class Enemy {
  constructor() {
    this.RowCount = 4;
    this.ColumnCount = 10;
    this.width = 40;
    this.height = 40;
    this.Padding = 10;
    this.MarginTop = 30;
    this.MarginLeft = 30;
    this.enemies = [];
  }
  _drawEnemies() {
    for(c=0; c<this.ColumnCoun; c++) {
            for(r=0; r<this.RowCount; r++) {
                let enemyX = (c*(this.width+this.Padding))+this.MarginLeft;
                let enemyY = (r*(this.height+this.Padding))+this.MarginTop;
                this.enemies[c][r].x = enemyX;
                this.enemies[c][r].y = enemyY;
                ctx.beginPath();
                ctx.rect(enemyX, enemyY, this.width, this.height);
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
                ctx.closePath();
            }
    }
  }
}