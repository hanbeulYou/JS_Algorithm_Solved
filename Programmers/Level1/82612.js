function solution(price, money, count) {
    let priceAll = 0;
    for(let i=1; i<= count; i++) priceAll += i;
    priceAll *= price;
    const answer = (money >= priceAll) ? 0 : priceAll-money
    return answer;
}