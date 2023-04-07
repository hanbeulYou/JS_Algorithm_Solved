const answer = [0, 0]

function check(arr, startI, startJ, endI, endJ) {
  let tmp = arr[startI-1][startJ-1];
  let needDivied = false;
  if(startI === endI && startJ === endJ) {
    answer[tmp] += 1;
    return;
  }
  for(let i=startI-1; i<endI; i++) {
    for(let j=startJ-1; j<endJ; j++) {
      if(tmp !== arr[i][j]) {
        needDivied = true;
        break;
      }
    }
    if(needDivied) break;
  }
  if(needDivied) {
    check(arr, startI, startJ, endI/2, endJ/2);
    check(arr, endI/2, startJ, endI, endJ/2);
    check(arr, startI, endJ/2, endI/2, endJ);
    check(arr, endI/2, endJ/2, endI, endJ);
  }
  answer[tmp] += 1;
}

function solution(arr) {
  check(arr, 1, 1, arr.length, arr.length)
  return answer;
}

console.log(solution([[1, 1, 0, 0], [1, 0, 0, 0], [1, 0, 0, 1], [1, 1, 1, 1]]))