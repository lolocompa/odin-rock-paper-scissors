# Rock Paper Scissors Game

This repository contains a simple implementation of the classic game Rock, Paper, Scissors in JavaScript. The game allows a player to play against the computer in a best of 5 format.

## How to Play

- The game is initiated by opening the `nothing.html` file in a web browser.
- The player is prompted to enter their choice (rock, paper, or scissors) via a popup input.
- The computer's choice is randomly generated.
- The game compares the player's choice against the computer's choice to determine the winner of the round.
- The first to win 5 rounds wins the game.

## Implementation Details

### Main Files

- [`nothing.html`](https://github.com/lolocompa/odin-rock-paper-scissors/tree/main/nothing.html): The HTML file that loads the JavaScript game logic.
- [`game.js`](https://github.com/lolocompa/odin-rock-paper-scissors/tree/main/game.js): Contains all the game logic including generating computer's choice, comparing choices, and keeping score.

### Key Functions

- `getRandomInt(min, max)`: Generates a random integer between `min` (inclusive) and `max` (exclusive). [Code](https://github.com/lolocompa/odin-rock-paper-scissors/tree/main/game.js#L1L3)
- `get_computer_choice()`: Randomly selects the computer's choice from "rock", "paper", or "scissor". [Code](https://github.com/lolocompa/odin-rock-paper-scissors/tree/main/game.js#L5L11)
- `get_my_choice()`: Prompts the player to enter their choice and returns it. [Code](https://github.com/lolocompa/odin-rock-paper-scissors/tree/main/game.js#L13L17)
- `play(choice1, choice2)`: Compares the player's choice against the computer's choice and returns the result of the round. [Code](https://github.com/lolocompa/odin-rock-paper-scissors/tree/main/game.js#L21L46)
- `game()`: Orchestrates the game flow, keeping track of scores and determining when the game ends. [Code](https://github.com/lolocompa/odin-rock-paper-scissors/tree/main/game.js#L52L77)

### Scoring

Scores are kept track of using two variables, `score1` for the player and `score2` for the computer. The game ends when either score reaches 5, declaring the corresponding party as the winner.

```javascript
let score1 = 0
let score2 = 0
Game Loop
The game loop is initiated by calling the game() function, which recursively calls itself until a winner is determined. Each round's winner is logged to the console along with the computer's choice.

winner = game()
console.log(winner)
Running the Game
To play the game, simply open the nothing.html file in a web browser. Ensure JavaScript is enabled in your browser settings.

Enjoy the game!
