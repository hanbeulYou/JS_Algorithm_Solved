function solution(s)
{
    const myArr = s.split('')
    const myStack = []
    myArr.forEach((element) => {
        if(myStack[myStack.length-1] === element) {
            myStack.pop()
            return
        }
        myStack.push(element)
    })
    if(myStack.length > 0) return 0
    return 1
}

console.log(solution("baabaa"))