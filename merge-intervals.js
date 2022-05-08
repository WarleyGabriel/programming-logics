function merge(intervals) {
  if (intervals.length < 2) {
    return intervals;
  }

  intervals.sort((a, b) => a.start - b.start);

  const mergedIntervals = [];

  let start = intervals[0].start,
    end = intervals[0].end;

  for (i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval.start <= end) {
      // overlapping intervals, adjust the 'end'
      end = Math.max(interval.end, end);
    } else {
      // non-overlapping interval, add the previous interval and reset
      mergedIntervals.push([start, end]);
      start = interval.start;
      end = interval.end;
    }
  }
  // add the last interval
  mergedIntervals.push([start, end]);
  return mergedIntervals;
}

console.log(
  merge([
    { start: 1, end: 4 },
    { start: 7, end: 9 },
    { start: 2, end: 5 },
  ])
);
//Output: [[1,5], [7,9]]

console.log(
  merge([
    { start: 6, end: 7 },
    { start: 2, end: 4 },
    { start: 5, end: 9 },
  ])
);
//Output: [[2,4], [5,9]]

console.log(
  merge([
    { start: 1, end: 4 },
    { start: 2, end: 6 },
    { start: 3, end: 9 },
  ])
);
//Output: [[1,6]]
