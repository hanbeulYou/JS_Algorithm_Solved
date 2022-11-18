function solution(strings, n) {
  const tmp = strings.sort()
  const answer = [];
  while(tmp.length > 0) {
    let minChar = tmp[0][n];
    let minIdx = 0;
    tmp.forEach((element, index) => {
      if(element[n] < minChar) {
        minChar = element[n];
        minIdx = index;
      }
    })
    answer.push(tmp[minIdx]);
    tmp.splice(minIdx, 1);
  }
  return answer;
}

console.log(solution(["sun", "bed", "car"], 1))
console.log(solution(["abce", "abcd", "cdx"], 2))