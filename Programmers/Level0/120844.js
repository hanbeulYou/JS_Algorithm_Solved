function solution(numbers, direction) {
  if(direction === "right") {
    const tmp = numbers.pop();
    numbers.unshift(tmp);
    return numbers;
  }
  const tmp = numbers.shift();
  numbers.push(tmp);
  return numbers;
}