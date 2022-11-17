function solution(sizes) {
  let maxSide = 0
  sizes.forEach((element) => {
    maxSide = Math.max(maxSide, element[0], element[1])      
  })
  let otherSide = 0
  sizes.forEach((element) => {
    otherSide = Math.max(otherSide, Math.min(element[0], element[1]))
  })
  return maxSide * otherSide
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))