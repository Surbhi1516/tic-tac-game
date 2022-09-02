

console.log('wecome to tictactoe');

let turn = 'X';

// function to change the turnconst
const changeTurn = () => {
  return turn === "X" ? "0" : "X"
}

// function to check win
const checkWin = () => {
  let boxtext = document.getElementsByClassName('boxtext');
  let gameover = false;
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  wins.forEach(e => {
    if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
      document.querySelector('.info').innerText = boxtext[e[0]].innerText + " WON";
      gameover = true;
    }
  })
}

// game logic

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector('.boxtext');
  element.addEventListener('click', () => {
    if (boxtext.innerText === '') {
      boxtext.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!gameover) {
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
      }

    }
  })
})


// add on click event listener
reset.addEventListener('click', () => {
  let boxtexts = document.querySelectorAll('.boxtext');
  Array.from(boxtexts).forEach(element => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})