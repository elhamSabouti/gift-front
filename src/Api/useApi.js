import axios from 'axios';

 const API = axios.create({
    baseURL: 'https://gift-app.iran.liara.run/api/v1/',
});
export default API;