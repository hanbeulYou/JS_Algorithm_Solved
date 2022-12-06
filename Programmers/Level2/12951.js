function solution(s) {
    const lowerCaseString = s.toLowerCase()
    const lowerCaseArray = lowerCaseString.split('')
    const N = lowerCaseArray.length

    lowerCaseArray[0] = lowerCaseArray[0].toUpperCase()
    for(let i=1; i<N-1; i++) {
        if(lowerCaseArray[i] === ' ') {
            lowerCaseArray[i+1] = lowerCaseArray[i+1].toUpperCase()
        }
    }
    return lowerCaseArray.join('');
}