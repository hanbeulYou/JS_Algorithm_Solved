function inorder(n, from, through, to) {
  if(n === 1) return [[from, to]];
  let arr = [];
  arr = arr.concat(inorder(n-1, from, to, through));
  arr.push([from, to]);
  arr = arr.concat(inorder(n-1, through, from, to));
  return arr;
}

function solution(n) {
  return inorder(n, 1, 2, 3);
}