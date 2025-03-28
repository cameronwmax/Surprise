const whiteCat = document.querySelector(".white-cat");
const blackCat = document.querySelector(".black-cat");
const container = document.querySelector(".card");

const leftEdge = 0;
const rightEdge = container.offsetWidth - 33;
const bottomEdge = 0;
const topEdge = container.offsetHeight - 25;

let whiteCatX = whiteCat.style.left;
let whiteCatY = whiteCat.style.bottom;

let blackCatX = blackCat.style.left;
let blackCatY = blackCat.style.bottom;

function moveCat(cat, curX, curY, type) {
  let moveDist = Math.floor(Math.random() * 150) + 50;
  let moveDir = Math.random();

  if (curX === leftEdge) moveDir = 0.49;
  if (curX === rightEdge) moveDir = 0.24;
  if (curY === topEdge) moveDir = 0.98;
  if (curY === bottomEdge) moveDir = 0.74;

  let newX = curX;
  let newY = curY;

  if (moveDir < 0.25) {
    newX = Math.max(curX - moveDist, 0);
    handleCatStylesX(cat, type, "left");
  } else if (moveDir < 0.5) {
    newX = Math.min(curX + moveDist, rightEdge);
    handleCatStylesX(cat, type, "right");
  } else if (moveDir < 0.75) {
    newY = Math.min(newY + moveDist, topEdge);
    handleCatStylesY(cat, type, "up");
  } else if (moveDir < 0.99) {
    newY = Math.max(curY - moveDist, bottomEdge);
    handleCatStylesY(cat, type, "down");
  }

  cat.style.transition = "left 2s linear, bottom 2s linear";
  cat.style.left = newX + "px";
  cat.style.bottom = newY + "px";

  curX = newX;
  curY = newY;

  setTimeout(() => {
    cat.style.animation = "none";

    if (moveDir < 0.25) {
      handleCatStyleStand(cat, type, "left");
    } else if (moveDir < 0.5) {
      handleCatStyleStand(cat, type, "right");
    } else if (moveDir < 0.75) {
      handleCatStyleStand(cat, type, "up");
    } else if (moveDir < 0.99) {
      handleCatStyleStand(cat, type, "down");
    }

    setTimeout(() => moveCat(cat, curX, curY, type), Math.random() * 3000 + 1000);
  }, 2000);
}

function handleCatStylesX(cat, type, direction) {
  cat.style.animation = `${type}-cat-${direction}-frames 0.5s steps(3) infinite`;
  cat.classList.add(`${type}-cat-shadow-horizontal`);
  cat.classList.remove(`${type}-cat-shadow-vertical`);
}

function handleCatStylesY(cat, type, direction) {
  cat.style.animation = `${type}-cat-${direction}-frames 0.5s steps(3) infinite`;
  cat.classList.add(`${type}-cat-shadow-vertical`);
  cat.classList.remove(`${type}-cat-shadow-horizontal`);
}

function handleCatStyleStand(cat, type, direction) {
  cat.style.backgroundImage = `url('./imgs/cat-frames/${type}-cat-${direction}-2.png')`;
}

setTimeout(() => moveCat(whiteCat, whiteCatX, whiteCatY, "white"), Math.random() * 3000 + 1000);
setTimeout(() => moveCat(blackCat, blackCatX, blackCatY, "black"), Math.random() * 3000 + 1000);
