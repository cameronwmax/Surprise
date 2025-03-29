const images = [
  "./imgs/cat-frames/black-cat-up-1.png",
  "./imgs/cat-frames/black-cat-up-2.png",
  "./imgs/cat-frames/black-cat-up-3.png",
  "./imgs/cat-frames/black-cat-down-1.png",
  "./imgs/cat-frames/black-cat-down-2.png",
  "./imgs/cat-frames/black-cat-down-3.png",
  "./imgs/cat-frames/black-cat-left-1.png",
  "./imgs/cat-frames/black-cat-left-2.png",
  "./imgs/cat-frames/black-cat-left-3.png",
  "./imgs/cat-frames/black-cat-right-1.png",
  "./imgs/cat-frames/black-cat-right-2.png",
  "./imgs/cat-frames/black-cat-right-3.png",
  "./imgs/cat-frames/white-cat-up-1.png",
  "./imgs/cat-frames/white-cat-up-2.png",
  "./imgs/cat-frames/white-cat-up-3.png",
  "./imgs/cat-frames/white-cat-down-1.png",
  "./imgs/cat-frames/white-cat-down-2.png",
  "./imgs/cat-frames/white-cat-down-3.png",
  "./imgs/cat-frames/white-cat-left-1.png",
  "./imgs/cat-frames/white-cat-left-2.png",
  "./imgs/cat-frames/white-cat-left-3.png",
  "./imgs/cat-frames/white-cat-right-1.png",
  "./imgs/cat-frames/white-cat-right-2.png",
  "./imgs/cat-frames/white-cat-right-3.png",
  "./imgs/flower-1.jpg",
  "./imgs/flower-pattern.png",
];

const cursor = document.getElementById("cursor");
const whiteCat = document.querySelector(".white-cat");
const blackCat = document.querySelector(".black-cat");
const container = document.querySelector(".card");
const flowers = document.querySelector(".flowers");
const btn = document.querySelector(".btn");

const leftEdge = 0;
const rightEdge = container.offsetWidth - 33;
const bottomEdge = 0;
const topEdge = container.offsetHeight - 25;

let whiteCatX = whiteCat.style.left;
let whiteCatY = whiteCat.style.bottom;

let blackCatX = blackCat.style.left;
let blackCatY = blackCat.style.bottom;

let mouseX = 0,
  mouseY = 0;
let cursorX = 0,
  cursorY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

function animateMouse() {
  cursorX += (mouseX - cursorX) * 0.05;
  cursorY += (mouseY - cursorY) * 0.05;

  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";

  requestAnimationFrame(animateMouse);
}
animateMouse();

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

function startCatAnimations() {
  setTimeout(() => moveCat(whiteCat, whiteCatX, whiteCatY, "white"), Math.random() * 3000 + 1000);
  setTimeout(() => moveCat(blackCat, blackCatX, blackCatY, "black"), Math.random() * 3000 + 1000);
}

btn.addEventListener("click", () => {
  flowers.classList.remove("hide");
  flowers.classList.add("show");
  btn.classList.add("hide-btn");
});

function preloadImages(images, cb) {
  let loadedImages = 0;
  const totalImages = images.length;

  images.forEach((imgSrc) => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      loadedImages++;
      if (loadedImages === totalImages) cb();
    };
  });
}

preloadImages(images, startCatAnimations);
