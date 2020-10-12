function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const applesPosition = apples.map((p) => {
    return p + a;
  });

  const orangesPosition = oranges.map((p) => {
    return p + b;
  });

  dropInHouse(s, t, applesPosition);
  dropInHouse(s, t, orangesPosition);
}

function dropInHouse(s, t, arr) {
  let drop = 0;
  arr.forEach((element) => {
    if (element >= s && element <= t) {
      drop += 1;
    }
  });
  console.log(drop);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);

// --- //

function countApplesAndOranges2(s, t, a, b, apples, oranges) {
  console.log(apples.map((p) => p + a).filter((p) => p >= s && p <= t).length);
  console.log(oranges.map((p) => p + b).filter((p) => p >= s && p <= t).length);
}

countApplesAndOranges2(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
