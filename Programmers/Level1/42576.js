function solution(participant, completion) {
    const dictObj = {}
    let answer

    participant.forEach((element) => {
        if(!dictObj.hasOwnProperty(element)) {
            dictObj[element] = 0
        }
        dictObj[element] += 1
    })
    completion.forEach((element) => {
        dictObj[element] -= 1
    })

    for(const [key, value] of Object.entries(dictObj)) {
        if(value > 0) {
            answer = key
        }
    }
    return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))