function solution(n, t) {
  let answer = n;
  while(t > 0) {
    answer *= 2;
    t -= 1;
  }
  return answer;
}

console.log(solution(2, 10))