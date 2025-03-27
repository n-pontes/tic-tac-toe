import Player from './player.js';

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

}

// Plays the game - its the game logic
const playGame = () => {

}

// Test the function
playGame();

