function isAlpha(char) {
    if(char >= 'A' && char <= 'Z') return true
    return false
}

function makeSubset(str) {
    const strArr = str.toUpperCase().split('')
    const resultSet = new Set()
    for(let i=0; i<strArr.length-1; i++) {
        if(isAlpha(strArr[i]) && isAlpha(strArr[i+1])) {
            resultSet.add(strArr.slice(i, i+2).join(''))
        }
    }
    return resultSet
}

function makeUnion(set1, set2) {
    const setA = set1.slice()
    const setB = set2.slice()
    const union = new Array()
    setA.forEach((e) => {
        union.push(e)
        const indexOfElement = setB.indexOf(e)
        if(indexOfElement !== -1) {
            setB.splice(indexOfElement, 1)
        }
    })
    setB.forEach((e) => {
        union.push(e)
    })
    return union
}

function makeInter(set1, set2) {
    const setA = set1.slice()
    const setB = set2.slice()
    const inter = new Array()
    setA.forEach((e) => {
        const indexOfElement = setB.indexOf(e)
        if(indexOfElement !== -1) {
            setB.splice(indexOfElement, 1)
            inter.push(e)
        }
    })
    return inter
}

function solution(str1, str2) {
    const str1Set = makeSubset(str1)
    const str2Set = makeSubset(str2)
    union = makeUnion(str1Set, str2Set)
    inter = makeInter(str1Set, str2Set)
    if(union.size === 0) return 65536
    return parseInt(inter.size/union.size*65536);
}
// set이 아니라 array로 풀어야함
console.log(solution("handshake", "shake hands"))