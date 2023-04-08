function solution(rsp) {
  const rspObj = {
    "2": "0",
    "5": "2",
    "0": "5",
  }
  return rsp.split('').map((e) => rspObj[e]).join('');
}