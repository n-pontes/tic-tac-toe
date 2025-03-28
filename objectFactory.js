const getCells = ()  => {
    return document.querySelectorAll(".cell");
};

// Wraps the gameBoard object in an IIFE (immediately invoked function expression)
const gameBoard = (function (){
    // Returns the array
    return {
        board: ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
    };
})();

// Wraps the player object in an IIFE
const player = (function() {
    return {
        currentPlayer : "X"
    }
})();

// Export everything that needs to be used in main.js
export { getCells, gameBoard, player };