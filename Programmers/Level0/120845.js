function solution(box, n) {
  return box.reduce((acc, cur) => {
    return acc * parseInt(cur/n);
  }, 1)
}