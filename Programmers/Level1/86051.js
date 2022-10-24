function solution(numbers) {
  const checkArr = []
  for(i=0; i<10; i++) checkArr.push(i);
  numbers.forEach(element =>
    checkArr[checkArr.indexOf(element)] = 0
    )
  const answer = checkArr.reduce((sum, element) => sum+=element, 0)
  return answer;
}

console.log(solution([1,2,3,4,6,7,8,0]))