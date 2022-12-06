function ascending(a, b) {
    return a - b
}

function solution(A,B){
    const N = A.length
    const sortedA = A.sort(ascending)
    const sortedB = B.sort(ascending)

    let answer = 0
    for(let i=0; i<N; i++) {
        answer += sortedA[i] * sortedB[N-1-i]
    }
    return answer;
}