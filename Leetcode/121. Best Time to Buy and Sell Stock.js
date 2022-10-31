/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const minArr = [];
  let myMin = prices[0];
  let myMax = prices[0];
  let revenue = 0;
  for(let i=0; i<prices.length; i++) {
    if(myMin > prices[i]) {
      minArr.push(revenue);
      myMin = prices[i];
      myMax = prices[i];
    }
    if(myMax < prices[i]) {
      myMax = prices[i];
      revenue = myMax-myMin;
    }
  }
  minArr.push(revenue);
  return Math.max(...minArr);
};

console.log(maxProfit([7,1,5,3,6,4]))