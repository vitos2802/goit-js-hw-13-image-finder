import imagesItem from '../templates/imagesItem.hbs';
const galleryList = document.querySelector('.js-gallery');

const murkupList = hits => {
  galleryList.insertAdjacentHTML('beforeend', imagesItem(hits));
};

export default murkupList;
