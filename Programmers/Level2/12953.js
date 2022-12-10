const getGCD = (num1, num2) => {
    for(let i=Math.min(num1, num2); i>=2; i--) {
        if(num1%i===0 && num2%i===0) {
            return i
        }
    }
    return 1
}

const getLCM = (num1, num2) => {
    const gcd = getGCD(num1, num2)
    return num1 * num2 / gcd
}

function solution(arr) {
    let gcd = arr[0]
    const answer = arr.reduce((acc, cur) => {
        return getLCM(acc, cur)
    }, 1)
    return answer
}

console.log(solution([2, 14, 7]))