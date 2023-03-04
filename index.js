const boxes = [...document.querySelectorAll('.board-box')];
const checkedBoxes = document.getElementsByClassName('checked');
const btnOne = document.querySelector('.btn-one');
const btnTwo = document.querySelector('.btn-two');
const board = document.querySelector('.board');
const info = document.querySelector('.info');

let player = 1;
const winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [9, 6, 3], [1, 5, 9], [3, 5, 7]];

const playerOnePicks = [];
const playerTwoPicks = [];
const selectedBoxes = [];

btnOne.addEventListener('click', () => {
    gameInit(onePlayerMode);
});

btnTwo.addEventListener('click', () => {
    gameInit(twoPlayersMode);
});


const onePlayerMode = (e, i) => {

    onePlayerSetup("X", playerOnePicks, selectedBoxes, i + 1, e);

    const winId = checkWinner(playerOnePicks);
    if (winId) {
        showWinnerMoves(winId)
        info.textContent = `Player 1 wins!`;
        createRestartBtn();
        disableAllBoxes(boxes);
    } else {
        if (checkDraw(selectedBoxes)) return;
        document.body.style.cursor = "wait";

        setTimeout(() => {
            const idAi = generateAiPick(selectedBoxes);
            aiMove(idAi);
            document.body.style.cursor = "pointer";
        }, 1500)
    }

}

const twoPlayersMode = (e, i) => {

    player === 1
        ? twoPlayersModeLogic(1, 2, "X", i + 1, e, playerOnePicks, selectedBoxes)
        : twoPlayersModeLogic(2, 1, "O", i + 1, e, playerTwoPicks, selectedBoxes)

}

const aiMove = (id) => {

    aiSetup(playerTwoPicks, selectedBoxes, id);
    const newBox = document.createElement('div');
    newBox.classList.add('checked');
    newBox.textContent = "O";

    const winId = checkWinner(playerTwoPicks);
    if (winId) {
        showWinnerMoves(winId)
        info.textContent = `AI wins!`;
        createRestartBtn();
        disableAllBoxes(boxes);
    }
    document.querySelector(`[data-id = "${id}"]`).classList.add('disabled');
    document.querySelector(`[data-id = "${id}"]`).appendChild(newBox);
}
