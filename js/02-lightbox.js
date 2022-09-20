import { galleryItems } from "./gallery-items.js";

// Change code below this line
const refs = {
  gallery: document.querySelector(".gallery"),
};

// Creating and rendering markup from the galleryItems data array and provided gallery element template. Use the ready-made code from the first task.
const galleryList = galleryItems.map(({ preview, original, description }) => {
  return ` <li class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img 
  class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>
  </li>`;
});

const galleryMarkup = galleryList.join(" ");
refs.gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

// Library initialization after gallery items are created and added to div.gallery. To do this, read the SimpleLightbox documentation - first of all, the Usage and Markup sections.
new SimpleLightbox(".gallery a", {
  // Look in the documentation for the Options section and add image caption display from the alt attribute. Let the caption be at the bottom and appear 250 milliseconds after image opening.
  captionsData: "alt",
  captionDelay: 250,
  close: false,
});
