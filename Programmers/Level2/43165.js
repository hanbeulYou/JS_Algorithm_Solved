let answer = 0

function calc(numbers, operators, target) {
    let acc = 0;
    for(let i=0; i<numbers.length; i++) {
        if(operators[i]==='+') {
            acc += numbers[i]
            continue
        }
        acc -= numbers[i]
    }
    if(acc === target) return 1
    return 0
}

function dfs(numbers, operators, target, idx) {
    if(idx === numbers.length) {
        answer += calc(numbers, operators, target)
        return
    }
    if(operators[idx] === undefined) {
        operators[idx] = '+'
        dfs(numbers, operators, target, idx+1)
    }
    if(operators[idx] === '+') {
        operators[idx] = '-'
        dfs(numbers, operators, target, idx+1)
    }
    operators[idx] = undefined
}

function solution(numbers, target) {
    const operators = new Array(numbers.length)
    dfs(numbers, operators, target, 0)
    return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3))