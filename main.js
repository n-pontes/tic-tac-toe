import Player from './player.js';

// Create the game board and an empty array

const gameBoard = {

    // Create empty 2D array that represents a 3x3 grid with empty strings for each space
    game: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']

    ]
};

// Create both players
const playerA = Player('Player A', 'X');
const playerB = Player('Player B', 'o');

