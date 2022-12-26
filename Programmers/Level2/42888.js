function changeName(element, id, lastName) {
    if(element[1] === id) {
        element[2] = lastName
    }
    return element
}

function solution(record) {
    const records = []
    const idList = {}
    const answer = []

    record.forEach((element) => {
        const splitedRecord = element.split(' ')
        records.push(splitedRecord)
        if(splitedRecord[0] === 'Enter' || splitedRecord[0] === 'Change') {
            idList[splitedRecord[1]] = splitedRecord[2]
        }
    })
    records.forEach((element) => {
        if(element[0] === 'Enter') {
            answer.push(`${idList[element[1]]}님이 들어왔습니다.`)
            return
        }
        if(element[0] === 'Leave') {
            answer.push(`${idList[element[1]]}님이 나갔습니다.`)
        }
    })
    return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]))