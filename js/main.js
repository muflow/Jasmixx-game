document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM is loaded");

  // 1.Cargo los elementos que voy a necesitar
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');

  const splash = document.getElementById('splash');
  const gameover = document.getElementById('gameover');
  const game = document.getElementById('game');
  let jasmixxGame;

  // 2. Función de inicio de juego

  function startGame(){
    splash.classList.remove("show");
    splash.classList.add("hide");
    gameover.classList.remove("show");
    gameover.classList.add("hide");
    game.classList.remove("hide");
    game.classList.add("show");

    jasmixxGame = new Game({
      ctx: ctx,
      canvasWidth: canvas.width
    });
    jasmixxGame.start();
  }

  const playButton = document.querySelector('#play');
  playButton.addEventListener("click", startGame); 

  const playAgainBtn = document.querySelector('#playagain');
  playAgainBtn.addEventListener("click", startGame); 
});





// document.addEventListener('DOMContentLoaded', () => {
//   console.log("DOM is loaded");

//   // 1.Cargo los elementos que voy a necesitar
//   const canvas = document.querySelector('#canvas');
//   const ctx = canvas.getContext('2d');
//   const jasmixxGame = new Game({
//     ctx: ctx,
//     canvasWidth: canvas.width
//   });
//   const game = document.getElementById('game');
//   const startButton = document.querySelector('#start');
//   const playButton = document.querySelector('#play');
//   const intro = document.getElementById('intro');


//   playButton.addEventListener("click", jasmixxGame.start()); 


  // 2.Función para pintar game over en el DOM
  // function printGameOver() {
  //   let gameOver = document.getElementById('gameover');
  //   canvas.style = 'display: none';
  //   gameOver.style = 'display: block';
  // }

  // // 3. Función para generar Splash screen
  // function generateSplashScreen() {
  //   intro.innerHTML = `
  //   <div>
  //     <button id="play" class="mb-2">Play</button>
  //   </div>
  //   `;
  // };
  // generateSplashScreen();

  // // 4. Asigno a cada botón su función
  // startButton.addEventListener('click', function(){
  //             // 4.1. Muéstrame la pantalla de juego
  //     intro.classList.add('hide');
  //     game.classList.remove('hide');
  //     game.classList.add('show');
  // });
  


// });   

