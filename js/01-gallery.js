import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryItemsMarkup);

gallery.addEventListener("click", handleItemOnclick);

// document.querySelector("a").addEventListener("click", function (event) {
//   event.preventDefault();
// });
function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}" onclick="event.preventDefault()">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
    </div>
    `;
    })
    .join("");
}
function handleItemOnclick(e) {
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  console.log(e.target.dataset.source);
}
