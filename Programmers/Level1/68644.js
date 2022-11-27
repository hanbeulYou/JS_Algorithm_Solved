function solution(numbers) {
  const sums = new Set()
  for(let i=0; i<numbers.length; i++) {
    for(let j=i+1; j<numbers.length; j++) {
      sums.add(numbers[i]+numbers[j])
    }
  }
  const sumsArray = Array.from(sums)
  const answer = sumsArray.sort((a, b) => {
    return a-b
  })
  return answer
}