function solution(dartResult) {
  const results = []
  let dartIdx = 0
  let resultIdx = 0

  while(results.length < 3) {
    let originalScore = 0
    if(isNaN(dartResult[dartIdx+1])) {
      originalScore = Number(dartResult[dartIdx])
      dartIdx += 1
    } else {
      originalScore = 10
      dartIdx += 2
    }
    if(dartResult[dartIdx] === 'D') {
      originalScore *= originalScore
    }
    if(dartResult[dartIdx] === 'T') {
      originalScore *= originalScore * originalScore
    }
    dartIdx += 1
    if(dartResult[dartIdx] === '*') {
      if(resultIdx > 0) {
        results[resultIdx-1] *= 2
      }
      originalScore *= 2
      dartIdx += 1
    }
    if(dartResult[dartIdx] === '#') {
      originalScore *= -1;
      dartIdx += 1
    }
    results.push(originalScore)
    resultIdx += 1
  }
  const answer = results.reduce((acc, cur) => {
    return acc + cur
  }, 0)
  return answer;
}

console.log(solution("1S2D*3T"))