function gradingStudents(grades) {
  return grades.map((gr) => {
    const diff = 5 - (gr % 5);

    if (diff < 3 && gr >= 38) {
      gr += diff;
    }
    return gr;
  });
}

console.log(
  gradingStudents([
    23,
    80,
    96,
    18,
    73,
    78,
    60,
    60,
    15,
    45,
    15,
    10,
    5,
    46,
    87,
    33,
    60,
    14,
    71,
    65,
    2,
    5,
    97,
    0,
  ])
);
