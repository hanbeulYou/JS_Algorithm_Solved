function solution(s){
    const sToArray = s.split('')
    let cnt = 0
    let flag = true
    sToArray.forEach((element) => {
        if(element === '(') {
            cnt += 1
            return
        }
        if(cnt === 0) flag = false
        cnt -= 1
    })
    return (flag === true && cnt === 0)
}

console.log(solution("(())()"))