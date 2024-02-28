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
    image.setAttribute('data-source', item.original);
    image.alt = item.description;

    link.appendChild(image);
    galleryItem.appendChild(link);
    gallery.appendChild(galleryItem);
  });

  document.body.appendChild(gallery);

  const galleryLinks = document.querySelectorAll('.gallery__link');

  function openModal(event) {
    event.preventDefault();
    const largeImageURL = event.currentTarget.href;
    const instance = basicLightbox.create(
      `<img src="${largeImageURL}" width="800" height="600">`,
      {
        onShow: (instance) => {
          console.log('Lightbox is opened.');
        },
        onClose: (instance) => {
          console.log('Lightbox is closed.');
        },
      }
    );
    instance.show();

    function closeModal() {
      instance.close();
      instance.element().removeEventListener('click', closeModal);
      document.removeEventListener('keydown', closeOnEscape);
    }

    function closeOnEscape(e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    }

    instance.element().addEventListener('click', closeModal);
    document.addEventListener('keydown', closeOnEscape);
  }

  galleryLinks.forEach(function (link) {
    link.addEventListener('click', openModal);
  });
});

console.log(galleryItems);











