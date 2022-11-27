function solution(k, score) {
  const answer = []
  let hallOfFrame = []
  score.forEach((element) => {
    hallOfFrame.push(element)
    const sortedHallOfFrame = hallOfFrame.sort((a, b) => { return b - a})
    if(sortedHallOfFrame.length > k) {
      sortedHallOfFrame.pop()
    }
    hallOfFrame = sortedHallOfFrame
    answer.push(hallOfFrame[hallOfFrame.length-1])
  })
  return answer;
}