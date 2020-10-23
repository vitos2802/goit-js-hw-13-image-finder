import './styles.css';
import 'material-design-icons/iconfont/material-icons.css';
import imageService from './js/apiService';
import murkupList from './js/renderList';

const formRef = document.querySelector('#search-form');
const galleryList = document.querySelector('.js-gallery');
const loadMoreButton = document.querySelector('.load-more-btn');
const allImages = galleryList.querySelectorAll('li');
let scroll;

formRef.addEventListener('submit', event => {
  event.preventDefault();
  const input = event.currentTarget.query;
  imageService.query = input.value;
  galleryList.innerHTML = '';
  imageService.resetPage();

  imageService.getImages().then(({ hits, total }) => {
    murkupList(hits);
    scroll = document.documentElement.offsetHeight;
    if (total !== 0) {
      loadMoreButton.classList.add('load-more-btn_show');
    }
  });
});

loadMoreButton.addEventListener('click', () => {
  imageService.getImages().then(({ hits, total }) => {
    murkupList(hits);

    const allImages = galleryList.querySelectorAll('li');
    if (total === allImages.length) {
      loadMoreButton.classList.remove('load-more-btn_show');
      return;
    }
    window.scrollTo({
      top: scroll,
      behavior: 'smooth',
    });
    scroll = document.documentElement.offsetHeight;
  });
});
