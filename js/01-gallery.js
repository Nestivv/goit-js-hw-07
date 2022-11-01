import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const arrayOfPictures = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"/>
    </a>
</div>`
  )
  .join('');
gallery.innerHTML = arrayOfPictures;
let instance;
gallery.addEventListener('click', onClickPicture);
gallery.addEventListener('keydown', onPressEsc);

function onClickPicture(evt) {
  evt.preventDefault();
  instance = basicLightbox.create(`<img src="${evt.target.dataset.source}"/>`);
  instance.show();
  return instance;
}

function onPressEsc(evt) {
  if (evt.key === 'Escape' || instance.visible()) {
    instance.close();
  }
}
