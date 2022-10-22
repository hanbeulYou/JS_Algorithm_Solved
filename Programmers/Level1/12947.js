function solution(x) {
    let tmpX = x;
    let sumNums = 0;
    while(tmpX) {
        sumNums += tmpX % 10;
        tmpX = parseInt(tmpX/10);
    }
    return x%sumNums ? false : true;
}