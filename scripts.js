// GameBoard Module
const buildGameBoard = (function () {
  const gameBoard = [];

  // Create a 2D array
  const createArray = function () {
    for (let i = 0; i < 3; i++) {
      gameBoard[i] = [];
      for (let j = 0; j < 3; j++) {
        gameBoard[i][j] = "X";
      }
    }
  };

  createArray();

  const getGameBoard = () => {
    return gameBoard;
  };

  const setGameBoard = (mark, row, column) => {
    gameBoard[row][column] = mark;
    return gameBoard;
  };

  return { getGameBoard, setGameBoard };
})();

// Create Player Factory Function
const createPlayer = function (name, marker) {
  // Private Variables
  let _name = name;
  let _marker = marker;

  // Public Variables
  let getName = () => _name;
  let getMarker = () => _marker;

  let setName = (newName) => {
    _name = newName;
  };

  let setMarker = (newMarker) => {
    _marker = newMarker;
  };

  return { getName, getMarker, setName, setMarker };
};

let players = [];

// Receive Players Details
function inputDetails(){
  
}

let player1 = createPlayer("Adeola", "X");
console.log(player1.getName());

// console.log(buildGameBoard.setGameBoard("O", 0, 0));
// console.log(buildGameBoard.getGameBoard());
