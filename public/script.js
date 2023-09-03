const cells = document.querySelectorAll('[data-cell]');
const resultText = document.querySelector('.result-text');
const resetButton = document.querySelector('.reset-button');
let currentPlayer = 'X';
let gameBoard = ['','','','','','','','',''];
let gameActive = true;

function handleCellClick(e) {
    const cell = e.target;
    const cellIndex = parseInt(cell.getAttribute('data-index'));
    if(gameBoard[cellIndex] !== '' || !gameActive){
        return;
    }

    gameBoard[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer
}