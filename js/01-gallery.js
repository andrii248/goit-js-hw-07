import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryItemsMarkup);

// const itemOnclick = handleItemOnclick(e);
gallery.addEventListener("click", onImgClick);

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

const instance = basicLightbox.create(
  `<img class="modal-img" src="">`,
  {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscClick);
    },
  },
  {
    onClose: (instance) => {
      window.removeEventListener("keydown", onEscClick);
    },
  }
);

function onImgClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  instance.element().querySelector(".modal-img").src =
    evt.target.dataset.source;

  instance.show();
}

function onEscClick(evt) {
  if (evt.key === "Escape") {
    instance.close();
    return;
  }
}

// ================ initial working realization ==================

// function handleItemOnclick(e) {
//   if (e.target.closest(".gallery__link")) {
//     e.preventDefault();
//     const instance = basicLightbox.create(
//       `
//       <img src="${
//         e.target.closest("img").dataset.source
//       }" width="800" height="600">"
//     `,
//       {
//         closable: true,
//         onShow: (instance) => {
//           window.addEventListener("keydown", onModalPressEsc);
//         },
//         onClose: (instance) => {
//           window.removeEventListener("keydown", onModalPressEsc);
//         },
//       }
//     );
//     instance.show();

//     function onModalPressEsc(e) {
//       if (e.code === "Escape") {
//         instance.close();
//       }
//     }
//   }
// }

// ============== not working code =======

// function handleItemOnclick(e) {
//   e.preventDefault();
//   if (!e.target.classList.contains(".gallery__image")) {
//     return;
//   }

//   const instance = basicLightbox.create(`
//     <img src="${e.target.dataset.source}" width="800" height="600">"
//     `);
//   instance.show();
// }
