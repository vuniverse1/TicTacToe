let player = document.getElementById('player')
let restart = document.getElementById('restart')
let boxes = Array.from(document.getElementsByClassName('box'))

let winningIndicator = getComputedStyle(document.body).getPropertyValue('--winner')

const O = "O"
const X = "X"
let currentPlayer = X
let spaces = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e){
    const id = e.target.id
    if(!spaces[id]){
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer
        
        if(win() !==false){
            player.innerHTML = `${currentPlayer} WON!`
            let winner = win()

            winner.map(box => boxes[box].style.backgroundColor=winningIndicator)
        return
        }


        currentPlayer = currentPlayer == X ? O : X
    }
}
const winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function win(){
    for(const condition of winningCombo){
        let[a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
            return[a, b, c]
        }
    }
            return false 

}
restart.addEventListener('click', restartButton)

function restartButton(){
    spaces.fill(null)

    boxes.forEach(box => {
        box.innerText = ''
        box.style.backgroundColor=''
    })

    player.innerHTML = 'TIC TAC TOE' /* change title back to 'TIC TAC TOE' from ''X/O' WON!' */

    currentPlayer = X
}
startGame()