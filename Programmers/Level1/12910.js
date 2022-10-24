function solution(arr, divisor) {
  const answer = arr.filter(element => element%divisor===0)
  if(answer.length===0) answer.push(-1);
  return answer.sort((a, b) => a-b);
}