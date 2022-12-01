function stepOne(new_id) {
    return new_id.toLowerCase().split('')
}

function stepTwo(idArray) {
    const canUse = ['-', '_', '.']
    for(let alpha = 97; alpha <= 122; alpha++) {
        canUse.push(String.fromCharCode(alpha))
    }
    for(let num = 48; num <= 57; num++) {
        canUse.push(String.fromCharCode(num))
    }
    return idArray.filter(word => canUse.includes(word))
}

function stepThree(filteredId) {
    let idx = 0
    while(idx < filteredId.length-1) {
        if(filteredId[idx] === '.' && filteredId[idx+1] === '.') {
            filteredId.splice(idx+1, 1)
        } else {
            idx += 1
        }
    }
}

function stepFour(filteredId) {
    const spliceIdx = [filteredId.length-1, 0]
    for(let idx of spliceIdx) {
        if(filteredId[idx] === '.') {
            filteredId.splice(idx, 1)
        }
    }
}

function stepFive(filteredId) {
    if(filteredId.length === 0) {
        filteredId.push('a')
    }
}

function stepSix(filteredId) {
    if(filteredId.length >= 16) {
        filteredId.splice(15)
    }
    stepFour(filteredId)
}

function stepSeven(filteredId) {
    if(filteredId.length < 3) {
        const lastId = filteredId[filteredId.length-1]
        while(filteredId.length !== 3) {
            filteredId.push(lastId)
        }
    }
}

function solution(new_id) {
    const idArray = stepOne(new_id)
    const filteredId = stepTwo(idArray)
    stepThree(filteredId)
    stepFour(filteredId)
    stepFive(filteredId)
    stepSix(filteredId)
    stepSeven(filteredId)
    return filteredId.join('')
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"))