function getAnswer(sArr) {
  let cnt = 0;
  let i = 0;
  while(i < sArr.length-2) {
    if(sArr[i]+sArr[i+1]+sArr[i+2] === '110') {
      sArr.splice(i, 3)
      cnt += 1;
      changed = true;
      if(i>4) i-=5;
      continue;
    }
    i += 1;
  }
  i = sArr.length;
  while(i > 0) {
    if(sArr[i-1] === '0') break;
    i -= 1;
  }
  while(cnt > 0) {
    sArr.splice(i, 0, '0');
    sArr.splice(i, 0, '1');
    sArr.splice(i, 0, '1');
    cnt -= 1;
  }
  return sArr.join('');
}

function solution(s) {
  const answer = [];
  s.forEach((item) => {
    answer.push(getAnswer(item.split('')));
  })
  return answer;
}

console.log(solution(["1110", "100111100", "0111111010"]));
// answer : ["1101","100110110","0110110111"]