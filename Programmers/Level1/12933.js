function solution(n) {
    const nArr = Array.from(String(n)).sort((a, b) => b-a);
    const answer = Number(nArr.join(''));
    return answer;
}