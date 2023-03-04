const gameInit = (gameMode) => {
    board.classList.add('visible');
    btnOne.setAttribute('disabled', 'true');
    btnTwo.setAttribute('disabled', 'true');
    boxes.forEach((box, i) => {
        box.addEventListener('click', (e) => gameMode(e, i))
    });
}
const twoPlayersModeLogic = (playerOne, playerTwo, text, id, e, playerPicks, allPicks) => {

    const newBox = document.createElement('div');
    newBox.classList.add('checked');
    newBox.textContent = text;
    playerPicks.push(id);
    allPicks.push(id);
    const winId = checkWinner(playerPicks);
    if (winId) {
        showWinnerMoves(winId)
        info.textContent = `Player ${playerOne} wins!`;
        createRestartBtn();
        disableAllBoxes(boxes);
    } else {
        checkDraw(allPicks);
    }
    ;
    player = playerTwo;
    e.target.classList.add('disabled');
    e.target.appendChild(newBox);
}

const onePlayerSetup = (text, playerPicks, allPicks, id, e) => {

    const newBox = document.createElement('div');
    newBox.classList.add('checked');
    newBox.textContent = text;
    playerPicks.push(id);
    allPicks.push(id);
    e.target.classList.add('disabled');
    e.target.appendChild(newBox);
}

const aiSetup = (playerPicks, allPicks, id) => {

    playerPicks.push(id);
    allPicks.push(id);
    checkDraw(allPicks);
}

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

const checkDraw = (arr) => {
    if (arr.length === 9) {
        info.textContent = "DRAW!";
        createRestartBtn();
        return true
    }
}

const disableAllBoxes = (arr) => {
    arr.map(box => box.classList.add('disabled'));
}

const generateAiPick = (arr) => {
    let available = true;
    let aiPick;
    while (available) {
        aiPick = Math.floor(Math.random() * 9) + 1;
        available = arr.includes(aiPick);
    }
    return aiPick
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