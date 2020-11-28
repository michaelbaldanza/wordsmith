let board = new Array(225);
let tiles = [];

const header = document.getElementById("header-element");
const boardContainerEl = document.getElementById("board-container");

function createTileEls() {
  for (i = 0; i < board.length; i++) {
    let newTile = document.createElement("div");
    newTile.setAttribute("class", "square");
    newTile.textContent = "A";
    boardContainerEl.appendChild(newTile);
    console.log(newTile);
    tiles.push(newTile);
  }
}

function changeText() {
  header.textContent = "NEW TEXT";
}

createTileEls();

changeText();