fs = require("fs");

let testInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
let day1Input = dayInputFromFile("day1In.txt");

function dayInputFromFile(fileName) {
  let fileContent = fs.readFileSync(fileName, { encoding: "utf-8" });
  return fileContent.split("\n").map((num) => parseInt(num));
}

function findNumberOfMeasurementIncreases(measurements) {
  let counter = 0;
  for (let i = 1; i < measurements.length; i++) {
    if (measurements[i] - measurements[i - 1] > 0) {
      counter += 1;
    }
  }
  return counter;
}

const res = findNumberOfMeasurementIncreases(day1Input);
// console.log(res);

// PART TWO

function findNumberOfMeasurementIncreasesSliding(measurements) {
  let counter = 0;
  let previousSliding = measurements[0] + measurements[1] + measurements[2];
  let currentSliding = 0;
  for (let i = 1; i < measurements.length - 2; i++) {
    currentSliding =
      measurements[i] + measurements[i + 1] + measurements[i + 2];
    if (currentSliding > previousSliding) {
      counter += 1;
    }
    previousSliding = currentSliding;
  }
  return counter;
}

console.log(findNumberOfMeasurementIncreasesSliding(day1Input));
