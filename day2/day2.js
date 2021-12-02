let testInput = [
  "forward 5",
  "down 5",
  "forward 8",
  "up 3",
  "down 8",
  "forward 2",
].map((command) => convertToObj(command));

fs = require("fs");

let day2Input = dayInputFromFile("day2In.txt");

function dayInputFromFile(fileName) {
  let fileContent = fs.readFileSync(fileName, { encoding: "utf-8" });
  return fileContent.split("\n").map((command) => convertToObj(command));
}

function convertToObj(command) {
  let commandSplit = command.split(" ");
  return { move: commandSplit[0], units: commandSplit[1] };
}

function findPosition(movements) {
  let horizontal = 0;
  let depth = 0;
  for (let i = 0; i < movements.length; i++) {
    if (movements[i]["move"] == "forward") {
      horizontal += parseInt(movements[i]["units"]);
    } else if (movements[i]["move"] == "down") {
      depth += parseInt(movements[i]["units"]);
    } else if (movements[i]["move"] == "up") {
      depth -= parseInt(movements[i]["units"]);
    }
  }
  let result = horizontal * depth;
  return result;
}

// console.log(findPosition(day2Input));

// PART 2

function findNewPosition(movements) {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  for (let i = 0; i < movements.length; i++) {
    if (movements[i]["move"] == "down") {
      aim += parseInt(movements[i]["units"]);
    } else if (movements[i]["move"] == "up") {
      aim -= parseInt(movements[i]["units"]);
    } else if (movements[i]["move"] == "forward") {
      horizontal += parseInt(movements[i]["units"]);
      depth += aim * parseInt(movements[i]["units"]);
    }
  }
  console.log(horizontal, depth);
  let result = horizontal * depth;
  return result;
}

console.log(findNewPosition(day2Input));
