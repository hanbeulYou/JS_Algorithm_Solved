function solution(s) {
    let answer = true;
    if(s.length !== 4 && s.length !== 6) answer = false;
    s.split('').forEach((element) => {
        if(isNaN(element)) answer = false;
    });
    return answer;
}