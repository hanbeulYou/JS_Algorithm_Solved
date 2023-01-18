function solution(elements) {
  const doubleElements = [...elements, ...elements];
  const sequenceSet = new Set;
  for(let i=1; i<=elements.length; i++) {
    for(let j=0; j<elements.length; j++) {
      const tmpSequence = doubleElements.slice(j, j+i)
      const sequenceSum = tmpSequence.reduce((acc, cur) => {
        return acc + cur;
      }, 0)
      sequenceSet.add(sequenceSum)
    }
  }
  return sequenceSet.size;
}