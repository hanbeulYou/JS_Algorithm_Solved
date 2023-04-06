function sol(str) {
  if(str === str.toUpperCase()) return str.toLowerCase();
  return str.toUpperCase();
}

function solution(my_string) {
  return my_string.split('').map(s => sol(s)).join('');;
}