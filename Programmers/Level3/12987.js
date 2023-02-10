function solution(A, B) {
  const sortedA = A.sort((a, b) => b-a);
  const sortedB = B.sort((a, b) => b-a);
  let bIdx = 0;
  let answer = 0;
  sortedA.forEach((a) => {
    if(a < sortedB[bIdx]) {
      answer += 1;
      bIdx += 1;
    }
  })
  return answer;
}

console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]))