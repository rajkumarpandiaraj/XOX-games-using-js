const boxes = document.querySelectorAll('.box');
const result = document.querySelector('.result-wrapper');
const winner = document.querySelector('.winner');
const restartBtn = document.querySelector('.restart-btn'); 
let currentPlayer = 'X';
let values = ['','','','','','','','','',]
const winningCombination = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const checkWinner = () =>{
    return winningCombination.some(singleCombination =>{
        return singleCombination.every(index => {
            return values[index] === currentPlayer
        })
    })
}
const matchDraw = () => {
    return values.every(ind => ind!== '')
}

const startGame = (e) =>{
    vIndex = +e.target.id;
    values[vIndex] = currentPlayer;
    e.target.textContent = currentPlayer;
    if(checkWinner()){
        winner.textContent = `${currentPlayer} Won `;
        result.style.display = 'block';
    }else if(matchDraw()){
        
        winner.textContent = 'Match Draw';
        result.style.display = 'block';
    }
    if(currentPlayer === "X"){
        currentPlayer = 'O';
    }else{
        currentPlayer = 'X';
    }

}


const triggerGame = () => {
    boxes.forEach(box =>{
        box.addEventListener('click',startGame, {once : true})
    })
}
triggerGame();

restartBtn.addEventListener('click', ()=>{
    currentPlayer = 'X';
    values = ['','','','','','','','','',];
    boxes.forEach(box => {
        box.textContent = ''
    })
    triggerGame()
    result.style.display = 'none'
})