const answer = {
    cnt: 0,
    removed: 0,
}

function convert(s) {
    const splitedS = s.split('')
    const x = splitedS.filter((element) => element === '1').join('')
    const xBin = x.length.toString(2)

    answer.cnt += 1
    answer.removed += splitedS.reduce((acc, cur) => {
        return acc += (cur === '0' ? 1 : 0)  
    }, 0)

    return xBin
}

function solution(s) {
    while(s.length > 1) {
        s = convert(s)
    }
    return [answer.cnt, answer.removed];
}

console.log(solution("110010101001"))