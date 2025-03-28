const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");

// Factory function - Encapsulates the game logic into a single object
const mainFactory = () => {

    // Updates the board, after every move
    const updateBoard = () => {
        // Loop over all cells and update their text/content
        cells.forEach((cell, index) => {
            // Update the text content of the cell based on the board state
            cell.textContent = gameBoard.board[index];
        });
    };
    // Applies the game logic and check every cell for win combinations, and tie
    const isGameOver = () => {

        // Check if there is a win condition in the row position from 0-2, 3-5, 6-8
        if ((gameBoard.board[0] === gameBoard.board[1] && gameBoard.board[1] === gameBoard.board[2] && gameBoard.board[0] !== "-") || 
            (gameBoard.board[3] === gameBoard.board[4] && gameBoard.board[4] === gameBoard.board[5] && gameBoard.board[3] !== "-") ||
            (gameBoard.board[6] === gameBoard.board[7] && gameBoard.board[7] === gameBoard.board[8] && gameBoard.board[6] !== "-") ||
            // Check if there is a win condition in the column position from 0-6, 1-7, 2-8
            (gameBoard.board[0] === gameBoard.board[3] && gameBoard.board[3] === gameBoard.board[6] && gameBoard.board[0] !== "-") ||
            (gameBoard.board[1] === gameBoard.board[4] && gameBoard.board[4] === gameBoard.board[7] && gameBoard.board[1] !== "-") ||
            (gameBoard.board[2] === gameBoard.board[5] && gameBoard.board[5] === gameBoard.board[8] && gameBoard.board[2] !== "-") ||
            // Check if there is a win condition in the diagonal position from 0-8, 2-6
            (gameBoard.board[0] === gameBoard.board[4] && gameBoard.board[4] === gameBoard.board[8] && gameBoard.board[0] !== "-") ||
            (gameBoard.board[2] === gameBoard.board[4] && gameBoard.board[4] === gameBoard.board[6] && gameBoard.board[2] !== "-")) {
            return 'You won!';
        } 
        else if (!gameBoard.board.includes("-")) {
            return 'It is a tie!';
        } else {
            return 'Continue to play!';
        }
    }
    // Toggles between "X" and "O"
    const switchPlayer = () => {
        player.currentPlayer = player.currentPlayer === "X" ? "O" : "X";
    }
    // IIFE function, serves the purpose to end the game when its truthy, currently set to false so the game can proceed
    const endGame = (function() {
        return {
            gameOver : false
        }
    })();
    // Return all the functions as an object
    return { updateBoard, isGameOver, switchPlayer, endGame };
};

// Store the factory function in a variable for easies access to its methods/functions
const game = mainFactory();

// let gameOver = false;

// Plays the game - game logic
const playGame = () => {
    game.updateBoard();
    cells.forEach((cell, index) => {
        cell.addEventListener('click', function handleClick() {
            if (gameBoard.board[index] === "-" && !game.endGame.gameOver) {
                gameBoard.board[index] = player.currentPlayer;
                game.updateBoard();

                let gameResult = game.isGameOver();
                if (gameResult === 'You won!') {
                    console.log(`${player.currentPlayer} wins!`);
                    statusText.textContent = `${player.currentPlayer} wins!`;
                    game.endGame.gameOver = true;
                } else if (gameResult === 'It is a tie!') {
                    console.log('It is a tie!');
                    statusText.textContent = `It is a tie!`;
                    game.endGame.gameOver= true;
                } else {
                    game.switchPlayer();
                }
                // Disable further clicks once the game is over
                if (game.endGame.gameOver) {
                    cells.forEach(cell => {
                        cell.removeEventListener('click', handleClick);
                    });
                }    
            }
        });
    });
};


// Test the function
playGame();