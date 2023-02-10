const toDelete = [];
const boardArray = [];

function deleteBlock() {
  let flag = false;
  while(toDelete.length) {
    const idx = toDelete.shift();
    boardArray[idx[0]][idx[1]] = '';
    boardArray[idx[0]+1][idx[1]] = '';
    boardArray[idx[0]][idx[1]+1] = '';
    boardArray[idx[0]+1][idx[1]+1] = '';
    flag = true;
  }
  return flag;
}


function getDown(i) {
  for(let j=boardArray.length-1; j>=0; j--) {
    if(boardArray[j][i] !== '') {
      let k = j+1;
      let flag = false;
      while(k < boardArray.length && boardArray[k][i] === '') {
        flag = true;
        k += 1;
      }
      if(flag) {
        boardArray[k-1][i] = boardArray[j][i];
        boardArray[j][i] = '';
      }
    }
  }
}

function getDownAll() {
  for(let i=0; i<boardArray[0].length; i++) {
    getDown(i)
  }
}

function checkBlock() {
  for(let i=0; i<boardArray.length-1; i++) {
    for(let j=0; j<boardArray[i].length-1; j++) {
      if(boardArray[i][j] !== '') {
        if(boardArray[i][j] === boardArray[i+1][j] &&
          boardArray[i][j] === boardArray[i][j+1] &&
          boardArray[i][j] === boardArray[i+1][j+1]) {
            toDelete.push([i, j])
          }
      }
    }
  }
  const flag = deleteBlock();
  if(flag) {
    getDownAll();
  }
  return flag;
}

function boardToArray(board) {
  for(let i=0; i<board.length; i++) {
    boardArray.push([]);
    board[i].split('').forEach((e) => {
      boardArray[i].push(e);
    })
  }
} 

function boardCnt() {
  let cnt = 0;
  for(let i=0; i<boardArray.length; i++) {
    for(let j=0; j<boardArray[i].length; j++) {
      if(boardArray[i][j] !== '') {
        cnt += 1;
      }
    }
  }
  return cnt;
}

function solution(m, n, board) {
  boardToArray(board);
  while(true) {
    if(!checkBlock()) break;
  }
  return m*n - boardCnt();
}

// console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]))
console.log(solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]))

