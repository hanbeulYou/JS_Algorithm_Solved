const engToNum = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
}

function chaneEngToNum(str, answer) {
  for(let i = 3; i <= 5; i++) {
    if(str.length >= i) {
      const newStr = str.slice(0, i)
      if(Object.keys(engToNum).includes(newStr)) {
        answer.push(engToNum[newStr])
        return str.slice(i)
      }
    }
  }
}

function solution(s) {
  const answer = []
  while(s) {
    if(isNaN(s[0])) {
      s = chaneEngToNum(s, answer)
    } else {
      answer.push(Number(s[0]))
      s = s.slice(1)
    }
  }
  return Number(answer.join(''));
}