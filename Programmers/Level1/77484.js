function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1]
  let zeroCnt = 0
  let lottoCnt = 0
  lottos.forEach((lotto) => {
    if(lotto === 0) zeroCnt += 1
    if(win_nums.includes(lotto)) lottoCnt += 1
  })
  const answer = []
  answer.push(rank[lottoCnt+zeroCnt])
  answer.push(rank[lottoCnt])
  return answer;
}