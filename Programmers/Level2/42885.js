function solution(people, limit) {
    const sortedPeople = people.sort((a, b) => { return a-b })
    let answer = 0;
    while(sortedPeople.length > 0) {
        if(sortedPeople.length === 1) {
            answer += 1
            break
        }
        if(sortedPeople[sortedPeople.length-1] + sortedPeople[0] <= limit) {
            answer += 1
            sortedPeople.shift()
            sortedPeople.pop()
            continue
        }
        answer += 1
        sortedPeople.pop()
    }
    return answer;
}