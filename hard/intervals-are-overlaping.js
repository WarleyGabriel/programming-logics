function checkOverlaping(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }

  intervals.sort((a, b) => a.start - b.start);

  for (i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    const nextInterval = intervals[i + 1];
    if (nextInterval && nextInterval.start <= interval.end) {
      return true;
    }
  }
  return false;
}

console.log(
  checkOverlaping([
    { start: 1, end: 4 },
    { start: 7, end: 9 },
    { start: 2, end: 5 },
  ])
);
//Output: true

console.log(
  checkOverlaping([
    { start: 6, end: 7 },
    { start: 2, end: 4 },
    { start: 5, end: 9 },
  ])
);
//Output: true

console.log(
  checkOverlaping([
    { start: 1, end: 4 },
    { start: 2, end: 6 },
    { start: 3, end: 9 },
  ])
);
//Output: true

console.log(
  checkOverlaping([
    { start: 1, end: 4 },
    { start: 5, end: 6 },
    { start: 8, end: 9 },
  ])
);
//Output: false
