document.querySelector(".btn").addEventListener("click", () => {
  const cat = document.querySelector(".animal");

  cat.style.animation = "walk-frames .5s steps(3) infinite, walk 8s linear infinite";

  // setTimeout(() => {
  //   cat.style.backgroundImage = "url(./imgs/cat-frames/cat-right-2.png)";
  // }, 1000);

  // setTimeout(() => {
  //   cat.style.backgroundImage = "url(./imgs/cat-frames/cat-right-3.png)";
  // }, 2000);
});
