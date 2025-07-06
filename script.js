const items = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image")
const closeBtn = document.getElementById("close-btn")



items.forEach((item) => {
  item.addEventListener("click", (event) => {
  const clickedImg = event.target.src; // event.targetでイベント発生源のHTML要素を取得
  lightboxImage.src = clickedImg.replace("-thumbnail", "");
  lightbox.style.display = "flex";
})
})

// 修正前
// function showLightbox(event) {
//   const clickedImg = event.target.src;
//   lightboxImage.src = clickedImg;
//   lightbox.style.display = "flex";
// }

closeBtn.addEventListener("click", (event) => {
  event.stopPropagation(); // 親要素のクリックイベントを止める
  lightbox.style.display = "none";
})

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
})
