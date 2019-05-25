import axios from 'axios';

const API_URL_I = 'https://api.elections.openknowledge.be/format-i';
const API_URL_R = 'https://api.elections.openknowledge.be/format-r';

const types = [
  { value: 'CK', text: 'Chambre / Kamer' },
  { value: 'VL', text: 'Parlement flamand / Vlaams Parlement' },
  { value: 'WL', text: 'Parlement régional wallon / Waals Parlement' },
  { value: 'BR', text: 'Parlement de la Région de Bruxelles-Capitale / Brussels Hoofdstedelijk Parlement' },
  { value: 'DE', text: 'Parlement de la Communauté germanophone / Parlement van de Duitstalige Gemeenschap' },
  { value: 'EU', text: 'Parlement européen / Europese Parlement' },
];

export default {
  types,
  getEntities(type) {
    return axios.get(`${API_URL_I}/entities/2019/${type}`).then(response => response.data);
  },
  getCandidates(type) {
    return axios.get(`${API_URL_I}/candidates/2019/${type}`).then(response => response.data);
  },
  getResults(type) {
    return axios.get(`${API_URL_R}/results/2019/${type}?test`).then(response => response.data);
  },
};
