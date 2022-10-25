function cntDivisor(num) {
    let cnt = 0;
    for(let i=1; i<=num; i++) if(num%i===0) cnt += 1;
    return cnt;
}

function solution(left, right) {
    let answer = 0;
    for(let i=left; i<=right; i++){
        const cnt = cntDivisor(i);
        if(cnt%2) answer -= i;
        else answer += i;
    }
    return answer;
}