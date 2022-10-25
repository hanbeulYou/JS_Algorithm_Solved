function solution(n) {
    let answer = '';
    for(let i=0; i<n; i++){
        const element = i%2 ? '박' : '수';
        answer += element;
    }
    return answer;
}