function solution(phone_number) {
  const phoneNumberArr = phone_number.split('');
  for(let i=0; i<(phoneNumberArr.length)-4; i++) phoneNumberArr[i] = '*';
  return phoneNumberArr.join('');
}

console.log(solution("027778888"))