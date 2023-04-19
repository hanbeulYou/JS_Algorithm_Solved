const answer = [0, 0]

function check(arr, startI, startJ, len) {
  let tmp = arr[startI][startJ];
  for(let i=0; i<len; i++) {
    for(let j=0; j<len; j++) {
      if(tmp !== arr[startI+i][startJ+j]) {
        check(arr, startI, startJ, len/2);
        check(arr, startI, startJ+len/2, len/2);
        check(arr, startI+len/2, startJ, len/2);
        check(arr, startI+len/2, startJ+len/2, len/2);
        return;
      }
    }
  }
  answer[tmp] += 1;
}

function solution(arr) {
  check(arr, 0, 0, arr.length)
  return answer;
}

console.log(solution([[1, 1, 0, 0], [1, 0, 0, 0], [1, 0, 0, 1], [1, 1, 1, 1]]))