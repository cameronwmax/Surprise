const cat = document.querySelector(".animal");
const container = document.querySelector(".card");

const leftEdge = 0;
const rightEdge = container.offsetWidth - 33;
const topEdge = 0;
const bottomEdge = container.offsetHeight;

let curX = leftEdge;
let curY = bottomEdge;
// console.log(rightEdge);

function moveCat() {
  let moveDist = Math.floor(Math.random() * 150 + 50);
  let moveDir = Math.random();
  moveDir = 0.2;

  console.log(rightEdge);
  if (curX === leftEdge) moveDir = 0.49;
  if (curX === rightEdge) moveDir = 0.24;

  let newX = curX;
  let newY = curY;
  console.log(curX + moveDist);

  if (moveDir < 0.25) {
    newX = Math.max(curX - moveDist, 0);
    cat.style.animation = "walk-left-frames 0.5s steps(3) infinite";
  } else if (moveDir < 0.9) {
    newX = Math.min(curX + moveDist, rightEdge);
    cat.style.animation = "walk-right-frames 0.5s steps(3) infinite";
  }

  cat.style.transition = "left 2s linear";
  cat.style.left = newX + "px";
}
moveCat();
