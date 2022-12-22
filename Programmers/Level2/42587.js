function solution(priorities, location) {
    const indexQueue = new Array(priorities.length)
    let cnt = 0
    for(let i=0; i<priorities.length; i++) {
        indexQueue[i] = i;
    }

    while(priorities.length > 0) {
        const priority = priorities.shift()
        const index = indexQueue.shift()
        if(priority >= Math.max(0, ...priorities)) {
            cnt += 1
            if(index === location) {
                return cnt
            }
        } else {
            priorities.push(priority)
            indexQueue.push(index)
        }
    }
    return cnt;
}

console.log(solution([2, 1, 3, 2], 2))