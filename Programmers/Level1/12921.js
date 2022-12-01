function solution(n) {
    const table = []
    for(let i=0; i<=n; i++) {
        table.push(1)
    }
    table[0] = 0
    table[1] = 0
    for(let i=2; i<=Math.sqrt(n); i++) {
        for(let j=i*2; j<=n; j+=i) {
            table[j] = 0
        }
    }
    const answer = table.reduce((acc, cur) => { return acc + cur }, 0)
    return answer;
}

console.log(solution(10))