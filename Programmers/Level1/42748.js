function solution(array, commands) {
  const answer = [];
  commands.forEach((command) => {
    const sliceStrArray = array.slice(command[0]-1, command[1])
    const sliceNumArray = []
    sliceStrArray.forEach((element) => {
      sliceNumArray.push(Number(element))
    })
    sliceNumArray.sort((a, b) => { return a - b})
    answer.push(sliceNumArray[command[2]-1])
  })
  return answer;
}
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))