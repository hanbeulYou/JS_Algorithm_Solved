const minClicked = {};

function solution(keymap, targets) {
  const answer = [];
  keymap.forEach((keym) => {
    keym.split('').forEach((km, idx) => {
      if(minClicked[km] !== undefined && idx+1 >= minClicked[km]) return;
      minClicked[km] = idx+1;
    })
  });
  targets.forEach((target) => {
    let cnt = 0;
    let flag = true;
    target.split('').forEach((t) => {
      if(minClicked[t] === undefined && flag) {
        answer.push(-1);
        flag = false;
        return;
      }
      cnt += minClicked[t];
    })
    if(flag) answer.push(cnt);
  })
  // if(answer.includes(-1)) return [-1];
  return answer;
}

// console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]))
console.log(solution(["AB"], ["CCC"]))