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
    cell.textContent = currentPlayer;

    if(checkWin()){
        gameActive = false;
        resultText.textContent = 'Player ${currentPlayer} wins!';
        resetButton.disabled = false;
    } else if (isBoardFull()){
        gameActive = false;
        resultText.textContent = 'It\'s a draw!';
        resetButton.disabled = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        resultText.textContent = 'Player ${currentPlayer}
    }
}