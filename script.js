const cat = document.querySelector(".animal");
const container = document.querySelector(".card");

const leftEdge = 0;
const rightEdge = container.offsetWidth - 33;
const bottomEdge = 0;
const topEdge = container.offsetHeight - 25;

let curX = cat.style.left;
let curY = cat.style.bottom;

function moveCat() {
  let moveDist = Math.floor(Math.random() * 150) + 50;
  let moveDir = Math.random();

  if (curX === leftEdge) moveDir = 0.49;
  if (curX === rightEdge) moveDir = 0.24;
  if (curY === topEdge) moveDir = 0.98;
  if (curY === bottomEdge) moveDir = 0.74;

  let newX = curX;

  if (moveDir < 0.25) {
    newX = Math.max(curX - moveDist, 0);
    cat.style.animation = "walk-left-frames 0.5s steps(3) infinite";
    cat.classList.add("shadow-slide");
    cat.classList.remove("shadow-vertical");
  } else if (moveDir < 0.5) {
    newX = Math.min(curX + moveDist, rightEdge);
    cat.style.animation = "walk-right-frames 0.5s steps(3) infinite";
    cat.classList.add("shadow-slide");
    cat.classList.remove("shadow-vertical");
  } else if (moveDir < 0.75) {
    newY = Math.min(newY + moveDist, topEdge);
    cat.style.animation = "walk-up-frames 0.5s steps(3) infinite";
    cat.classList.remove("shadow-slide");
    cat.classList.add("shadow-vertical");
  } else if (moveDir < 0.99) {
    newY = Math.max(curY - moveDist, bottomEdge);
    cat.style.animation = "walk-down-frames 0.5s steps(3) infinite";
    cat.classList.remove("shadow-slide");
    cat.classList.add("shadow-vertical");
  }

  cat.style.transition = "left 2s linear, bottom 2s linear";
  cat.style.left = newX + "px";
  cat.style.bottom = newY + "px";

  curX = newX;
  curY = newY;

  setTimeout(() => {
    cat.style.animation = "none";

    if (moveDir < 0.25) {
      cat.style.backgroundImage = "url('./imgs/cat-frames/cat-left-2.png')";
    } else if (moveDir < 0.5) {
      cat.style.backgroundImage = "url('./imgs/cat-frames/cat-right-2.png')";
    } else if (moveDir < 0.75) {
      cat.style.backgroundImage = "url('./imgs/cat-frames/cat-up-2.png')";
    } else if (moveDir < 0.99) {
      cat.style.backgroundImage = "url('./imgs/cat-frames/cat-down-2.png')";
    }

    setTimeout(moveCat, Math.random() * 3000 + 1000);
  }, 2000);
}
moveCat();
