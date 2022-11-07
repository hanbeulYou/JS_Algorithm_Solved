function solution(d, budget) {
    d = d.sort((a, b) => { return a-b; });
    let total = 0;
    let cnt = 0;
    for(let e of d) {
        total += e;
        if(total <= budget) cnt += 1;
    }
    return cnt;
}

console.log(solution([1,3,2,5,4,1,1,1,2,1], 8))