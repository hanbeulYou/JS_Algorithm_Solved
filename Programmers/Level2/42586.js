function solution(progresses, speeds) {
    const answer = []
    while(progresses.length > 0) {
        let addDate = 1
        if((100-progresses[0])%speeds[0]===0) {
            addDate = parseInt((100-progresses[0])/speeds[0])
        } else {
            addDate = parseInt((100-progresses[0])/speeds[0])+1
        }
        for(let i=0; i<progresses.length; i++) {
            progresses[i] += speeds[i] * addDate
        }
        let finish = 0
        while(progresses.length > 0 && progresses[0] >= 100) {
            progresses.shift()
            speeds.shift()
            finish += 1
        }
        answer.push(finish)
    }
    return answer;
}

console.log(solution([1, 1, 50], [100, 2, 1]))