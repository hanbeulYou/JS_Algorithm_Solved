function solution(nums) {
  const cntPoketmon = new Object()
  nums.forEach((e) => {
    if(cntPoketmon[e]) {
      cntPoketmon[e] += 1
    } else {
      cntPoketmon[e] = 1
    }
  })
  const valueList = Object.values(cntPoketmon)
  return Math.min(valueList.length, (nums.length)/2)
}