// Example 1:
// Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
// Output: [2, 3], [5, 6], [7, 7]
// Explanation: The output list contains the common intervals between the two lists.

// Example 2:
// Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
// Output: [5, 7], [9, 10]
// Explanation: The output list contains the common intervals between the two lists.

function merge(intervals_a, intervals_b) {
  let result = [],
    i = 0,
    j = 0;

  while (i < intervals_a.length && j < intervals_b.length) {
    // check if intervals overlap and intervals_a[i]'s start time lies within the other intervals_b[j]
    a_overlaps_b =
      intervals_a[i].start >= intervals_b[j].start &&
      intervals_a[i].start <= intervals_b[j].end;

    // check if intervals overlap and intervals_b[j]'s start time lies within the other intervals_a[i]
    b_overlaps_a =
      intervals_b[j].start >= intervals_a[i].start &&
      intervals_b[j].start <= intervals_a[i].end;

    // store the the intersection part
    if (a_overlaps_b || b_overlaps_a) {
      result.push([
        Math.max(intervals_a[i].start, intervals_b[j].start),
        Math.min(intervals_a[i].end, intervals_b[j].end),
      ]);
    }
    // move next from the interval which is finishing first
    if (intervals_a[i].end < intervals_b[j].end) {
      i += 1;
    } else {
      j += 1;
    }
  }

  console.log(result);
}

merge(
  [
    { start: 1, end: 3 },
    { start: 5, end: 6 },
    { start: 7, end: 9 },
  ],
  [
    { start: 2, end: 3 },
    { start: 5, end: 7 },
  ]
);
