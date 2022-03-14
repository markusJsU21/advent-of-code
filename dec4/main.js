const fs = require('fs')

const data = fs.readFileSync("input.txt", { encoding: 'utf8' })

function getDrawOrder(input){
    const firstRow = input.split("\r\n")[0]
    return firstRow.split(",")
}

function getBoardNumbers(input){
    const boardNumbers = input
        .split("\r\n")
        .slice(1)
        .flatMap(i => i.split(' '))
        .filter(x => x != '')
    return boardNumbers
}

function createBoards(boardNumbers) {
    let boards = []
    let nbrOfBoards = Math.floor(boardNumbers.length / 25)
    for (let i = 0; i < nbrOfBoards; i++) {
        const start = i == 0 ? 0 : i*25;
        const end = (i+1)*25;
        boards.push(createBoard(boardNumbers.slice(start, end)))
    }
    return boards
}

/* function createBoards(boardNumbers, boards = []){
    
    if(boardNumbers.length == 25){
        boards.push(createBoard(boardNumbers))
        return boards
    }
    // else
    //     return createBoards(boardNumbers.slice(25, boardNumbers.length -1), boards)
}*/ 


function createBoard(boardNumbers){
    let board = []
    for(let j=0; j<5; j++){
        let row = []
        for(let i=0; i<5; i++){
            row.push(boardNumbers[((5*j)+i)])    
        }
        board.push(row)
    }
    return board
}

function crossNumber(board, number){
    for(let i = 0; i<5; i++){
        for(let j = 0; j<5; j++){
            if(board[i][j] == number){
                board[i][j] = null
            }
        }
    }
    return board
}

function leifLoketOlsson(board, numbers){
    let nbrOfDraws = 0;
    let winningNumber = null;
    for(let number of numbers){
        nbrOfDraws++;
        let crossedBoard = crossNumber(board, number)
        if(bingo([...crossedBoard])){
            winningNumber = number;
            break
        }
    }
    return { board, nbrOfDraws, winningNumber }
}

function flip(board) {
    let flippedBoard = [...board]
    for(let i = 0; i<5; i++){
        for(let j = 0; j<i; j++){
            const temp = flippedBoard[i][j] 
            flippedBoard[i][j]=flippedBoard[j][i]
            flippedBoard[j][i]=temp
        }
    }
    return flippedBoard
}

function bingo(board, flipped = false){
    for(let i = 0; i<5; i++){
        let row = board[i]
        let bingo = row.every(e => e === null)
        if(bingo){
            return true
        }
    }
    if(flipped){
        flip(board)
        return false;
    }
    return(bingo(flip(board), true))
}
let boardNumbers = getBoardNumbers(data);
let draw_order = getDrawOrder(data)
let newBoards = createBoards(boardNumbers)
let result = newBoards.map(board => {
    let x = leifLoketOlsson(board, draw_order)
    return x
})
let winner = null
for (const r of result) {
    if (winner === null) {
        winner = r
    } else if (
     r.nbrOfDraws > winner.nbrOfDraws
    ){
        winner = r
    }
}

console.table(winner.board)

let sum = winner.board
    .flatMap(p => p)
    .reduce((acc, x) => {
        if (x != null)
            acc = Number(acc) + Number(x)
        return acc
    })
console.log(sum, winner.winningNumber)
//  console.log(leifLoketOlsson(newBoard, getDrawOrder(data)))