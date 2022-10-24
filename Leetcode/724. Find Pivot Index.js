var pivotIndex = function(nums) {
  let rightSum = nums.reduce((sum, element) => sum += element, 0);
  let leftSum = 0;
  let flag = -1;
  for(let i=0; i<nums.length; i++) {
    if(i) leftSum += nums[i-1];
    rightSum -= nums[i];
    if(leftSum===rightSum) {
        flag = i;
        break;
    }
  }
  return flag;
};

console.log(pivotIndex([1,7,3,6,5,6]))