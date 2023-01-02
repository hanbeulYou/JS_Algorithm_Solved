function solution(k, tangerine) {
  const tangerineCnt = {}
  tangerine.forEach((t) => {
    if(tangerineCnt[t] === undefined) {
      tangerineCnt[t] = 0
    }
    tangerineCnt[t] += 1
  })
  const cntArray = Object.values(tangerineCnt).sort((a, b) => { return a-b })

  let answer = 0
  let acc = 0
  while(cntArray) {
    acc += cntArray.pop()
    answer += 1
    if(acc >= k) break
  }
  return answer
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]))