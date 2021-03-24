# Jasmixx Game

## The Story

The game is a free reinterpretation of one of the most famous video games of all time 'Space Invaders'. Similar structure but different characters. --

Jasmixx is the story of a noob programmer who tries to get his code validated by a merciless test machine.

The player, represented by the JavaScript logo, moves horizontally and shoots lines of code that, hitting Jasmixx's spacecrafts, transforms them into green lights.
The player's task is difficult because the enemy ships drop 'X' bombs which risk annihilating him.

The game ends when the player manages to validate his code (all green lights) or die in intent.

A 'Game Over' screen will appear in case the player is hit by an 'X'.

A draft of the interface at [link](https://photos.app.goo.gl/AvNaZ9jvDxH97VQdA)



## The code

- HTML5
- CSS3
- JS



## MVP

- One game level
- The Player can move left and right
- The player can shoot
- Only one row of enemies appears on the game screen
- Enemies move left and right and down
- Enemies can shoot
- If the player hits the enemy once, the enemy turns green and disappears
- If the enemy hits the player once, the player dies
- Play again button



## Game states

* __Start Screen__

* __Game Screen__

* __Game Over Screen__

## User Stories

- The user can view a splash screen
- The user can view a game screen
- The user can view a game over screen
- The user can move the player left and right with the direction arrows
- The user can shoot with the space bar
- The user can see that the player dies if he is hit once by the enemy
- The user can see that the enemy dies if he is hit once by the player

## Backlog

- Multiple rows of enemies
- multiple lives
- Score
- Music



## The structure

- main.js
- game.js
- player.js
- enemy.js
