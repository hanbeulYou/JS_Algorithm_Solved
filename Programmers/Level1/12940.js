function findDivision(n, m) {
    let value = 1;
    for(let i=1; i<=Math.min(n, m); i++) {
        if(n%i===0 && m%i===0) value = i;
    }
    return value;
}

function solution(n, m) {
    let answer = [];
    const division = findDivision(n, m);
    answer.push(division);
    answer.push(parseInt(n/division*m));
    return answer;
}