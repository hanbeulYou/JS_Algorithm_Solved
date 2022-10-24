var runningSum = function(nums) {
  const myArr = [];
  myArr.push(nums[0]);
  for(let i=0; i<nums.length-1; i++) myArr.push(myArr[i]+nums[i+1]);
  return myArr;
};