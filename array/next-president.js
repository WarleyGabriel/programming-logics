const votes = [1, 2, 3, 1, 1, 2, 5, 1, 1];

main(votes);

function main(votes) {
  const result = resolveVotes(votes);

  let president = 0;

  Object.keys(result).forEach((candidate) => {
    if (Object.values(candidate) > Object.values(president)) {
      president = candidate;
    }
  });

  console.log(president);
}

function resolveVotes(arr) {
  return arr.reduce((r, i) => {
    if (!r[i]) {
      r[i] = 1;
    } else {
      r[i]++;
    }
    return r;
  }, {});
}
