function solution(n, t, m, p) {
  const answer = [];
  let num = 0;
  let cnt = 0;
  while(answer.length < t) {
    const numArr = num.toString(n).split('')
    while(numArr.length > 0) {
      cnt += 1;
      const tubeNum = numArr.shift()
      if(cnt % m === p || (cnt % m === 0 && m === p)) {
        answer.push(tubeNum)
        if(answer.length === t) break
      }
    }
    num += 1;
  }
  return answer.join('').toUpperCase();
}

console.log(solution(2, 4, 2, 1))