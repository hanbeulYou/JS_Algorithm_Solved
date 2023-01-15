const Dungeons = []
const visited = []
let answer = 0

function visit(depth, now, energy) {
  visited[now] = true
  for(let i=0; i<Dungeons.length; i++) {
    if(energy<Dungeons[i][0]) continue
    if(visited[i]) continue
    visit(depth+1, i, energy-Dungeons[i][1])
  }
  if(depth>answer) answer = depth
  visited[now] = false
}

function solution(k, dungeons) {
  dungeons.forEach((e) => { 
    Dungeons.push(e) 
    visited.push(false)
  })
  for(let i=0; i<dungeons.length; i++) {
    if(k<Dungeons[i][0]) continue
    visit(1, i, k-Dungeons[i][1])
  }  
  return answer;
}

console.log(solution(80, [[80, 20], [50, 40], [30, 10]]))