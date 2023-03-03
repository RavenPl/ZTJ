const boxes = [...document.querySelectorAll('.board-box')];
const checkedBoxes = document.getElementsByClassName('checked')
const btnOne = document.querySelector('.btn-one');
const btnTwo = document.querySelector('.btn-two');
const board = document.querySelector('.board');
const info = document.querySelector('.info');

let gameMode;
let player = 1;
const winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [9, 6, 3], [1, 5, 9], [3, 5, 7]];

const playerOnePicks = [];
const playerTwoPicks = [];

const selectedBoxes = [];

btnOne.addEventListener('click', () => {
    board.classList.add('visible');
    gameMode = 1;
})
btnTwo.addEventListener('click', () => {
    board.classList.add('visible');
    gameMode = 2;
})

boxes.forEach((box, i) => {
    box.addEventListener('click', (e) => twoPlayersMode(e, i))
})

const checkWinner = (playerPicks) => {
    let index = 0;
    winCombinations.forEach((arr, i) => {
        if (arr.every(el => playerPicks.includes(el))) {
            index = i + 1;
        }
    });
    return index

}

const showWinnerMoves = (num) => {

    winCombinations[num - 1].forEach(el => {
        document.querySelector(`[data-id = "${el}"]`).style.border = "2px solid green";
        document.querySelector(`[data-id = "${el}"]`).style.boxShadow = "0px 0px 25px green";
    })

}


const twoPlayersMode = (e, i) => {
    const id = i + 1;
    const newBox = document.createElement('div');
    newBox.classList.add('checked');

    if (gameMode === 2) {
        if (player === 1) {
            newBox.textContent = "X";
            playerOnePicks.push(id);
            selectedBoxes.push(id);
            const winId = checkWinner(playerOnePicks);
            if (winId) {
                showWinnerMoves(winId)
                info.textContent = `Player 1 wins!`;
                createRestartBtn();
            }
            player = 2;
        } else {
            newBox.textContent = "O";
            playerTwoPicks.push(id);
            selectedBoxes.push(id);
            const winId = checkWinner(playerTwoPicks);
            if (winId) {
                showWinnerMoves(winId)
                info.textContent = `Player 2 wins!`;
            }
            player = 1;
        }
        checkDraw(selectedBoxes);

    }
    e.target.classList.add('disabled');
    e.target.appendChild(newBox);
}

const checkDraw = (arr) => {
    if (arr.length === 9) {
        info.textContent = "DRAW!"
    }
}

const createRestartBtn = () => {
    const newBtn = document.createElement('button');
    newBtn.textContent = "Play again!";
    newBtn.classList.add('restart');
    document.querySelector('body').appendChild(newBtn);
    newBtn.addEventListener('click', (e) => {
        newBtn.remove();
        location.reload();
    })
}