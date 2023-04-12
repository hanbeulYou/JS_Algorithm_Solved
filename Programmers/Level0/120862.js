function solution(numbers) {
  const positive = [];
  const negative = [];
  numbers.forEach((number) => {
    if(number >= 0) return positive.push(number);
    negative.push(number);
  });
  const sortedPositive = positive.sort((a, b) => b - a);
  const sortedNegative  = negative.sort((a, b) => a - b);
  const maxPositive = sortedPositive.length > 1 ? sortedPositive[0] * sortedPositive[1] : null;
  const maxNegative = sortedNegative.length > 1 ? sortedNegative[0] * sortedNegative[1] : null;
  if(maxPositive === null && maxNegative === null) return sortedPositive[0] * sortedNegative[0];
  return Math.max(maxPositive, maxNegative);
}