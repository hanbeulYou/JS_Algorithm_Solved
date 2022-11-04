function solution(a, b) {

  const accDays = [
    0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335,
  ]

  const days = [
    'THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 
  ]

  return days[(accDays[a-1]+b)%7]
}

console.log(solution(2, 1))