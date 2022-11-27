const canSpeack = function(value) {
  const babblings  = ['aya', 'ye', 'woo', 'ma']
  let lastBabblings = ''
  for(let i=0; i<value.length; i++) {
    let flag = true
    for(let j=2; j<=3; j++) {
      const toCheck = value.slice(i, i+j)
      if(babblings.includes(toCheck)) {
        if(lastBabblings === toCheck) {
          flag = true
          break
        }
        i += j-1
        flag = false
        lastBabblings = toCheck
        break
      }
    }
    if(flag) return false
  }
  return true
}

const reducer = function(accumulator, value) {
  return accumulator + Number(canSpeack(value))
}

function solution(babbling) {
  const answer = babbling.reduce(reducer, 0)
  return answer
}


// console.log(solution(["aya", "yee", "u"]))
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]))