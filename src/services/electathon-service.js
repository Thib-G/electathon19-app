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

const levels = [
  { value: 'M', text: 'Bureau principal de commune / Gemeentehoofdbureau' },
  { value: 'D', text: 'Bureau principal de district / Stadsdistricthoofdbureau' },
  { value: 'K', text: 'Bureau principal de canton / Kantonhoofdbureau' },
  { value: 'A', text: 'Bureau principal d’arrondissement / Arrondissementshoofdbureau' },
  { value: 'C', text: 'Bureau principal de circonscription / Kieskringhoofdbureau' },
  { value: 'G', text: 'Bureau principal de la circonscription germanophone / Hoofdbureau van de Duitstalige kieskring' },
  { value: 'O', text: 'Bureau central de province / Centraal provinciaal bureau' },
  { value: 'P', text: 'Bureau principal provincial / Provinciehoofdbureau' },
  { value: 'L', text: 'Bureau principal de collège / Collegehoofdbureau' },
  { value: 'R', text: 'Royaume / Koninkrijk' },
];

export default {
  types,
  levels,
  getEntities(type) {
    return axios.get(`${API_URL_I}/entities/2019/${type}`).then(response => response.data);
  },
  getCandidates(type) {
    return axios.get(`${API_URL_I}/candidates/2019/${type}`).then(response => response.data);
  },
  getResults(type, isTest = false) {
    return axios.get(`${API_URL_R}/results/2019/${type}${isTest ? '?test' : ''}`)
      .then(response => response.data);
  },
  getDetailResults(type, level) {
    return axios.get(`${API_URL_R}/results/2019/${type}/${level}?test`).then(response => response.data);
  },
};
