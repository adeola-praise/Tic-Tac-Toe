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

let player = createPlayer("Adeola");

console.log(player.name);
