 function solution(players, callings) {
  const playerRanks = {};

  players.forEach((player, idx) => {
    playerRanks[player] = idx;
  })
  callings.forEach((calling) => {
    const beforeIdx = playerRanks[calling];
    const afterIdx = beforeIdx - 1;
    const afterPlayer = players[afterIdx];

    const tmp = players[beforeIdx];
    players[beforeIdx] = players[afterIdx];
    players[afterIdx] = tmp;

    playerRanks[calling] -= 1;
    playerRanks[afterPlayer] += 1;
  })
  return players;
}

console.log(solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]))