function changeInLowercase({cCharCode, n}) {
  const returnValue = 97+(cCharCode+n-97)%26
  return String.fromCharCode(returnValue)
}

function changeInUppercase({cCharCode, n}) {
  const returnValue = 65+(cCharCode+n-65)%26
  return String.fromCharCode(returnValue)
}

function change({c, n}) {
  if(c == ' ') return c;
  const cCharCode = c.charCodeAt(0)
  if(c >= 'a' && c <= 'z') {
    return changeInLowercase({cCharCode, n})
  }
  if(c >= 'A' && c <= 'Z') {
    return changeInUppercase({cCharCode, n})
  }
}

function solution(s, n) {
  const inputArray = s.split('')
  const answer = []
  inputArray.forEach((c) => {
    answer.push(change({c, n}))
  })
  return answer.join('');
}

//console.log(solution('z', 1))