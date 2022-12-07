function getDivisor(yellow) {
    const divisors = []
    for(let i=1; i<=Math.sqrt(yellow); i++) {
        if(yellow%i===0) {
            divisors.push([i, yellow/i])
        }
    }
    return divisors
}

function solution(brown, yellow) {
    const divisors = getDivisor(yellow)
    const answer = []
    divisors.forEach((divisor) => {
        if((divisor[0] + divisor[1] + 2)*2 === brown) {
            answer.push(divisor[1]+2)
            answer.push(divisor[0]+2)
        }
    })
    return answer;
}

// console.log(solution(10, 2))