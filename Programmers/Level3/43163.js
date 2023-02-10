let answer = 21000000000;
let flag = false;

const diff = (a, b) => {
  let cnt = 0;
  for(let i=0; i<a.length; i++) {
    if(a[i] !== b[i]) cnt += 1;
  }
  if(cnt === 1) return true;
  return false;
}

const dfs = (begin, target, words, now, visited, depth) => {
  visited[now] = true;
  if(words[now] === target) {
    if(answer > depth) answer = depth;
    flag = true;
    visited[now] = false;
    return;
  }
  for(let i=0; i<words.length; i++) {
    if(visited[i] === false && diff(words[now], words[i])) {
      dfs(begin, target, words, i, visited, depth+1);
    }
  }
  visited[now] = false;
}

function solution(begin, target, words) {
  const visited = new Array(words.length);
  visited.fill(false);
  if(!words.includes(target)) return 0;
  for(let i=0; i<words.length; i++) {
    if(diff(begin, words[i])) {
      dfs(begin, target, words, i, visited, 1);
    }
  }
  if(flag) return answer;
  return 0;
}

console.log(solution(	"hit", "cog", ["hot", "dot", "dog", "lot", "log"]))
// console.log(solution("hit", "cog", ["cog", "log", "lot", "dog", "dot", "hot"]))
// console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]))