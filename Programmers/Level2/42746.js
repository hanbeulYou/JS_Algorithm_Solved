function solution(numbers) {
  const numArray = [];
  numbers.forEach((number) => {
    numArray.push(String(number));
  });
  const answer = numArray.sort((a, b) => parseInt(b+a) - parseInt(a+b));
  if(answer[0] === "0") return "0";
  return answer.join('');
}