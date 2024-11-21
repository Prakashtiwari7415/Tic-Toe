let box=document.querySelectorAll(".box");
let reset=document.querySelectorAll(".reset");
let turno=true;

let winvariable=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];

const boxes = document.querySelectorAll(".box");

let currentPlayer = "X";

boxes.forEach(box => {
  box.addEventListener("click", () => {
    // Only allow clicking on empty boxes
    if (box.innerText === "") {
      box.innerText = currentPlayer;
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});