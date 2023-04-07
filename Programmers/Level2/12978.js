function solution(N, roads, K) {
  const graph = {};
  roads.forEach((road) => {
    if(graph[road[0]] === undefined) graph[road[0]] = [];
    if(graph[road[1]] === undefined) graph[road[1]] = [];
    graph[road[0]].push([road[1], road[2]]);
    graph[road[1]].push([road[0], road[2]])
  })
  const dijkstar = new Array(N+1).fill(Infinity);
  dijkstar[1] = 0;
  const queue = [1];
  let idx = 0;
  while(idx < queue.length) {
    const now = queue[idx];
    graph[now].forEach((node) => {
      if(dijkstar[now]+node[1] < dijkstar[node[0]]) {
        dijkstar[node[0]] = dijkstar[now]+node[1];
        queue.push(node[0]);
      }
    });
    idx += 1;
  }
  const answer = dijkstar.reduce((acc, cur) => {
    if(cur <= K) return acc += 1;
    return acc;
  }, 0)
  return answer;
}

console.log(solution(5, [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]], 3))