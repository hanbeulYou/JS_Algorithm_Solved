function isPrime(num) {
    let cnt = 0
    for(let i=1; i<=Math.sqrt(num); i++) {
        if(num%i===0) cnt += 1
    }
    if(cnt === 1) return 1
    return 0
}

function solution(nums) {
    const N = nums.length
    let answer = 0

    for(let i=0; i<N-2; i++) {
        for(let j=i+1; j<N-1; j++) {
            for(let k=j+1; k<N; k++) {
                answer += isPrime(nums[i]+nums[j]+nums[k])
            }
        }
    }
    return answer;
}