function insertInterval(currentIntervals, newInterval) {
  currentIntervals.push(newInterval[0]);
  currentIntervals = currentIntervals.sort((a, b) => a.start - b.start);

  let mergedIntervals = [];

  let start = currentIntervals[0].start,
    end = currentIntervals[0].end;

  for (let i = 1; i < currentIntervals.length; i++) {
    const interval = currentIntervals[i];

    if (end >= interval.start) {
      end = Math.max(interval.end, end);
    } else {
      mergedIntervals.push([start, end]);
      start = interval.start;
      end = interval.end;
    }
  }

  mergedIntervals.push([start, end]);
  console.log(mergedIntervals);
}

insertInterval(
  [
    { start: 1, end: 3 },
    { start: 5, end: 7 },
    { start: 8, end: 12 },
    { start: 12, end: 13 },
  ],
  [{ start: 4, end: 6 }]
);
// [[1,3], [4,7], [8,13]]
