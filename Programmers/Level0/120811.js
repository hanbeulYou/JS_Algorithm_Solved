function solution(array) {
  const sortedArray = array.sort((a, b) => a-b);
  const idx = Math.floor(array.length/2);
  return sortedArray[idx];
}