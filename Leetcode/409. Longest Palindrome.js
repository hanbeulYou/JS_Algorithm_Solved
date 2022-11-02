/**
 * @param {string} s
 * @return {number}
 */

const makeDefaultDict = (element, dictObj) => {
  if(element in dictObj) dictObj[element] += 1;
  else dictObj[element] = 1;
}

var longestPalindrome = function(s) {
  const inputArr = s.split('');
  const dictObj = {};
  let answer = 0;

  inputArr.forEach((element) => {
    makeDefaultDict(element, dictObj);
  });

  let flag = 0;
  for(let key in dictObj) {
    if(dictObj[key] % 2 == 1) {
      flag = 1;
      answer += dictObj[key]-1;
    }
    else answer += dictObj[key];
  }
  return answer + flag;
};

console.log(longestPalindrome('abccccdd'))