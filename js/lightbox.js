import { galleryItems } from './gallery-items.js';
// Change code below this line
document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.createElement('ul');
  gallery.classList.add('gallery');

  galleryItems.forEach(function (item) {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.preview;
    image.alt = item.description;

    link.appendChild(image);
    galleryItem.appendChild(link);
    gallery.appendChild(galleryItem);
  });

  document.body.appendChild(gallery);

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.on('shown.simplelightbox', function () {
    setTimeout(() => {
      const currentCaption = document.querySelector('.sl-current .sl-caption');
      currentCaption.style.display = 'block';
    }, 250);
  });
});

console.log(galleryItems);
