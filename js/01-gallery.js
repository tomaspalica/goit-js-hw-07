import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryList = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}"  data-source="${original}" alt="${description}"></a></div>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", galleryList);

function galleryShow(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const picture = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${picture}" width="800" height="600">`
  );

  instance.show();
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}
gallery.addEventListener("click", galleryShow);
