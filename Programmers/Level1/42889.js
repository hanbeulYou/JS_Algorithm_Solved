function solution(N, stages) {
    const players = []
    for(let i=0; i<=N+1; i++) {
        players.push(0)
    }
    stages.forEach((element) => {
        for(let i=0; i<=element; i++) {
            players[i] += 1
        }
    })
    const rate = []
    for(let i=1; i<=N; i++) {
        rate.push([(players[i]-players[i+1])/[players[i]], i])
    }
    rate.sort((a, b) => {
        if(a[0]!==b[0]) {
            return b[0] - a[0]
        }
        else {
            return a[1] - b[1]
        }
    })
    const answer = []
    rate.forEach((element) => {
        answer.push(element[1])
    })
    return answer;
}