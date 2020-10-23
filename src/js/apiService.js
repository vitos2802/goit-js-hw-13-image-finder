import axios from 'axios';

export default {
  key: '18770359-69995c75016210012c9ceb955',
  perPage: 12,
  page: 1,
  query: '',

  async getImages() {
    const { data } = await axios.get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${this.key}`,
    );
    this.page += 1;

    return data;
  },

  resetPage() {
    this.page = 1;
  },
};
