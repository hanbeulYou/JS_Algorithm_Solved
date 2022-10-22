function solution(s){
    let pCnt = 0;
    let yCnt = 0;
    [...s].forEach(element => {
        if(element.toLowerCase() === 'p') pCnt += 1;
        if(element.toLowerCase() === 'y') yCnt += 1;
    });
    if(pCnt === yCnt) return true;
    return false;
}