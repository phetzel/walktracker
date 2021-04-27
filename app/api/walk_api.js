import apiClient from './client';

export const fetchWalks = () => (
    apiClient.get(`/walks`)
);

export const fetchWalk = id => (
    apiClient.get(`/walks/${id}`)
);

export const createWalk = (walk) => (
    apiClient.post('/walks', walk)
);

export const destroyWalk = id => (
    apiClient.post(`/walks/${id}`)
);

