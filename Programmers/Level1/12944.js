function solution(arr) {
    const answer = arr.reduce((sum, element) => sum += element, 0);
    return answer/arr.length;
}

console.log(solution([1, 2, 3, 4]))