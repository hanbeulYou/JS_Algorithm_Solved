function solution(s) {
    const sArray = s.split('')
    let flag = true
    let answer = 0

    let x
    let sameWithX
    let notSameWithX

    while(sArray.length > 0) {
        if(flag) {
            x = sArray.splice(0, 1)[0]
            sameWithX = 1
            notSameWithX = 0
            flag = false
        }

        if(sArray[0] === x) {
            sameWithX += 1
            sArray.splice(0, 1)
        } else {
            notSameWithX += 1
            sArray.splice(0, 1)
        }

        if(sameWithX === notSameWithX) {
            flag = true
            answer += 1
        }
    }
    if(!flag) answer += 1
    return answer;
}

console.log(solution("aaabbaccccabba"))