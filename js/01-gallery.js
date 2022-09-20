import { galleryItems } from "./gallery-items.js";
// Change code below this line
const refs = {
  gallery: document.querySelector(".gallery"),
};

// Creating and rendering markup from the galleryItems data array and provided gallery item template.
const galleryList = galleryItems.map(({ preview, original, description }) => {
  return ` <div class="gallery__item"><a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a></div>`;
});

const galleryMarkup = galleryList.join(" ");
refs.gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

// Implementing delegation to div.gallery and getting the url of a large image.
const selectImg = (event) => {
  // Please note that the image is wrapped in a link, which means that, when clicked, the user will be redirected to another page by default. Disable this behavior by default.
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  // Opening a modal window by clicking on a gallery item.
  // Replacing the value of the src attribute of the <img> element in a modal window before opening.
  const library = basicLightbox.create(
    `<img width="1400" height="900" src="${event.target.dataset.source}">`
  );

  library.show();

  // Add modal window closing upon pressing the Escape key. Make keyboard listening available only while the modal window is open. In the basicLightbox library, there is a method to close the modal window programmatically.
  refs.gallery.addEventListener("keydown", (e) => {
    if (e.code !== "Escape") {
      return;
    }

    library.close();
  });
};

refs.gallery.addEventListener("click", selectImg);
