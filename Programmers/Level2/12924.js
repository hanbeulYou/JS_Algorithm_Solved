function solution(n) {
    let leftIdx = 1
    let rightIdx = 1
    let sum = 1
    let cnt = 0

    while(rightIdx <= n) {
        if(sum === n) {
            cnt += 1
            rightIdx += 1
            sum += rightIdx
            sum -= leftIdx
            leftIdx += 1
        } 
        if(sum < n) {
            rightIdx += 1
            sum += rightIdx
        }
        if(sum > n) {
            sum -= leftIdx
            leftIdx += 1
        }
    }
    return cnt;
}