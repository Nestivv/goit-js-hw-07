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

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
});
