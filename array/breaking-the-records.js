function breakingRecords(scores) {
  let highestScore = scores[0];
  let lowestScore = scores[0];
  let result = [0, 0];

  scores.forEach((score) => {
    if (score > highestScore) {
      highestScore = score;
      result[0] += 1;
    }

    if (score < lowestScore) {
      lowestScore = score;
      result[1] += 1;
    }
  });

  console.log(result);
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
breakingRecords([0, 9, 3, 10, 2, 20]);
