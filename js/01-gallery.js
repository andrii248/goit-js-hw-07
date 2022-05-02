import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryItemsMarkup);

const itemOnclick = handleItemOnclick(e);
gallery.addEventListener("click", itemOnclick);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
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
  if (e.target.closest(".gallery__link")) {
    e.preventDefault();
    const instance = basicLightbox.create(`
      <img src="${
        e.target.closest("img").dataset.source
      }" width="800" height="600">"
    `);
    instance.show();
  }
}

// function handleItemOnclick(e) {
//   if (!e.target.classList.contains(".gallery__image")) {
//     e.preventDefault();
//     return;
//   }

//   const instance = basicLightbox.create(`
//     <img src="${e.target.dataset.source}" width="800" height="600">"
//     `);
//   instance.show();
// }
