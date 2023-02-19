function bfs(maps) {
  const queue = [[0, 0, 1]];
  const DIR = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const N = maps.length;
  const M = maps[0].length;
  while(queue.length > 0) {
    const [i, j, cnt] = queue.shift();
    if(i === N-1 && j === M-1) return cnt;
    for(const dir of DIR) {
      const [newI, newJ] = [i + dir[0], j + dir[1]];
      if(0 <= newI && newI < N && 0 <= newJ && newJ < M 
        && maps[newI][newJ] === 1) {
        maps[newI][newJ] = 0;
        queue.push([newI, newJ, cnt+1]);
      }
    }
  }
  return -1;
}

function solution(maps) {
  return bfs(maps);
}

console.log(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]));
