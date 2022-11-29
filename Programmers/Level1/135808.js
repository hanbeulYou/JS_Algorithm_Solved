let answer = 0;

function getBoxes(m, score) {
  answer += score[score.length-m] * m
  score.splice(score.length-m)
  return score
}

function solution(k, m, score) {
  score = score.sort((a, b) => { return a - b })
  while(score.length >= m) {
    score = getBoxes(m, score)
  }
  return answer;
}

console.log((solution(3, 4, [1, 2, 3, 1, 2, 3, 1])))