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
}

function playGame() {
  let numOfTurns = 9;

  for (let i = 0; i < numOfTurns; i++) {
    gameBoard.displayGameBoard();
    if (checkForEmptyCell()) {
      receivePlayerInput();
    }

    // checkForEmptyCell();
  }

  // else {
  //   // Load win state
  // }
  // Condition 2: so far there is no winner yet
  // Now how do I check all of the cells of the gameboard
}

playGame();
