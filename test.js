let text = "1,2";
const myArray = text.split(",");
// console.log(myArray[0]);

// How do I receive input from the players to play game
// I need to collect the row and column from the player and check if it is their turn to play

// I have an array where I store my players. Now I want to determine when it is the turn of each palyer to play the game.

let array = [
  ["X", "X", "O"],
  ["O", "O", "X"],
  ["O", "X", "O"],
];

function leftDiagonal() {
  let leftDiag = [];
  let rightDiag = [];
  for (let i = 0; i < array.length; i++) {
    const row = array[i];

    leftDiag.push(array[i][i]);
    rightDiag.push(array[i][array.length - 1 - i]);
  }

  console.log(leftDiag);
}

// leftDiagonal();

let winState = false;

function checkGameStatus() {
  let leftDiag = [];
  let rightDiag = [];
  for (let i = 0; i < array.length; i++) {
    const row = array[i];
    let colArray = [];

    for (let j = 0; j < array.length; j++) {
      leftDiag.push(array[i][i]);
      rightDiag.push(array[i][array.length - 1 - i]);
      const column = array[j][i];
      colArray.push(column);
    }

    // Check if the row contains all X or all O values
    let allXRow = row.every((element) => element === "X");
    let allORow = row.every((element) => element === "O");

    // Check if the column contains all X or all O values
    let allXCol = colArray.every((element) => element === "X");
    let allOCol = colArray.every((element) => element === "O");

    // Check if left diagonal contains all X or all O values
    let allXLeftDiag = leftDiag.every((element) => element === "X");
    let allOLeftDiag = leftDiag.every((element) => element === "O");

    // Check if right diagonal contains all X or all O values
    let allXRightDiag = rightDiag.every((element) => element === "X");
    let allORightDiag = rightDiag.every((element) => element === "O");

    if (allXRow || allORow) {
      console.log("Checked rows...");
      winState = true;
      let msg = console.log(`Row number is ${i}`);
      return { msg };
    } else if (allXCol || allOCol) {
      console.log("Checked columns...");
      winState = true;
      let msg = console.log(`Array is ${colArray}`);
      return { msg };
    } else if (allXLeftDiag || allOLeftDiag) {
      console.log("Checked left diagonal...");
      winState = true;
      let msg = console.log(`Array is ${leftDiag}`);
      return { msg };
    } else if (allXRightDiag || allORightDiag) {
      console.log("Checked right diagonal...");
      winState = true;
      let msg = console.log(`Array is ${rightDiag}`);
      return { msg };
    }
  }

  console.log("No Match!");
  winState = false;
}

checkGameStatus();
