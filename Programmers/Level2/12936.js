function factorial(num) {
  let result = 1;
  while(num > 0) {
    result *= num;
    num -= 1;
  }
  return result;
}

function solution(n, k) {
  const answer = [];
  const people = new Array(n);
  for(let i=0; i<n; i++) people[i] = i+1;
  let factN = factorial(n);

  while(answer.length < n) {
    factN /= people.length;
    answer.push(...people.splice(Math.floor((k-1)/factN), 1));
    k %= factN
  }
  return answer;
}

console.log(solution(3, 5))