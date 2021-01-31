import axios from 'axios';

const key = '17360188-9b16833f6c352b97c5c5d2e23';

export function fetchImagesByQuery(query, page = 1) {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then((result) => result.data.hits);
}
