import axios from 'axios';

 const API = axios.create({
    baseURL: 'https://test-test.iran.liara.run/api/v1/',
});
export default API;