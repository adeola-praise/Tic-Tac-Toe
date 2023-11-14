// When I check for the diagonals, I need to get the row and columns of each value of the diagonal so as to strike through them. I also need the value is it an X or an O so that I can know what player won. I also need to return a boolean for the winstate,so if there is a win, the function returns true and otherwise returns false.

// Store the row and the column of the winning threes

// I want to create a function to check for the left, right diagonals and the row and columns for same letters pattern. Now these functions would return an object that consists of the win col or rols or diagonals, if there is a win

let array = [
  ["X", "O", "X"],
  ["X", "X", "X"],
  ["X", "O", "X"],
];

let winRowIndex = [];
let winColIndex = [];

function checkleftDiagonal(array) {
  let leftDiag = [];

  for (let i = 0; i < array.length; i++) {
    const row = array[i];
    winRowIndex[i] = winColIndex[i] = i;
    leftDiag.push(array[i][i]);
  }

  return checkForCrossMatch(leftDiag);
}

function checkRightDiagonal(array) {
  let rightDiag = [];

  for (let i = 0; i < array.length; i++) {
    winRowIndex[i] = i;
    winColIndex[i] = array.length - 1 - i;
    rightDiag.push(array[i][array.length - 1 - i]);
  }

  return checkForCrossMatch(rightDiag);
}

function checkRows(array) {
  for (let i = 0; i < array.length; i++) {
    const row = array[i];
    for (let j = 0; j < array.length; j++) {
      winRowIndex.push(i);
      winColIndex[j] = j;
    }

    if (checkForCrossMatch(row)) {
      return true;
    }
  }

  return false;
}

function checkColumns(array) {
  let colArray = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      winColIndex.push(i);
      winRowIndex[j] = j;
      const column = array[j][i];
      colArray.push(column);
    }

    // Check if the column has a complete match
    if (checkForCrossMatch(colArray)) {
      return true;
    } else {
      colArray = []; // Empty the array storing the column if it doesn't
    }
  }

  return false;
}

function checkForCrossMatch(arraySub) {
  // Check if it contains all X or all O values
  let allX = arraySub.every((element) => element === "X");
  let allO = arraySub.every((element) => element === "O");

  if (allX || allO) {
    // console.log("checking for match...");
    // console.log(`Found match: ${arraySub}`);
    // console.log(`Column Numbers: ${winColIndex}`);
    // console.log(`Row Numbers: ${winRowIndex}`);
    return true;
  } else {
    // Empty the winrow and wincol
    console.log(`No match found`);
  }

  winColIndex = [];
  winRowIndex = [];
  return false;
}

function crossWinningMatch() {
  count = 0;
  while (count < 3) {
    i++;
  }
}

function checkGameStatus() {
  if (
    checkColumns(array) ||
    checkRows(array) ||
    checkRightDiagonal(array) ||
    checkleftDiagonal(array)
  ) {
    console.log(array);
    // Return the player the won

    console.log("There is a winner!");
  } else {
    console.log("Play again");
  }
}

checkGameStatus();
