function solution(a, b, n) {
  let answer = 0
  while(n>=a) {
    answer += parseInt(n/a)*b
    n=(n-parseInt(n/a)*a) + parseInt(n/a)*b
  }
  return answer;
}