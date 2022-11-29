const countNumsInX = {
  "0": 0,
  "1": 0,
  "2": 0,
  "3": 0,
  "4": 0,
  "5": 0,
  "6": 0,
  "7": 0,
  "8": 0,
  "9": 0,
}

const countNumsInY = {
  "0": 0,
  "1": 0,
  "2": 0,
  "3": 0,
  "4": 0,
  "5": 0,
  "6": 0,
  "7": 0,
  "8": 0,
  "9": 0,
}

function solution(X, Y) {
  const arrX = X.split('')
  const arrY = Y.split('')
  const answer = new Array

  arrX.forEach((element) => {
    countNumsInX[element] += 1
  })
  arrY.forEach((element) => {
    countNumsInY[element] += 1
  })

  for(let i="9"; i>="0"; i--) {
    for(let j=0; j<Math.min(countNumsInX[i], countNumsInY[i]); j++) {
      answer.push(String(i))
    }
  }

  if(answer.length === 0) return "-1"
  if(answer[0] === "0") return "0"
  return answer.join('')
}

console.log(solution(	"100", "203045"))