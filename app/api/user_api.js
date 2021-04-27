import apiClient from './client';

export const fetchUser = id => (
    apiClient.get(`/users/${id}`)
);

export const createUser = () => (
    apiClient.post('/users')
);