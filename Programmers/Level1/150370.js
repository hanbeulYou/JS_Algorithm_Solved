const validities = {}

function makeDate(date) {
  const year = parseInt(date.slice(0, 4))*28*12
  const month = parseInt(date.slice(5, 7))*28
  const day = parseInt(date.slice(8, 10))
  return year + month + day
}

function makeValidities(terms) {
  terms.forEach((term) => {
    [whichTerm, month] = term.split(" ")
    validities[whichTerm] = parseInt(month) * 28
  })
}

function solution(today, terms, privacies) {
  const todayDate = makeDate(today)
  const answer = []
  makeValidities(terms)
  console.log(todayDate)
  privacies.forEach((privacy, index) => {
    const startDate = makeDate(privacy)
    const validity = privacy.slice(-1)
    console.log(startDate+validities[validity])
    if(startDate + validities[validity] <= todayDate) answer.push(index+1)
  })
  return answer
}