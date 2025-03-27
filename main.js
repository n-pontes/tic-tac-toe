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

// Test the function
printBoard();

