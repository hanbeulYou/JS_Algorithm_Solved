function solution(n) {
    const sqrtN = Math.sqrt(n);
    if (sqrtN%1 === 0) return (sqrtN+1)**2
    return -1;
}