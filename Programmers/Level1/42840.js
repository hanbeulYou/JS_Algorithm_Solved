function solution(answers) {
  const N = answers.length
  const firstSupoja = []
  const secondSupoja = []
  const thirdSupoja = []

  for(let i=0; i<N; i++) {
    firstSupoja.push(i%5+1)
    if(i%2===0) secondSupoja.push(2)
    if(i%8===1) secondSupoja.push(1)
    if(i%8===3) secondSupoja.push(3)
    if(i%8===5) secondSupoja.push(4)
    if(i%8===7) secondSupoja.push(5)
    if(i%10===0 || i%10===1) thirdSupoja.push(3)
    if(i%10===2 || i%10===3) thirdSupoja.push(1)
    if(i%10===4 || i%10===5) thirdSupoja.push(2)
    if(i%10===6 || i%10===7) thirdSupoja.push(4)
    if(i%10===8 || i%10===9) thirdSupoja.push(5)
  }

  const cnt = [0, 0, 0]

  for(let i=0; i<N; i++) {
    if(answers[i] === firstSupoja[i]) cnt[0] += 1
    if(answers[i] === secondSupoja[i]) cnt[1] += 1
    if(answers[i] === thirdSupoja[i]) cnt[2] += 1
  }

  const maxCnt = Math.max(...cnt)
  const answer = []
  for(let i=0; i<3; i++) {
    if(maxCnt === cnt[i]) answer.push(i+1)
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]))