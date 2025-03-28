// Create the game board and an empty array

const gameBoard = {

    // Create empty array that represents a 3x3 grid with empty strings for each space
    board: ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
};

// Factory function - Encapsulates the game logic into a single object
const mainFactory = () => {

    // Updates the board, after every move
    const updateBoard = () => {
        console.log(`${gameBoard.board[0]} | ${gameBoard.board[1]} | ${gameBoard.board[2]}`);
        console.log(`${gameBoard.board[3]} | ${gameBoard.board[4]} | ${gameBoard.board[5]}`);
        console.log(`${gameBoard.board[6]} | ${gameBoard.board[7]} | ${gameBoard.board[8]}`);
    }
    // Handles player turn
    const playerTurn = (player) => {
        console.log(`It is the ${player}'s turn`);
        let position = prompt("Choose a number from 1 to 9:");
        position -= 1;
        while (position < 0 || position > 8 || gameBoard.board[position] !== "-") {
            position = prompt("Please select a valid number from 1 to 9!");
            position -= 1;
        }
        gameBoard.board[position] = player;
        updateBoard();
    }
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
        else if (!gameBoard.board.includes('-')) {
            return 'It is a tie!';
        } else {
            return 'Continue to play!';
        }
    } 
    // Return all the functions as an object
    return { updateBoard, playerTurn, isGameOver };
};


// Plays the game - game logic
const playGame = () => {
    updateBoard();
    let currentPlayer = "X";
    gameOver = false;
    while(!gameOver) {
        playerTurn(currentPlayer);
        let gameResult = isGameOver();
        if(gameResult === 'You won!') {
            console.log(`${currentPlayer} wins!`);
            gameOver = true;
        } else if (gameResult === 'It is a tie!') {
            console.log(`${currentPlayer} wins!`);
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

// Test the function
playGame();