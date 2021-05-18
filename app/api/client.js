import { create } from 'apisauce';

const apiClient = create({
    // baseURL: 'http://localhost:3000/api'
    baseURL: 'https://walk-rails.herokuapp.com/api'
});

export default apiClient;