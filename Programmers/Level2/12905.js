function solution(board) {
  const N = board.length;
  const M = board[0].length;
  const dp = new Array();
  let answer = 0;

  for(let i=0; i<=N; i++) {
    const newArr = new Array(M+1).fill(0);
    dp.push([...newArr])
  }

  for(let i=1; i<=N; i++) {
    for(let j=1; j<=M; j++) {
      if(board[i-1][j-1] === 1) {
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
        answer = Math.max(dp[i][j], answer)
      }
    }
  }

  return answer**2;
}

console.log(solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]))