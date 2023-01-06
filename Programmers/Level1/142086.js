function solution(s) {
  const lastIndex = {}
  const answer = [];
  s.split('').forEach((e, index) => {
    if(lastIndex[e] === undefined) {
      lastIndex[e] = index
      return answer.push(-1)
    }
  })
  return answer;
}