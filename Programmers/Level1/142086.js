function solution(s) {
  const lastIndex = {}
  const answer = [];
  s.split('').forEach((e, index) => {
    if(lastIndex[e] === undefined) {
      lastIndex[e] = index
      return answer.push(-1)
    }
    answer.push(index - lastIndex[e])
    lastIndex[e] = index
  })
  return answer;
}