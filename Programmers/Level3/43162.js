function dfs(now, n, computers, visited) {
  visited[now] = true;
  for(let i=0; i<n; i++) {
    if(computers[now][i] && !visited[i]) {
      dfs(i, n, computers, visited);
    }
  }
}

function solution(n, computers) {
  const visited = new Array(n).fill(false);
  let answer = 0;
  for(let i=0; i<n; i++) {
    if(!visited[i]) {
      dfs(i, n, computers, visited);
      answer += 1;
    }
  }
  return answer;
}