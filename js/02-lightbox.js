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

const lightBox = new SimpleLightbox(".gallery a", {
  captionType: "alt",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
