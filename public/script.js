const cells = document.querySelectorAll('.cell');
const resultText = document.querySelector('.result');
const resetButton = document.querySelector('.reset-button');
let currentPlayer = 'X';
let gameBoard = ['','','','','','','','',''];
let gameActive = true;

function handleCellClick(index) {
    gameBoard[index] = currentPlayer;
    cells[index].value = currentPlayer;
    cells[index].disabled = true;
    if(gameBoard[cellIndex] !== '' || !gameActive){
        return;
    }

    if(checkWin(currentPlayer)){
        gameActive = false;
        resultText.textContent = `Player ${currentPlayer} Won`;
        resetButton.disabled = false;
    } else if (isBoardFull()){
        gameActive = false;
        resultText.textContent = `Its a draw!`;
        resetButton.disabled = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        resultText.textContent = `Player ${currentPlayer} Turn`;
    }
}

function checkWin(player){
    const winPatterns = [
        [0, 1, 2],[3, 4, 5],[6, 7, 8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];
    
    for(let pattern of winPatterns){
        const [a,b,c] = pattern;
        if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
            return true;
        }
    } 
    return false;
}

function isBoardFull(){
    return !gameBoard.includes('');
}

function resetGame(){
    gameBoard = ['','','','','','','','',''];
    currentPlayer = 'X';
    gameActive = true;
    cells.forEach(cell => cell.textContent = '');
    resultText.textContent = `Player ${currentPlayer} Turn`;
    resetButton.disabled = true;
}

cells.forEach((cell,index) => {cell.addEventListener('click', ()=>{handleCellClick(index);});});
resetButton.addEventListener('click',resetGame);

resultText.textContent = `Player ${currentPlayer} Turn`;