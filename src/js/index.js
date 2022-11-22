import NewApi from './newApi';

// const API_KEY = '31379627-912f0dd2a6189315a3f000bf9';
// const BASE_URL = 'https://pixabay.com/api';

const newApi = new NewApi();
// const newFetchCountries = new NewFetchCountries();
const refs = {
  formEl: document.querySelector('.search-form'),
  buttonSubmit: document.querySelector('button'),
  buttonLoabMore: document.querySelector('.load-more'),
  hitsConteiner: document.querySelector('.gallery'),
};
console.log(refs.hitsConteiner);
buttonLoadmoreDisabled();

refs.formEl.addEventListener('submit', onSearch);
refs.buttonLoabMore.addEventListener('click', onLoabMore);

function onSearch(e) {
  e.preventDefault();
  const input = e.target.searchQuery.value;
  buttonLoadmoreIsDisabled();
  newApi.resetPage();
  e.target.searchQuery.value = '';
  newApi.query = input;

  // verificationtext();
  clearContainer();
  newApi.asyncFetchApi();

  // newApi.query = e.target.searchQuery.value;
  //     if (newApi.query.trim() === '') {
  //     Notify.failure('Sorry, there are no images matching your search query. Please try again.');
  //     } else {newApi.resetPage();

  //         newApi.fetchApi().then(renderList);

  // }
}

//  buttonLoadmoreIsDisabled();
// function verificationtext() {
//     if (newApi.query.trim() === '') {
//         Notify.failure('Sorry, there are no images matching your search query. Please try again.');
//     }
// }

function onLoabMore(e) {
  newApi.asyncFetchApi();
  // newApi.total();
}

function clearContainer() {
  refs.hitsConteiner.innerHTML = '';
}
function buttonLoadmoreDisabled() {
  refs.buttonLoabMore.classList.add('hidden');
}
function buttonLoadmoreIsDisabled() {
  refs.buttonLoabMore.classList.remove('hidden');
}

// newApi.fetchApi().then(renderList);
