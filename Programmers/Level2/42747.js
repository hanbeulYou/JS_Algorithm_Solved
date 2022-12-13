function solution(citations) {
    const N = citations.length
    citations = citations.sort((a, b) => { return a-b })
    for(let i=0; i<N; i++) {
        if(citations[i] >= N-i) return N-i
    }
    return 0
}