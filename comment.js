// First I get the users name and preferred mark. The first user is marked X and the second user is marked O
let players = [];

let playerX = prompt("Player X name:  ");
createNewPlayer(playerX);

let playerO = prompt("PlayerO name: ");
createNewPlayer(playerO);

// Now that we have the names of the players, we create players from this input

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

// Gets the players input name, create a new player and set their markers
function createNewPlayer(name) {
  let newPlayer = createPlayer(name);

  //assign marker to player
  // Check the array of players, if the length of player is 1, that means there is already a player "X", now assign this new player mark "0", else if there is no player, just push this new player into theplayers array.

  if (players.length >= 1) {
    newPlayer.setMarker("O");
  }

  players.push(newPlayer);
  alert(`${name}, your marker is ${newPlayer.getMarker()}`);
}

// Now we need a board on which the players can play on. Th board consists of three rows and three columns. The board would be a 2D array

let gameBoard = (function () {
  const _gameBoard = [];

  for (let i = 0; i < 3; i++) {
    _gameBoard[i] = [];
    for (let j = 0; j < 3; j++) {
      _gameBoard[i][j] = " ";
    }
  }

  let getGameBoard = () => {
    return _gameBoard;
  };

  let getBoardCell = (row, column) => {
    return _gameBoard[row][column];
  };

  let markBoardCell = (row, column, marker) => {
    _gameBoard[row][column] = marker;
  };

  return { getGameBoard, getBoardCell, markBoardCell };
})();

// console.log(gameBoard.getGameBoard());

// Now players need to add markers to the gameBoard. Players need to access each cell in the gameboard, there are nine in total and players can add their markers to these cells. The only rule is that you can't add a mark to a cell that already has a mark

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

// check for empty cells
function checkForEmptyCell() {
  let board = gameBoard.getGameBoard();

  // Use the array.some method to check through the rows and columns for empt cells
  let isAnyCellEmpty = board.some((row) =>
    row.some((column) => column === " ")
  );

  return isAnyCellEmpty;
}

console.log(checkForEmptyCell());

// Now how do the players play the game. I want to keep prompting for input from the players until all cells are filled up

let currentPlayer = players[0];

function checkPlayerTurn(player) {
  // I need to check if it is the player's turn.
  // Player X is always the first player to play. I need to check the last input value pushed into the gameboard array. If the input value is an X, then it is player O's turn, if it is an O, then it is player X's turn
  // I can do this by storing the last input pushed into the array
  let previous_player = player;
  console.log(`Previous player is ${player.name}`);

  // if (previous_player.getMarker == "X") {
  //   console.log(currentPlayer);
  //   currentPlayer = players[1];
  // } else {
  //   currentPlayer = players[0];
  // }
}

function receivePlayerInput() {
  console.log("Input Received");

  let player_input = prompt(
    "Seperate selected row and column with a comma: "
  ).split(",");

  let row_input = player_input[0];
  let column_input = player_input[1];

  placeMark(currentPlayer, row_input, column_input);
  checkPlayerTurn(currentPlayer);
}

function playGame() {
  // Condition 1: so far any of the 2d array cell is empty cell, keep prompting for input.
  let numOfTurns = 9;

  for (let i = 0; i < numOfTurns; i++) {
    console.log("PlayGame Called");
    if (checkForEmptyCell()) {
      console.log("A cell is empty");
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
