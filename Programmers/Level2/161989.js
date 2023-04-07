function solution(n, m, section) {
  let answer = 0;
  for(let i=1; i<=n; i++) {
    if(section.includes(i)) {
      for(let j=i; j<i+m; j++) {
        if(section.includes(j)) section.shift();
      }
      answer += 1;
    }
  }
  return answer;
}