import axios from 'axios';

export default axios.create({
  //baseURL: 'http://api.alquran.cloud/v1/'
  baseURL: 'https://api.quran.com/api/v3/'
});
