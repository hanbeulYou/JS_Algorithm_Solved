const quotient = (num1, num2) => {
  return Math.floor(num1/num2);
}

function solution(hp) {
  let answer = 0;
  if(hp>=5) {
    answer += quotient(hp, 5);
    hp -= quotient(hp, 5) * 5;
  }
  if(hp>=3) {
    answer += quotient(hp, 3);
    hp -= quotient(hp, 3) * 3;
  }
  answer += hp;
  return answer;
}

console.log(solution(23))