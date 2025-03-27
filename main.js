// import Player from './player.js';

// Create the game board and an empty array

const gameBoard = {

    // Create empty array that represents a 3x3 grid with empty strings for each space
    board: ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
};

// Create both players
const playerA = Player('Player A', 'X');
const playerB = Player('Player B', 'O');

// Function to print the game board
const printBoard = () => {
    console.log(`${gameBoard.board[0]} | ${gameBoard.board[1]} | ${gameBoard.board[2]}`);
    console.log(`${gameBoard.board[3]} | ${gameBoard.board[4]} | ${gameBoard.board[5]}`);
    console.log(`${gameBoard.board[6]} | ${gameBoard.board[7]} | ${gameBoard.board[8]}`);
}

// Handles player turn
const takeTurn = (player) => {
    console.log(`${player}'s turn.`);
    let position = prompt("Choose a position from 1-9:");
    position -= 1;
    while (position < 0 || position > 8 || gameBoard.board[position] !== "-") {
        position = prompt("Invalid input or position already taken. Choose a different position:");
        position -= 1;
    } 
    gameBoard.board[position] = player;
    printBoard();
}

// Will check if the game is over
const gameOver = () => {
    // Win logic
    if ((board[0] === board[1] && board[1] === board[2] && board[0] !== "-") ||
        (board[3] === board[4] && board[4] === board[5] && board[3] !== "-") ||
        (board[6] === board[7] && board[7] === board[8] && board[6] !== "-") ||
        (board[0] === board[3] && board[3] === board[6] && board[0] !== "-") ||
        (board[1] === board[4] && board[4] === board[7] && board[1] !== "-") ||
        (board[2] === board[5] && board[5] === board[8] && board[2] !== "-") ||
        (board[0] === board[4] && board[4] === board[8] && board[0] !== "-") ||
        (board[2] === board[4] && board[4] === board[6] && board[2] !== "-")) {
        return "win";
    }
    // Check for a tie
    else if (!board.includes("-")) {
        return "tie";
    }
    // Game is not over
    else {
        return "play";
    }
}

// Plays the game - game logic
const playGame = () => {
    printBoard();
    let currentPlayer = "X";
    let gameOver = false;
    while (!gameOver) {
        takeTurn(currentPlayer);
        let gameResult = checkGameOver();
        if (gameResult === "win") {
            console.log(`${currentPlayer} wins!`);
            gameOver = true;
        } else if (gameResult === "tie") {
            console.log("It's a tie!");
            gameOver = true;
        } else {
            // Switch to the other player
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

// Test the function
playGame();

