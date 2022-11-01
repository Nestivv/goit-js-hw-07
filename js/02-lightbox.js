import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const arrayOfPictures = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"/>
    </a>`
  )
  .join('');
gallery.innerHTML = arrayOfPictures;

let instance;
gallery.addEventListener('click', onClickPicture);
gallery.addEventListener('keydown', onPressEsc);

function onClickPicture(evt) {
  evt.preventDefault();
  instance = new SimpleLightbox('.gallery a', );
  instance.show();
  return instance;
}

function onPressEsc(evt) {
  if (evt.key === 'Escape' || instance.visible()) {
    instance.close();
  }
}
console.log(galleryItems);
