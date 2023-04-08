function solution(cipher, code) {
  return cipher.split('').filter((e, index) => {
    return (index+1) % code === 0 ? e : "";
  }).join('')
}