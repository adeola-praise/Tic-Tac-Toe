let players = [];

let playerX = prompt("Player X name:  ");
createNewPlayer(playerX);

let playerO = prompt("PlayerO name: ");
createNewPlayer(playerO);

let winRowIndex = [];
let winColIndex = [];
let winState = false;

function createPlayer(name) {
  let _mark = "X";

  let getMarker = () => {
    return _mark;
  };
  let setMarker = (mark) => {
    _mark = mark;
  };

  let getPlayer = (marker) => {
    if (marker === _mark) {
      return { playerName: name, marker: _mark };
    }
  };

  return { name, getMarker, setMarker, getPlayer };
}

function createNewPlayer(name) {
  let newPlayer = createPlayer(name);

  if (players.length >= 1) {
    newPlayer.setMarker("O");
  }

  players.push(newPlayer);
  alert(`${name}, your marker is ${newPlayer.getMarker()}`);
}

let gameBoard = (function () {
  const _gameBoard = [];

  for (let i = 0; i < 3; i++) {
    _gameBoard[i] = [];
    for (let j = 0; j < 3; j++) {
      _gameBoard[i][j] = " ";
    }
  }

  let displayGameBoard = () => {
    console.table(_gameBoard);
  };

  let getGameBoard = () => {
    return _gameBoard;
  };

  let getBoardCell = (row, column) => {
    return _gameBoard[row][column];
  };

  let markBoardCell = (row, column, marker) => {
    _gameBoard[row][column] = marker;
  };

  return { getGameBoard, getBoardCell, markBoardCell, displayGameBoard };
})();

function placeMark(player, row, column) {
  console.log(player);
  let mark = player.getMarker();
  let boardCell = gameBoard.getBoardCell(row, column);

  if (boardCell === " ") {
    gameBoard.markBoardCell(row, column, mark);
  } else {
    alert("Cell marked already");
  }
}

function checkForEmptyCell() {
  let board = gameBoard.getGameBoard();

  let isAnyCellEmpty = board.some((row) =>
    row.some((column) => column === " ")
  );

  return isAnyCellEmpty;
}

console.log(checkForEmptyCell());

let currentPlayer = players[0];

function checkPlayerTurn(player) {
  let previous_player = player;

  if (previous_player.getMarker() == "X") {
    console.log(currentPlayer);
    currentPlayer = players[1];
  } else {
    currentPlayer = players[0];
  }
}

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
    return true;
  }

  winColIndex = [];
  winRowIndex = [];
  return false;
}

function crossWinningMatch() {
  i = 0;
  while (i < 3) {
    gameBoard.markBoardCell(winRowIndex[i], winColIndex[i], "Win");
    i++;
  }

  gameBoard.displayGameBoard();
}

function checkGameStatus() {
  let board = gameBoard.getGameBoard();
  if (
    checkColumns(board) ||
    checkRows(board) ||
    checkRightDiagonal(board) ||
    checkleftDiagonal(board)
  ) {
    winState = true;
    displayGameStatus();
    // Return the player the won
    console.log("There is a winner!");
  } else {
    console.log("Play again");
  }
}

function receivePlayerInput() {
  let player_input = prompt(
    "Seperate selected row and column with a comma: "
  ).split(",");

  let row_input = player_input[0];
  let column_input = player_input[1];

  placeMark(currentPlayer, row_input, column_input);
  checkGameStatus();
  checkPlayerTurn(currentPlayer);
  gameBoard.displayGameBoard();
}

function displayGameStatus() {
  // Confirm the player that won the game by check the content of atleast one of the winning cell
  console.log(gameBoard.getBoardCell(winRowIndex[0], winColIndex[0]));
  if (gameBoard.getBoardCell(winRowIndex[0], winColIndex[0]) === "X") {
    console.log(`${players[0].name} is the Winner!`);
  } else {
    console.log(`${players[1].name} is the Winner!`);
  }

  crossWinningMatch();
  // I need the name of the player that won
}

// Next thing is to check game status
// checkGameStatus(){
//   if (checkColumns() || checkRows()){}
// }

function playGame() {
  gameBoard.displayGameBoard();

  while (checkForEmptyCell() && !winState) {
    receivePlayerInput();
  }

  console.log("Game Completed");
  displayGameStatus();

  // else {
  //   // Load win state
  // }
  // Condition 2: so far there is no winner yet
  // Now how do I check all of the cells of the gameboard
}

playGame();
