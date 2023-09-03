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
        resultText.textContent = 'Player ${currentPlayer}\' turn';
    }
}

function checkWin(){
    const winPatterns = [
        [0, 1, 2],[3, 4, 5],[6, 7, 8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];
    
    for(let pattern of winPatterns)
    const [a,b,c] = pattern;
    if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
        return true;
    } 
}