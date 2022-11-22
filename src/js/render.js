export { renderList };

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const refs = {
  formEl: document.querySelector('.search-form'),
  buttonSubmit: document.querySelector('button'),
  buttonLoabMore: document.querySelector('.load-more'),
  hitsConteiner: document.querySelector('.gallery'),
};

function renderList(hits) {
  const markup = hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="photo-card">
         <a href="${webformatURL}">
       
  <img src="${largeImageURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes </b>
      ${likes}
    </p>
    <p class="info-item">
      <b>Views </b>
      ${views}
    </p>
    <p class="info-item">
      <b>Comments </b>
      ${comments}
    </p>
    <p class="info-item">
      <b>Downloads </b>
      ${downloads}
    </p>
  </div>
</div>`;
      }
    )
    .join(' ');
  refs.hitsConteiner.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionnsDelay: 250,
});

 //  надо створити сслилку для lightbox
