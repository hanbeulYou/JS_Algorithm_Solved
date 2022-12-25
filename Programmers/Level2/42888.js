function changeName(element, id, lastName) {
    if(element[1] === id) {
        element[2] = lastName
    }
    return element
}

function solution(record) {
    const records = []
    const idList = new Set()
    const answer = []

    record.forEach((element) => {
        const splitedRecord = element.split(' ')
        records.push(splitedRecord)
        idList.add(splitedRecord[1])
    })
    for(let i=records.length-1; i>=0; i--) {
        if(idList.has(records[i][1]) && records[i][2] !== undefined) {
            for(let j=0; j<records.length; j++) {
                if(records[j][1] === records[i][1]) {
                    records[j][2] = records[i][2]
                }
            }
            idList.delete(records[i][1])
        }
    }
    records.forEach((element) => {
        if(element[0] === 'Enter') {
            answer.push(`${element[2]}님이 들어왔습니다.`)
            return
        }
        if(element[0] === 'Leave') {
            answer.push(`${element[2]}님이 나갔습니다.`)
        }
    })
    return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]))