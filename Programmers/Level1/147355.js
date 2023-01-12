function solution(t, p) {
  let answer = 0
  const intP = parseInt(p)
  for(let i=0; i<=t.length-p.length; i++) {
    const newT = parseInt(t.slice(i, i+p.length))
    if(newT <= intP) answer += 1
  }
  return answer;
}