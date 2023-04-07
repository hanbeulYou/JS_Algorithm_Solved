function solution(m, n, startX, startY, balls) {
  const answer = [];

  balls.forEach((ball) => {
    const newBalls = [
      [0 - ball[0], ball[1]],
      [0 - ball[0], 0 - ball[1]],
      [0 - ball[0], 2 * n - ball[1]],
      [2 * m - ball[0], ball[1]],
      [2 * m - ball[0], 0 - ball[1]],
      [2 * m - ball[0], 2 * n - ball[1]],
      [ball[0], 0 - ball[1]],
      [ball[0], 2 * n - ball[1]],
    ];
    let minFar = 1000000;
    newBalls.forEach((newBall) => {
      // 쿠션을 맞을 때 서로 일직선에 있는 경우 차단해야함
      minFar = Math.min(((newBall[0] - startX) ** 2) + ((newBall[1] - startY) ** 2));
    })
    answer.push(minFar);
  });
  return answer;
}

console.log(solution(10, 10, 3, 7, [[7, 7], [2, 7], [7, 3]]));