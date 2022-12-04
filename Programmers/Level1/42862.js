function solution(n, lost, reserve) {
  let cnt = 0

  for(let i=1; i<=n; i++) {
    if(lost.includes(i) && reserve.includes(i)) {
      const lostIdx = lost.indexOf(i)
      lost.splice(lostIdx, 1)
      const reserveIdx = reserve.indexOf(i)
      reserve.splice(reserveIdx, 1)
    }
  }

  for(let i=1; i<=n; i++) {
    if(lost.includes(i)) {
      let reserveIdx = 0
      if(reserve.includes(i-1)) {
        reserveIdx = reserve.indexOf(i-1)
        reserve.splice(reserveIdx, 1)
      } else if(reserve.includes(i+1)) {
        reserveIdx = reserve.indexOf(i+1)
        reserve.splice(reserveIdx, 1)
      } else {
        cnt += 1
      }
    }
  }
  return n-cnt;
}

console.log(solution(4, [2, 3], [3, 4]))