function solution(num) {
    let answer = 0;
    while(answer <= 500) {
        if(num == 1) break;
        num = num%2 ? num*3 + 1 : parseInt(num/2);
        answer += 1;
    }
    answer = answer>500 ? -1 : answer;
    return answer;
}

console.log(solution(626331))