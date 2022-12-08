function solution(n, words) {
    const visited = []
    const answer = []
    for(const idx in words) {
        if(visited.includes(words[idx])) {
            answer.push((idx%n)+1)
            answer.push(parseInt(idx/n)+1)
            return answer
        }
        if(idx > 0) {
            const lastWord = visited[visited.length-1]
            if(lastWord[lastWord.length-1] !== words[idx][0]) {
                answer.push((idx%n)+1)
                answer.push(parseInt(idx/n)+1)
                return answer
            }
        }
        visited.push(words[idx])
    }
    return [0, 0];
}

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))