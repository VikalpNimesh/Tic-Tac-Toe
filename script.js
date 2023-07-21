const cellElement = document.querySelectorAll(".game-board .cell ");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const result = document.querySelector(".result");
const resultText = document.querySelector(".result h1");
const restart = document.querySelector(".btn");
const playerX = "X";
const playerO = "O";


let winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let toggleturn = true;
cellElement.forEach((cell) => {
  cell.onclick = () => {
    let currentplayer = toggleturn ? playerO : playerX;
    cell.classList.add("disabled");
    addInCell(cell, currentplayer);
    if (winnerCheck(currentplayer)) {
      // console.log(currentplayer + " winner");
      result.classList.remove("inactive")
      resultText.innerHTML = currentplayer + " Win The Game"
    } else if (isDraw()) {
      result.classList.remove("inactive")
      resultText.innerHTML =  " NOBODY WINS"
    } else {
      swap();
    }
  };
});

function winnerCheck(currentplayer) {
  return winningCondition.some((condition) => {
    // console.log(condition)
    return condition.every((index) => {
      return cellElement[index].classList.contains(currentplayer);
    });
  });
}
function isDraw() {
  return [...cellElement].every((cell) => {
    return cell.classList.contains(playerX) || cell.classList.contains(playerO);
  });
}

function swap() {
  toggleturn = !toggleturn;

  if (toggleturn) {
    player1.classList.remove("active");
    player2.classList.add("active");
  } else {
    player1.classList.add("active");
    player2.classList.remove("active");

  }
}
function addInCell(cell, currentplayer) {
  cell.innerHTML = currentplayer;
  cell.classList.add(currentplayer);
}
restart.onclick=()=>{
  location.reload();
}
