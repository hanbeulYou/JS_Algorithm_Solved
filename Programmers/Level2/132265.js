function solution(topping) {
  let answer = 0;
  const elder = new Object;
  const younger = new Object;
  let elderCnt = 0;
  let youngerCnt = 0;

  topping.forEach((t) => {
    if(younger[t] === undefined) {
      younger[t] = 0;
      youngerCnt += 1;
    }
    younger[t] += 1;
  });

  for(let i=0; i<topping.length-1; i++) {
    if(elder[topping[i]] === undefined) {
      elder[topping[i]] = 0;
      elderCnt += 1;
    }
    elder[topping[i]] += 1;
    younger[topping[i]] -= 1;
    if(younger[topping[i]] === 0) {
      youngerCnt -= 1;
    }
    if(elderCnt === youngerCnt) answer += 1;
  }
  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]	));