function solution(numbers) {
  const N = numbers.length;
  const answer = new Array(N).fill(-1);
  const stack = [];
  for(let i=0; i<N; i++) {
    while(stack.length > 0 && numbers[stack[stack.length-1]] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return answer;
}