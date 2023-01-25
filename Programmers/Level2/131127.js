const wantObj = {}

function makeObj(want, number) {
  want.forEach((e, idx) => {
    wantObj[e] = number[idx];
  })
}

function initCheckWant(discount) {
  for(let i=0; i<10; i++) {
    if(wantObj[discount[i]] === undefined) continue;
    wantObj[discount[i]] -= 1;
  }
}

function checkWant() {
  const checkArr = Object.values(wantObj).filter((e) => e > 0)
  if(checkArr.length > 0) return 0;
  return 1;
}

function solution(want, number, discount) {
  makeObj(want, number);
  initCheckWant(discount);
  let answer = checkWant();
  let idx = 0;
  while(idx+10 < discount.length) {
    if(wantObj[discount[idx]] !== undefined) wantObj[discount[idx]] += 1;
    if(wantObj[discount[idx+10]] !== undefined) wantObj[discount[idx+10]] -= 1;
    answer += checkWant();
    idx+=1;
  }
  return answer;
}

console.log(solution(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1], ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]))