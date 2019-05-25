import axios from 'axios';

const API_URL = 'https://api.elections.openknowledge.be/format-i';

export default {
  getCandidates(type) {
    return axios.get(`${API_URL}/candidates/2019/${type}`).then(response => response.data);
  },
};
