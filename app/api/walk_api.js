import apiClient from './client';

export const fetchWalks = (data) => (
    apiClient.get(`/walks`, data)
);

export const fetchWalk = id => (
    apiClient.get(`/walks/${id}`)
);

export const createWalk = (walk) => (
    apiClient.post('/walks', walk)
);

export const destroyWalk = id => (
    apiClient.delete(`/walks/${id}`)
);

