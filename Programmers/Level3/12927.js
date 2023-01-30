function solution(n, works) {
  const sumOfWorks = works.reduce((acc, cur) => {
    return acc + cur;
  }, 0)
  if(sumOfWorks <= n) return 0;

  const sortedWorks = works.sort((a, b) => {return (a-b)});
  const lastIdx = works.length-1;

  while(n) {
    const maxWork = sortedWorks[lastIdx];

    for(let i = lastIdx; i >= 0; i--) {
      if(sortedWorks[i] >= maxWork) {
        sortedWorks[i] -= 1;
        n -= 1;
      }
      if(n===0) break;
    }
  }
  const answer = sortedWorks.reduce((acc, cur) => {
    return acc + cur ** 2;
  }, 0)
  return answer;
}

console.log(solution(99, [2, 15, 22, 55, 55]))
// console.log(solution(999, [800, 100, 55, 45]))
// console.log(solution(999, [800, 100, 55, 45]))