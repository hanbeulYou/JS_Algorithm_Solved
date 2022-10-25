function solution(s) {
    const sLen = s.length;
    return s.slice(Math.round(sLen/2)-1, Math.floor(sLen/2)+1);
}