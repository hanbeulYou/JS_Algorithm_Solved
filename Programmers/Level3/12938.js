function solution(n, s) {
  if(n>s) return [-1];
  const avg = Math.floor(s/n);
  const answer = new Array(n).fill(avg)
  const remainder = s - n * avg;
  for(let i=1; i<=remainder; i++) {
    answer[n-i] += 1;
  }
  return answer;
}