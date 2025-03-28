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
  // moveDir = 0.2;

  if (curX === leftEdge) moveDir = 0.49;
  if (curX === rightEdge) moveDir = 0.24;
  console.log(curX === leftEdge);

  let newX = curX;
  let newY = curY;

  if (moveDir < 0.25) {
    newX = Math.max(curX - moveDist, 0);
    cat.style.animation = "walk-left-frames 0.5s steps(3) infinite";
  } else if (moveDir < 0.9) {
    newX = Math.min(curX + moveDist, rightEdge);
    cat.style.animation = "walk-right-frames 0.5s steps(3) infinite";
  }

  cat.style.transition = "left 2s linear";
  cat.style.left = newX + "px";

  curX = newX;

  setTimeout(() => {
    cat.style.animation = "none";

    if (moveDir < 0.25) {
      cat.style.backgroundImage = "url('./imgs/cat-frames/cat-left-2.png')";
    } else if (moveDir < 0.5) {
      cat.style.backgroundImage = "url('./imgs/cat-frames/cat-right-2.png')";
    }

    setTimeout(moveCat, Math.random() * 3000 + 1000);
  }, 2000);
}
moveCat();
