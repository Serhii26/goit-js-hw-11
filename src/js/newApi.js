import axios from 'axios';
import { Notify } from 'notiflix';
import { renderList } from './render';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

const BASE_URL = 'https://pixabay.com/api/';
const BASE_KEY = '31379627-912f0dd2a6189315a3f000bf9';
// const axios = require('axios').default;

export default class NewApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    // this.lightbox = new SimpleLightbox('.gallery a', {});
    console.log(this);
  }

  //   fetchApi() {
  //     console.log(this);
  //     const options = {
  //       headers: {
  //         key: '31379627-912f0dd2a6189315a3f000bf9',
  //       },
  //     };
  //       const url =  `https://pixabay.com/api/?key=31379627-912f0dd2a6189315a3f000bf9&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;

  //     return fetch(url)
  //       .then(response => response.json())
  //       .then(({hits}) => {
  //         // console.log(data);
  //         this.page += 1;
  //          return hits;

  //       });

  //   };
  //   resetPage() {
  //     this.page = 1;
  //   }
  //   get query() {
  //     return this.searchQuery;
  //   }
  //   set query(newQuery) {
  //     this.searchQuery = newQuery;
  //   }
  // }
  async asyncFetchApi() {
    try {
      const options = {
        key: BASE_KEY,
        q: this.searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
        page: this.page,
      };
      const response = await axios.get(BASE_URL, { params: options });
      const totalHits = response.data.total;
      console.log(totalHits);
      if (totalHits === 0) {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return;
      }
      if (totalHits >= 40) {
        renderList(response.data.hits);
        // this.lightbox.refresh();
      }
      if (response.data.hits < 40) {
        Notify.failure(
          "We're sorry, but you've reached the end of search results."
        );
      }

      if (this.page <= 1) {
        Notify.success(`Hooray! We found ${totalHits} images.`);
      }
      this.increment();

      return response;
    } catch (error) {
      console.log(error);
    }
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  increment() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  // total() {
  //   tolal = totalHits - this.per_page;
  //   console.log(tolal);
  //   }

  // const fetchApi = await response.json();

  // return fetchApi;
}
