function solution(x, y, n) {
  const M = 1000000;
  const answer = new Array(y+1).fill(-1);
  const queue = [];
  let idx = 0;
  answer[x] = 0;
  queue.push([x, answer[x]]);
  while(idx < queue.length) {
    const [num, cnt] = queue[idx];
    if(num+n <= y && answer[num+n] === -1) {
      answer[num+n] = cnt + 1;
      queue.push([num+n, cnt+1]);
    }
    if(num*2 <= y && answer[num*2] === -1) {
      answer[num*2] = cnt + 1;
      queue.push([num*2, cnt+1]);
    }
    if(num*3 <= y && answer[num*3] === -1) {
      answer[num*3] = cnt + 1;
      queue.push([num*3, cnt+1]);
    }
    idx += 1;
  }
  return answer[y];
}

console.log(solution(10, 40, 5));