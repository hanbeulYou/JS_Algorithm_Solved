function solution(s1, s2) {
  let answer = 0;
  s1.forEach((s) => {
    if(s2.includes(s)) answer += 1;
  })
  return answer;
}