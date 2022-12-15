const PAIR = {
    '}': '{',
    ']': '[',
    ')': '(',
}

function isValid(brackets) {
    const stack = []
    for(let i=0; i<brackets.length; i++) {
        const bracket = brackets[i]
        if(PAIR[bracket] === undefined) {
            stack.push(bracket) 
            continue
        }
        if(stack[stack.length-1] !== PAIR[bracket]) return false
        stack.pop()
    }
    if(stack.length > 0) return false
    return true
}

function solution(s) {
    const brackets = s.split('')
    let answer = 0
    for(let i=0; i<s.length; i++) {
        if(isValid(brackets)) answer += 1
        brackets.push(brackets.shift())
    }
    return answer;
}