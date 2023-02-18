const grid = [];
const direction = [[1, 0], [0, 1], [-1, -1]];

function initGrid(n) {
  for(let i=0; i<n+2; i++) {
    grid.push([]);
    for(let j=0; j<n+2; j++) {
      if(i == 0 || i == n+1 || j == 0 || j == n+1) {
        grid[i].push(-1);
        continue;
      }
      grid[i].push(0);
    }
  }
}

function getSnail() {
  let [i, j] = [1, 1];
  let cnt = 1;
  let idx = 0;
  let check = 0;
  while(true) {
    grid[i][j] = cnt;
    if(idx > 2) idx =0;
    const [newI, newJ] = [i+direction[idx][0], j+direction[idx][1]];
    if(grid[newI][newJ] != 0) {
      if(check === 1) break;
      idx += 1;
      check += 1;
      continue;
    }
    check = 0;
    cnt += 1;
    i = newI;
    j = newJ;
  }
  grid[i][j] = cnt;
}

function getAnswer(n) {
  const answer = [];
  for(let i=1; i<=n; i++) {
    for(let j=1; j<=n; j++) {
      if(grid[i][j] > 0) answer.push(grid[i][j]);
    }
  }
  return answer;
}

function solution(n) {
  initGrid(n);
  getSnail();
  return getAnswer(n);
}

console.log(solution(3));