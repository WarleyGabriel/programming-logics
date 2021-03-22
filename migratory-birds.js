function migratoryBirds(arr) {
  const obj = getTypeCount(arr);

  const maxValue = Math.max(...Object.values(obj));
  const types = Object.keys(obj).filter((key) => obj[key] === maxValue);
  console.log(Math.min(...types));
}

function getTypeCount(arr) {
  return arr.reduce((result, type) => {
    if (!result[type]) {
      result[type] = 1;
    } else {
      result[type] += 1;
    }
    return result;
  }, {});
}

migratoryBirds([1, 2, 3, 3, 2, 4, 5, 4, 3, 2, 4, 1, 3, 4, 2]);
