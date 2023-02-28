function solution(number, k) {
  let stack = [];
  const numberArr = number.split('').reverse();
  while(k > 0 && numberArr.length > 0) {
    stack.push(numberArr.pop());
    while(stack[stack.length-1] < numberArr[numberArr.length-1] && k > 0) {
      stack.pop();
      k -= 1;
    }
  }
  if(k !== 0) stack = stack.slice(0, -k);
  return stack.join('') + numberArr.reverse().join('');
}