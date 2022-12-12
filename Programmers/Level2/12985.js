function nextStage(num) {
    if(num%2===0) return num/2
    return (num+1)/2
}

function isMatch(a, b) {
    if(a<b) {
        if(a%2===1 && a+1===b) return true
        return false
    }
    if(a>b) {
        if(b%2===1 && b+1===a) return true
        return false
    }
}

function solution(n,a,b)
{
    let answer = 1
    while(!isMatch(a,b)) {
        a = nextStage(a)
        b = nextStage(b)
        answer += 1
    }
    return answer;
}

console.log(solution(8, 4, 7))