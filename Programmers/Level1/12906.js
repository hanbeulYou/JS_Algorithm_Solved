function solution(arr) {
    let answer = [arr[0]];
    let idx = 0;
    for(let i=1; i<arr.length; i++) {
        if(answer[idx]==arr[i]) continue;
        answer.push(arr[i]);
        idx += 1;
    }
    return answer;
}