function solution(cards1, cards2, goal) {
  let answer = "Yes";
  goal.forEach((item) => {
    if(cards1.length > 0 && cards1[0] === item) return cards1.shift();
    if(cards2.length > 0 && cards2[0] === item) return cards2.shift();
    answer = "No";
  })
  return answer;
}