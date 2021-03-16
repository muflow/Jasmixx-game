document.addEventListener('DOMContentLoaded', () => {
  let game;

  function printGameOver() {
    let gameOver = document.getElementById('gameover');
    let canvas = document.querySelector('#canvas');
    canvas.style = 'display: none';
    gameOver.style = 'display: block';
  }

  function generateSplashScreen() {
    const intro = document.getElementById('intro');
    intro.innerHTML = `
    <div>
      <button id="play" class="mb-2">Play</button>
    </div>
    `;

    const playButton = document.querySelector('#play');
    playButton.addEventListener('click', () => {
      intro.classList.add('hide');
      const game = document.getElementById('game');
      game.classList.remove('hide');
      game.classList.add('show');

      const startButton = game.querySelector('#start');
      startButton.addEventListener('click', () => {
        let canvas = game.querySelector('#canvas');
        const ctx = canvas.getContext('2d');
        const jasmixxGame = new Game(
          {
            ctx: ctx,
            rows: canvas.width / 10,
            columns: canvas.height / 10,
            maxCells: 10,
            player: new Player(200, 200, 30, 30, 'green'),
          },
          printGameOver
        );

        jasmixxGame.start();
      });
    });
  }

  generateSplashScreen();
});
