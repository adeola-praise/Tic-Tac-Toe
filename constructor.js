let players = [];

let playerX = prompt("Player X name:  ");
createNewPlayer(playerX);

let playerO = prompt("PlayerO name: ");
createNewPlayer(playerO);

function createPlayer(name) {
  let _mark = "X";

  let getMarker = () => {
    return _mark;
  };
  let setMarker = (mark) => {
    _mark = mark;
  };

  return { name, getMarker, setMarker };
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

function receivePlayerInput() {
  let player_input = prompt(
    "Seperate selected row and column with a comma: "
  ).split(",");

  let row_input = player_input[0];
  let column_input = player_input[1];

  placeMark(currentPlayer, row_input, column_input);
  checkPlayerTurn(currentPlayer);
  gameBoard.displayGameBoard();
}

function checkRows() {
  let board = gameBoard.getGameBoard();
  for (let i = 0; i < board.length; i++) {
    const row = board[i];

    // Check if the column contains all X or all O values
    let allXRow = row.every((element) => element === "X");
    let allORow = row.every((element) => element === "O");

    if (allXRow || allORow) {
      let msg = console.log(`Array is ${row}`);
      return { msg };
    } else {
      console.log("No Match");
    }
  }
}

function checkColumns() {
  let brd = gameBoard.getGameBoard();
  let colArray = [];

  for (let i = 0; i < brd.length; i++) {
    for (let j = 0; j < brd.length; j++) {
      const column = brd[j][i];
      colArray.push(column);
    }

    // Check if the column contains all X or all O values
    let allXCol = colArray.every((element) => element === "X");
    let allOCol = colArray.every((element) => element === "O");

    if (allXCol || allOCol) {
      let msg = console.log(`Array is ${colArray}`);
      return { msg };
    } else {
      colArray = [];
    }
  }
}

// Next thing is to check game status
// checkGameStatus(){
//   if (checkColumns() || checkRows()){}
// }

function playGame() {
  gameBoard.displayGameBoard();

  while (checkForEmptyCell()) {
    receivePlayerInput();
  }

  // else {
  //   // Load win state
  // }
  // Condition 2: so far there is no winner yet
  // Now how do I check all of the cells of the gameboard
}

playGame();
