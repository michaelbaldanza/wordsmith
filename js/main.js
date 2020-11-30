let board = new Array(225);
let tiles = [];

const header = document.getElementById("header-element");
const boardContainerEl = document.getElementById("board-container");

function createSquareEls() {
  for (i = 0; i < board.length; i++) {
    let newSquare = document.createElement("div");
    newSquare.setAttribute("class", "square");
    newSquare.textContent = "";
    boardContainerEl.appendChild(newSquare);
    tiles.push(newSquare);
  }
}

createSquareEls();