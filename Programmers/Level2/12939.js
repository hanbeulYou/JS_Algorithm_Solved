function solution(s) {
    const numberArray = s.split(' ')
    let maxNum = Number.NEGATIVE_INFINITY
    let minNum = Number.POSITIVE_INFINITY

    numberArray.forEach((element) => {
        maxNum = Math.max(Number(element), maxNum)
        minNum = Math.min(Number(element), minNum)
    })
    const answer = [String(minNum), String(maxNum)].join(' ')
    return answer;
}

console.log(solution("1 2 3 4"))