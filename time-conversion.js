function timeConversion(timeString) {
  const format = timeString.slice(8, 10);
  let minutesAndSeconds = timeString.slice(2, 8);
  let hour = timeString.slice(0, 2);

  if (format === "PM" && hour !== "12") {
    hour = parseInt(hour) + 12;
  }

  if (format === "AM" && hour === "12") {
    hour = "00";
  }

  return `${hour}${minutesAndSeconds}`;
}

console.log(timeConversion("11:05:45PM"));
console.log(timeConversion("12:05:45PM"));
console.log(timeConversion("12:05:45AM"));
console.log(timeConversion("00:05:45AM"));
