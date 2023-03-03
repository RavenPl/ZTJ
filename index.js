const boxes = [...document.querySelectorAll('.board-box')];
const checkedBoxes = document.getElementsByClassName('checked')
const btnOne = document.querySelector('.btn-one');
const btnTwo = document.querySelector('.btn-two');
const board = document.querySelector('.board');

let gameMode;
let player = 1;

btnOne.addEventListener('click', () => {
    board.classList.add('visible');
    gameMode = 1;
})
btnTwo.addEventListener('click', () => {
    board.classList.add('visible');
    gameMode = 2;
})

boxes.forEach((box, i) => {
    box.addEventListener('click', (e) => {

        const newBox = document.createElement('div');
        newBox.classList.add('checked');
        newBox.setAttribute('data-id', `${i + 1}`);
        if (gameMode === 2) {
            newBox.textContent = player === 1 ? "X" : "O";
            player = player === 1 ? 2 : 1;
        }
        console.log(checkedBoxes, boxes);
        e.target.classList.add('disabled')
        e.target.appendChild(newBox)
    })
})