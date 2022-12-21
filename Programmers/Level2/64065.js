function solution(s) {
    let n = s.length
    const sArr = s.slice(2, -2).split('},{')
    const arrays = []
    sArr.forEach((element) => {
        arrays.push(element.split(',').map((e) => Number(e)))
    })
    const sortedArrays = arrays.sort((a, b) => { return a.length - b.length })

    const answer = []
    sortedArrays.forEach((element) => {
        const newElement = element.filter((e) => !answer.includes(e))
        answer.push(newElement[0])
    })
    return answer;
}

console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"))