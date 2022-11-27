function getDivisor(knight) {
  let cnt = 0
  for(let i=1; i<Math.sqrt(knight); i++) {
    if(knight % i === 0) {
      cnt += 1
    }
  }
  cnt *= 2
  if(knight % Math.sqrt(knight) === 0) cnt += 1
  return cnt
}

function solution(number, limit, power) {
  let answer = 0
  for(let num=1; num<=number; num++) {
    const divisor = getDivisor(num)
    if(divisor > limit) {
      answer += power
    } else {
      answer += divisor
    }
  }
  return answer;
}

console.log(solution(5, 3, 2))