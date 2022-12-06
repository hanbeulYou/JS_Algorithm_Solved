function solution(board, moves) {
    const N = board.length
    const pickedStack = []
    let answer = 0

    moves.forEach((move) => {
        for(let i=0; i<N; i++) {
            if(board[i][move-1] !== 0) {
                pickedStack.push(board[i][move-1])
                board[i][move-1] = 0
                break
            }
        }
        const stackSize = pickedStack.length
        if(stackSize > 1) {
            if(pickedStack[stackSize-1] === pickedStack[stackSize-2]) {
                answer += 2
                pickedStack.splice(stackSize-2)
            }
        }
    })
    return answer;
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]))